/*********************************************************************************
* WEB422 – Assignment 3
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Nikki Truong 
* Student ID: 124314173 
* Date: February 5, 2019
*
* Heroku: https://lit-fortress-10601.herokuapp.com
********************************************************************************/

var viewModel = {
    teams: ko.observable([]),
    employees: ko.observable([]),
    projects: ko.observable([])
};

//To generate a modal
function showGenericModal(title, message) {

    let modalHeader = $(".modal-header");
    let modalBody = $(".modal-body");

    modalHeader.empty();
    modalBody.empty();

    modalHeader.append("<h4>" + title + "</h4>");
    modalBody.append("<p>" + message + "</p>");

    $("#genericModal").modal('show'); //Insert into modal
}

//call api to get teams data 
function initializeTeams() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://lit-fortress-10601.herokuapp.com/teams-raw',
            type: 'GET',
            contentType: 'application/json'
        }).done((data) => {
            data.sort((a,b) => {
                return parseInt(a.TeamName.replace('Team ', '')) > parseInt(b.TeamName.replace('Team ', ''));
            });
            viewModel.teams = ko.mapping.fromJS(data);
            resolve("Success loading team data");
        }).fail((err) => {
            reject("Error loading team data");
        });
    });
};

//call api to get employees data 
function initializeEmployees() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://lit-fortress-10601.herokuapp.com/employees',
            type: 'GET',
            contentType: 'application/json'
        }).done((data) => {
            viewModel.employees = ko.mapping.fromJS(data);
            resolve("Success loading employee data");
        }).fail((err) => {
            reject("Error loading employee data");
        });
    });
};

//call api to get projects data 
function initializeProjects() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://lit-fortress-10601.herokuapp.com/projects/",
            type: 'GET',
            contentType: 'application/json'
        }).done((data) => {
            viewModel.projects = ko.mapping.fromJS(data);
            resolve("Success loading data");
        }).fail((err) => {
            reject("Error loading project data");
        });
    });
};

//call init methods to get data and store to KO view model
$(function () {
    initializeTeams()
        .then(initializeEmployees)
        .then(initializeProjects)
        .then(() => {
            ko.applyBindings(viewModel);
            $('.multiple').multipleSelect({ filter: true });
            $('.single').multipleSelect({ single: true, filter: true });
        }).catch((err) => {
            showGenericModal("Error", err);
        });
});

//update changes to team Api
function saveTeam() {
    var team = ko.mapping.toJS(this);
    $.ajax({
        url: 'https://lit-fortress-10601.herokuapp.com/team/' + team._id,
        type: 'PUT',
        data: JSON.stringify({
            "Projects": team.Projects,
            "Employees": team.Employees,
            "TeamLead": team.TeamLead
        }),
        contentType: 'application/json'
    }).done(() => {
        showGenericModal("Success", team.TeamName + " updated successfully");
    }).fail((err) => {
        showGenericModal("Error", err + " Error updating the team information");
    });
};
