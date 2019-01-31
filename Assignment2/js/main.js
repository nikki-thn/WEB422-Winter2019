/*********************************************************************************
* WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Nikki Truong 
* Student ID: 124314173 
* Date: January 31, 2019
*
* Heroku: https://lit-fortress-10601.herokuapp.com/employees
********************************************************************************/ 

var employeesModel = []; 

$(function() { 

    initializeEmployeesModel(); //getting data

    //Handle event when user start searching
    $("#employee-search").on("keyup", function(event){ 
        event.preventDefault();
        getFilteredEmployeesModel(this.value);
    });

    //Handle event when a table row is clicked
    $('.bootstrap-header-table').on('click', '.body-row', function(event)  {

        event.preventDefault();
        let id = $(this).attr('data-id');
        let tempEmp = getEmployeeModelById(id);

        let fullName = tempEmp[0].FirstName + " " + tempEmp[0].LastName; //get full name of employee
        let mDate = moment(tempEmp[0].HireDate); //to format hiredate
        tempEmp[0].HireDate = mDate.format("LL"); //set format

        //Template for modal body
        let modalTemp = _.template('<strong>Address: </strong><%- employee.AddressStreet %> <%- employee.AddressCity %>, <%- employee.AddressState %> <%- employee.AddressZip %> <br/>' +
            '<strong>Phone Number: </strong><%- employee.PhoneNum %> ext: <%- employee.Extension %> <br/>' +
            '<strong>Hire Date: </strong><%- employee.HireDate %>');
        let empModalBody = modalTemp({ 'employee': tempEmp[0] });

        //call method to insert title & body to modal
        showGenericModal(fullName, empModalBody);
    });

});   

//Getting data from Heroku through Ajax call
function initializeEmployeesModel() {

    $.ajax({
        url: "https://lit-fortress-10601.herokuapp.com/employees", 
        type: "GET",
        contentType: "application/json"
    })
    .done(function (data) {
        //parse object from ajax call to employeesModel
        data.forEach(function (emp) { employeesModel.push(emp); });
        refreshEmployeeRows(employeesModel);
    })
    .fail(function (err) {
        //If error display message
        console.log("error: " + err.statusText);
        showGenericModal("Error", "Unable to get Employees");
    });

}

//To generate a modal
function showGenericModal(title, message){
    
    let modalHeader =  $(".modal-header"); 
    let modalBody =  $(".modal-body");
    
    modalHeader.empty();
    modalBody.empty();

    modalHeader.append("<h4>" + title + "</h4>");
    modalBody.append("<p>" + message + "</p>");

    $("#genericModal").modal('show'); //Insert into modal
}

//insert each employee into a table row using template
function  refreshEmployeeRows(employees) {

    let empTemplate = _.template('<% _.forEach(employees, function(employee) { %>' +
                                '<div class="row body-row" data-id="<%- employee._id %>">' +
                                    '<div class="col-xs-4 body-column"><%- employee.FirstName %></div>' +
                                    '<div class="col-xs-4 body-column"><%- employee.LastName %></div>' +
                                    '<div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>' +
                                '</div>' +
                            '<% }); %>');                        
    let rows = empTemplate({'employees': employees});
    
    let tbody = $("#employee-table");

    tbody.empty();
    tbody.append(rows);
}

//method to search employees matches user search keywords
function getFilteredEmployeesModel(filterString){
    
    let keywords = filterString.toLowerCase(); 
    let filteredEmp = $.grep(employeesModel, function(emp) {
        return (emp.FirstName.toLowerCase().match(keywords)|| 
                emp.LastName.toLowerCase().match(keywords) || 
                emp.Position.PositionName.toLowerCase().match(keywords));
    });

    refreshEmployeeRows(filteredEmp);
}

//Get an employee by id
function getEmployeeModelById(id) {

    let filteredEmp = _.filter(employeesModel, function(emp) {
        return emp._id == id;
    });

    return filteredEmp;
}