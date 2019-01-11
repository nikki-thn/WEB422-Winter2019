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
********************************************************************************/ 

window.onload = function(){
    
    event.preventDefault();

    // Selectors:  
    let well = $( ".well" );

    $("#teams-menu").on("click", function(){ 
   
        $.ajax({
            url: "http://localhost:8081/teams", 
            type: "GET",
            contentType: "application/json"
        })
        .done(function (teams) {
            well.empty();
            well.append('<h3>Teams</h3>');
            well.append('<p>' + JSON.stringify(teams) + '</p>');       
        })
        .fail(function (err) {
            console.log("error: " + err.statusText);
        });
    });

    $("#employees-menu").on("click", function(){ 
        $.ajax({
            url: "http://localhost:8081/employees", 
            contentType: "application/json"
        })
        .done(function (employees) {
            console.log(employees); 
            well.empty();
            well.append('<h3>Employees</h3>');
            well.append('<p>' + JSON.stringify(employees) + '</p>');      
        })
        .fail(function (err) {
            console.log("error: " + err.statusText);
        });
    });

    $("#projects-menu").on("click", function(){ 
        $.ajax({
            url: "http://localhost:8081/projects", 
            type: "GET",
            contentType: "application/json"
        })
        .done(function (projects) {
            well.empty();
            well.append('<h3>Projects</h3>');
            well.append('<p>' + JSON.stringify(projects) + '</p>');      
        })
        .fail(function (err) {
            console.log("error: " + err.statusText);
        });
    });

    $("#positions-menu").on("click", function(){ 
        $.ajax({
            url: "http://localhost:8081/positions", // change "your teams api url" to your Teams API url on Heroku
            type: "GET",
            contentType: "application/json"
        })
        .done(function (positions) {
            well.empty();
            well.append('<h3>Positions</h3>');
            well.append('<p>' + JSON.stringify(positions) + '</p>');     
        })
        .fail(function (err) {
            console.log("error: " + err.statusText);
        });
    });
          
}
