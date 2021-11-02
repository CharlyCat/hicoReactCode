import axios from "axios";
import React from "react";

// POST update to existing employee record with API call
export const updateExistingEmployee = async function (currentArrayIndex, employeeID,firstName,lastName,salutation,profileColour,gender,grossSalary) {
    console.log("Im in updateExistingEmployee API class");
    const baseURL = "http://localhost:8080/java_api_war_exploded/updateemployeerecord";
    //TODO: POST data to updateemployeerecord API to save edited employee data to DB table
    //TODO: Success : Update local array and clear tempEmployee data
}//end updateExistingEmployee

/* updateemployeerecord?employeeID=123&firstName=Billy&lastName=Surname&salutation=Dr&profileColour=White&gender=Male&grossSalary=654321 */