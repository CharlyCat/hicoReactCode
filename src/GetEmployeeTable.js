import axios from "axios";
import React from "react";

// GET Employee list (MySQL EmployeeTable)
export const fetchEmployeeList = async function () {
    console.log("Im in fetchEmployeeList API class");
    //Temp employeeList data (getemployeelist API should populate state array)
    let employeeList =
        [
            {
                employeeID:111,
                firstName:"Charlene",
                lastName:"Barnes",
                salutation:"Mrs",
                gender:"Female",
                grossSalary:200000,
                profileColour:"Blue"
            },
            {
                employeeID:112,
                firstName:"John",
                lastName:"Doe",
                salutation:"Dr",
                gender:"Male",
                grossSalary:657000,
                profileColour:"Red"
            },
            {
                employeeID:113,
                firstName:"Sue",
                lastName:"Smith",
                salutation:"Ms",
                gender:"Female",
                grossSalary:342000,
                profileColour:"White"
            },
            {
                employeeID:114,
                firstName:"Chris",
                lastName:"Henderson",
                salutation:"Mr",
                gender:"Male",
                grossSalary:1234700,
                profileColour:"Green"
            },
        ]

    this.setState({employeeListArray: employeeList})
}//end fetchEmployeeList

/*
const baseURL = "http://localhost:8080/java_api_war_exploded/getemployeelist";
axios.get(baseURL, {withCredentials: true})
    .then(res => {
        console.log("API returned... saving the data")
        const employList = res.data;
        console.log("res then section  results = " + JSON.stringify(employList));
        this.setState({employeeListArray: employList});
    })
--------------------------------------------------------------------------------
const baseURL = "http://localhost:8080/java_api_war_exploded/getemployeelist";
const [post, setPost] = React.useState(null);

//Fetch data from Java API
const employeeListResponse = await fetch('http://localhost:8080/java_api_war_exploded/getemployeelist', {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then((json) => {
    return
});
//Unpack result returned from API call into local state variable

const employeeList = employeeListResponse.results;
console.log("Employee list results from API call =" + JSON.stringify(employeeList));

//Unpacked JSON data set to employeeListArray
this.setState({employeeListArray: employeeList})
-------------------------------------------------------------------------------------------------
Sample Code:
fetch('https://example.com/data').then((response) => response.json()).then((json) => {
    return data.names;
}).catch((error) => {
    console.error(error);
});
 */