import axios from "axios";
import React from "react";

// POST new employee record with API call
export const addNewExistingEmployee = async function (employeeID,firstName,lastName,salutation,profileColour,gender,grossSalary) {
    console.log("Im in addNewExistingEmployee API class");
    const baseURL = "http://localhost:8080/java_api_war_exploded/addnewemployee";

}
