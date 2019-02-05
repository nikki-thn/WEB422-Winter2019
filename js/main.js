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

//Getting data from Heroku through Ajax call
function initializeData(collection) {

    // Heroku API url
    var herokuUrl = "https://lit-fortress-10601.herokuapp.com/" + collection;

    return new Promise((resolve, reject) => {
        $.ajax({
            
            url: herokuUrl,
            type: "GET",
            contentType: "application/json"
        })
            .done(function (data) {
       
                switch (collection) {
                    case "employees":
                        ko.mapping.fromJS(data, viewModel.employees);
                        console.log(viewModel.teams);
                        break;
                    case "teams":
                        ko.mapping.fromJS(data, viewModel.teams);
                        console.log(viewModel.teams);
                        break;
                    case "projects":
                        ko.mapping.fromJS(data, viewModel.projects);
                        console.log(viewModel.teams);
                        break;
                    default:
                        break;
                }

                resolve("Data loaded");

            })
            .fail(function (err) {
                console.log("error loading the: " + collection + " data");
                console.log(err.statusText);
                reject("loading failed");
            });
    });
}

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


$(function () {

    initializeData("teams");
        // .then(initializeData("employees"))
        // .then(initializeData("projects"))
        // .then(() => {
        //     ko.applyBindings(viewModel);
        //     $(".multiple").multipleSelect({ filter: true });
        //     $(".single").multipleSelect({ single: true, filter: true });
        // }).catch(function (err) {
        //     showGenericModal("Error", err);
        // });
});
