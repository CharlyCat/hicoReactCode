import axios from "axios";
import React from "react";

// POST new employee record with API call
export const addNewExistingEmployee = async function (employeeID,firstName,lastName,salutation,profileColour,gender,grossSalary) {
    console.log("Im in addNewExistingEmployee API class");
    const baseURL = "http://localhost:8080/java_api_war_exploded/addnewemployee";

    //TODO: POST data to addnewemployee API to add new employee data to DB table
    //TODO: Success : Update local array and clear tempEmployee data
}//end addNewExistingEmployee

/* addnewemployee?employeeID=123&firstName=Test&lastName=Surname&salutation=Mr&profileColour=Blue&gender=Male&grossSalary=123456 */
