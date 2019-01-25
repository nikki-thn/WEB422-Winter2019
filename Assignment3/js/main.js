/*********************************************************************************
* WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Nikki Truong 
* Student ID: 124314173 
* Date: January 25, 2019
*
* Heroku: https://infinite-plains-57503.herokuapp.com/employees
********************************************************************************/ 

var employeesModel = []; 

$(function() { 

    initializeEmployeesModel();

    $("#employee-search").on("keyup", function(event){ 
        event.preventDefault();
        getFilteredEmployeesModel(this.value);
    });

    $('.bootstrap-header-table').on('click', '.body-row', function() {

        let tempEmp = getEmployeeModelById("5997456604a898b529b5ed40");
        alert(tempEmp);

        // let fullName = tempEmp.FirstName + " " + tempEmp.LastName;
        // let mDate = moment(tempEmp.HireDate);
        // tempEmp.HireDate = mDate.format("LLL");

        // let modalTemp = _.template('<strong>Address: </strong><%- employee.AddressStreet %> <%- employee.AddressCity %>, <%- employee.AddressState %> <%- employee.AddressZip %> <br/>' +
        //     '<strong>Phone Number: </strong><%- employee.PhoneNum %> ext: <%- employee.Extension %> <br/>' +
        //     '<strong>Hire Date: </strong><%- employee.HireDate %>');

        // let empModalBody = modalTemp({ 'employee': copy });
        showGenericModal("jgxjfgxf", "hgfjhfsjd");
    });

});   


function initializeEmployeesModel() {

    $.ajax({
        url: "https://infinite-plains-57503.herokuapp.com/employees", 
        type: "GET",
        contentType: "application/json"
    })
    .done(function (data) {
        //parse object from ajax call to employeesModel
        data.forEach(function (emp) { employeesModel.push(emp); });
        refreshEmployeeRows(employeesModel);
    })
    .fail(function (err) {
        console.log("error: " + err.statusText);
        showGenericModal("Error", "Undble to get Employees");
    });

}

function showGenericModal(title, message){
    
    let modalHeader =  $(".modal-header");
    let modalBody =  $(".modal-body");
    
    modalHeader.empty();
    modalBody.empty();

    modalHeader.append("<h4>" + title + "</h4>");
    modalBody.append("<p>" + message + "</p>");

    $("#genericModal").modal('show');
}

function  refreshEmployeeRows(employees) {

    let empTemplate = _.template('<% _.forEach(employees, function(employee) { %>' +
                                '<div class="row body-row" data-id="<%- employee._id %>">' +
                                '<div class="col-xs-4 body-column"><%- employee._id %><%- employee.FirstName %></div>' +
                                '<div class="col-xs-4 body-column"><%- employee.LastName %></div>' +
                                '<div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>' +
                                '</div>' +
                            '<% }); %>');                        
    let rows = empTemplate({'employees': employees});
    
    let tbody = $("#employee-table");

    tbody.empty();
    tbody.append(rows);
}

function getFilteredEmployeesModel(filterString){
    
    let keywords = filterString.toLowerCase(); 
    let filteredEmp = $.grep(employeesModel, function(emp) {
        return (emp.FirstName.toLowerCase().match(keywords)|| 
                emp.LastName.toLowerCase().match(keywords) || 
                emp.Position.PositionName.toLowerCase().match(keywords));
    });

    refreshEmployeeRows(filteredEmp);
}

function getEmployeeModelById(id) {

    let filteredEmp = _.filter(employeesModel, function(emp) {
        if (emp._id == id){
        alert(emp._id);
        }
        return emp._id == id;
    });

    refreshEmployeeRows(filteredEmp);
}