/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Nikki Truong 
* Student ID: 124314173 
* Date: January 11, 2019
*
* Heroku: https://infinite-plains-57503.herokuapp.com/employees
********************************************************************************/ 

window.onload = function(){
//$(function() { 
    
    event.preventDefault();

    $("#teams-menu").on("click", function(){ 
        makeAjaxCall("teams");
    });

    $("#employees-menu").on("click", function(){ 
        makeAjaxCall("employees");
    });

    $("#projects-menu").on("click", function(){ 
        makeAjaxCall("projects");
    });

    $("#positions-menu").on("click", function(){ 
        makeAjaxCall("positions");
    });
        
}

function makeAjaxCall(collection){

    let well = $( ".well" ); //select the well to append
    // Heroku API url
    var herokuUrl = "http://localhost:8081/employees" + collection;
    
    $.ajax({
        url: herokuUrl, 
        type: "GET",
        contentType: "application/json"
    })
    .done(function (data) {
        well.empty();
        well.append('<h3>' + collection.charAt(0).toUpperCase() + collection.substr(1) + '</h3>');
        well.append('<p>' + JSON.stringify(data) + '</p>');     
    })
    .fail(function (err) {
        console.log("error: " + err.statusText);
    });
}
//});