import './App.css';
import 'bulma/css/bulma.min.css';
import {Component} from "react";

class App extends Component {
    //...................................................................................................................................
    //STATE & LIFECYCLE
    //....................................................................................................................................

    constructor() {
        super()

        //Temp employee details (making up the tempEmployee)
        let tempEmployeeDetails =
            {
                employeeID: "",
                firstName: "",
                lastName: "",
                salutation: "Dr",
                profileColour: "White",
                gender: "Male",
                grossSalary: "",
            }

        this.state = {
            employeeListArray: [],
            tableRowColours: [],
            employeeSalutationOptions: [],
            tempEmployee: tempEmployeeDetails,
            currentSelectedEmployeeRow: -1,
            addEmployeeButtonEnabled: true, //True = Visible & False = Hidden
            currentSaveMode:0, //Mode to indicate if Save must update existing or create new : 0 = Nothing set, 1 = Edit / Update, 2 = Add new //TODO Make Enum
            inputFormEnabled: false, //When first load application the form wont be loaded
            firstTime:true
        }

        //BIND FUNC TO THIS STATE
        //??????
    }//end constructor

    componentWillMount() {
        //Ensure default data in array is only load first time app started so not overwritten
        if(this.state.firstTime=== true) {
            //Temp : Employee list array
            this.setState({
                employeeListArray: [
                    {
                        employeeID: 1,
                        firstName: "Charlene",
                        lastName: "Barnes",
                        salutation: "Ms",
                        profileColour: "Blue",
                        gender: "Female",
                        grossSalary: "10 000"
                    },
                    {
                        employeeID: 2,
                        firstName: "Bob",
                        lastName: "Beast",
                        salutation: "Mr",
                        profileColour: "Red",
                        gender: "Male",
                        grossSalary: "20 000"
                    },
                    {
                        employeeID: 3,
                        firstName: "John",
                        lastName: "Jones",
                        salutation: "Mr",
                        profileColour: "Green",
                        gender: "Male",
                        grossSalary: "30 000"
                    },
                    {
                        employeeID: 4,
                        firstName: "Mary",
                        lastName: "Jane",
                        salutation: "Mrs",
                        profileColour: "White",
                        gender: "Female",
                        grossSalary: "40 000"
                    }
                ]

            });
            this.setState({firstTime: false});
        }//end of if

    }//end componentWillMount

    //.........................................................................................................................
    // EVENT HANDLERS
    //--------------------------------------------------------------------------------------------------------------------------

    //onClick Button_AddNewEmployee : User click button to add employee.
    // Button will be set to false so hidden and user form will be triggered to display
    onAddNewEmployee = () => {
        //Set Save Mode status to 2 (add new employee record)
        this.setState({currentSaveMode: 2});
        //Hide the Button AddNewEmployee
        this.setState({addEmployeeButtonEnabled: false});
        //Make input form visible
        this.setState({inputFormEnabled: true});
    }//end onAddNewEmployee

    //onClick Employee Table Row
    currentRowClick = (arrayIndex) => {
        //Get onClick table row array index and save into State
        let currentTableRow = arrayIndex;
        this.setState({currentSelectedEmployeeRow: currentTableRow});
        console.log("Current set table row index =  " + currentTableRow);

        //Set tempEmployee record with selected employees data
        let currentTableArray = this.state.employeeListArray;

        //Reading selected employee data fields and set into temp records
        this.setState({addEmployeeButtonEnabled: true});
        let tempEmployeeDetails = {
            employeeID: "",
            firstName: "",
            lastName: "",
            salutation: "Dr",
            profileColour: "White",
            gender: "Male",
            grossSalary: "",
        }

        tempEmployeeDetails.employeeID = currentTableArray[currentTableRow].employeeID
        console.log("Selected employee Id set to  =  " + " " + tempEmployeeDetails.employeeID);

        tempEmployeeDetails.firstName = currentTableArray[currentTableRow].firstName
        console.log("Selected employee firstName set to  =  " + " " + tempEmployeeDetails.firstName);

        tempEmployeeDetails.lastName = currentTableArray[currentTableRow].lastName
        console.log("Selected employee lastName set to  =  " + " " + tempEmployeeDetails.lastName);

        tempEmployeeDetails.salutation = currentTableArray[currentTableRow].salutation
        console.log("Selected employee salutation set to  =  " + " " + tempEmployeeDetails.salutation);

        tempEmployeeDetails.gender = currentTableArray[currentTableRow].gender
        console.log("Selected employee gender set to  =  " + " " + tempEmployeeDetails.gender);

        tempEmployeeDetails.grossSalary = currentTableArray[currentTableRow].grossSalary
        console.log("Selected employee gender set to  =  " + " " + tempEmployeeDetails.grossSalary);

        tempEmployeeDetails.profileColour = currentTableArray[currentTableRow].profileColour
        console.log("Selected employee gender set to  =  " + " " + tempEmployeeDetails.profileColour);

        this.setState({tempEmployee: tempEmployeeDetails})

        //Make input form visible so it can display the current selected employees details (from tempEmployee record)
        this.setState({inputFormEnabled: true});

        //Hide addNewButton when busing viewing an record
        this.setState({addEmployeeButtonEnabled: false});

        //Set Save Mode status to 1 (edit existing employee record)
        this.setState({currentSaveMode: 1});
    }//end currentRowClick

    //Input Handler : Employee# / ID
    handleEmployeeIDInput = event => {
        event.preventDefault();
        let inputEmployeeID = event.target.value;
        console.log("ID input =" + inputEmployeeID);
        if (inputEmployeeID === "") {
            alert("Please enter an employee number");
        }
        this.setState({
            tempEmployee: {...this.state.tempEmployee, "employeeID": inputEmployeeID}
        });
    }// end of event handleEmployeeIDInput

    //Input Handler : First name
    handleFirstNameInput = event => {
        event.preventDefault();
        let inputFirstName = event.target.value;
        console.log("First name input =" + inputFirstName);
        if (inputFirstName === "") {
            alert("Please enter first name(s)");
        }
        this.setState({
            tempEmployee: {...this.state.tempEmployee, "firstName": inputFirstName}
        });
    }// end of event handleFirstNameInput

    //Input Handler : Last name
    handleLastNameInput = event => {
        event.preventDefault();
        let inputLastName = event.target.value;
        console.log("Last name input =" + inputLastName);
        if (inputLastName === "") {
            alert("Please enter last name");
        }
        this.setState({
            tempEmployee: {...this.state.tempEmployee, "lastName": inputLastName}
        });
    }// end of event handleLastNameInput

    //Drop-down Input handler event change : Select salutation
    handleDownOptionSelection = event => {
        //Stop from clearing all functions binding that happens in constructor
        event.preventDefault();
        let selectedSalutation = event.target.value;
        console.log("Salutation drop-down selection input =" + selectedSalutation);
        //Set new drop-down selection into state
        this.setState({
            tempEmployee: {...this.state.tempEmployee, "salutation": selectedSalutation}
        });
    }//end handleDownOptionSelection

    //Radio Button Input handler event change : Select employee gender
    handleRadioGenderSelection = event => {
        let selectedGender = event.target.value;
        console.log("Gender radio selection input =" + selectedGender);
        //Set gender selection into state
        this.setState({
            tempEmployee: {...this.state.tempEmployee, "salutation": selectedGender}
        });
    }//end handleRadioGenderSelection

    //Gross Salary Input handler: Enter numeric only salary
    handleGrossSalaryInput = event => {
        //Stop from clearing all functions binding that happens in constructor
        event.preventDefault();
        let enteredSalary = event.target.value;
        console.log("Gross salary input =" + enteredSalary);
        //Set gross salary selection into state
        this.setState({
            tempEmployee: {...this.state.tempEmployee, "grossSalary": enteredSalary}
        });
    }//end handleGrossSalaryInput

    //Profile Colour Input handler: select employee profile colour based on selection options
    handleRadioProfileSelection = event => {
        let selectedProfileColour = event.target.value;
        console.log("Selected Profile colour input =" + selectedProfileColour);
        //Set gross salary selection into state
        this.setState({
            tempEmployee: {...this.state.tempEmployee, "profileColour": selectedProfileColour}
        });
    }//end handleRadioProfileSelection

    //OnClick Save button : Determine if it a new employee record save or update existing record and set actions accordingly
    onClickSaveButton = event => {
        console.log("onClickSaveButton was just clicked");
        //Get current SaveMode statue
        let currentStatus = this.state.currentSaveMode;

        if (currentStatus === 1) {
            console.log("onClickSaveButton  is going to call the onClickUpdateEmployeeData event");
            this.onClickUpdateEmployeeData(event);
        } else if (currentStatus === 2)
        {
            console.log("onClickSaveButton  is going to call the onClickSaveNewEmployee event");
            this.onClickSaveNewEmployee(event);
        }
        else
        {
            console.log("onClickSaveButton - current SaveMode status error. Undefined")
        }
    }//end onClickSaveButton

    //onClick Update Existing Employee Button : Update current employee details which was edited
    onClickUpdateEmployeeData = () => {
        console.log("I'm in the onClickSaveNewEmployee method");
        //TODO : Call saveEmployee API function call and send through input values to be saved
        //TODO : This function will also clear the temp array input fields & make add employee button visible??

        //TODO : This is the temp temp process
        let copyOfArray = this.state.employeeListArray.slice(); //copy the array
        let tempEmployee = this.state.tempEmployee;
        let currentArrayIndex = this.state.currentSelectedEmployeeRow;

        copyOfArray[currentArrayIndex] = tempEmployee //execute the manipulations
        this.setState({employeeListArray: copyOfArray}) //set the new state

        copyOfArray[currentArrayIndex] = tempEmployee;

        //TODO : API should be call and handle the update to DB & if successful then update local employeeListArray

        //Clear the tempEmployee records
        this.clearEmployeeDataObj();

        //Make AddNewEmployee button visible again
        this.setState({addEmployeeButtonEnabled: true});
        //Set input form state so its hidden so that can verify that inputs where saved
        this.setState({inputFormEnabled: false});
        //Update complete - Set SaveMode to 0 (no longer set)
        this.setState({currentSaveMode : 0});
    }//end onClickUpdateEmployeeData

    //onClick Save New Employee Button : Save input form data and create new employee & Make Add new employee button visible
    onClickSaveNewEmployee = () => {
        console.log("I'm in the onClickSaveNewEmployee method");
        //TODO : Call saveEmployee API function call and send through input values to be saved
        //TODO : This function will also clear the temp array input fields & make add employee button visible??

        //TODO : This is the temp manual process
        let employeeArray = this.state.employeeListArray;
        let tempEmployee = this.state.tempEmployee;

        employeeArray.push(tempEmployee);
        console.log("Employee array data =" + JSON.stringify(employeeArray));

        //Save the new employee to the state
        this.setState({employeeListArray: employeeArray});

        //Clear the tempEmployee records
        this.clearEmployeeDataObj();

        //Make add new Employee button visible again
        this.setState({addEmployeeButtonEnabled: true});
        //Set input form state so its hidden so that can verify that inputs where saved
        this.setState({inputFormEnabled: false});
        //Save new complete - Set SaveMode to 0 (no longer set)
        this.setState({currentSaveMode : 0});
    }//end onClickSaveNewEmployee

    //onClick Cancel New Employee Button : Cancel input form data and clear tempEmployee data & Make Add new employee button visible
    clearEmployeeDataObj = event => {
        //Clear the tempEmployee fields
        let clearedTempEmployeeItemObj = {
            employeeID: "",
            firstName: "",
            lastName: "",
            salutation: "Dr",
            profileColour: "White",
            gender: "Male",
            grossSalary: "",
        }
        console.log("Temp employee record has been cleared and contains following" + "" + JSON.stringify(clearedTempEmployeeItemObj));
        this.setState({tempEmployee: clearedTempEmployeeItemObj});
    }//end onClickCancelNewEmployee

    //.................................................................................................................................
    // POPULATE RENDER OBJECTS
    //..................................................................................................................................

    //Display Employee Button: Check state of button (active or disabled)
    displayAddEmployeeButton = () => {
        let currentButtonStatus = this.state.addEmployeeButtonEnabled;
        //If true button is visible (form display information) else is false button is hidden (form input field active)
        if (currentButtonStatus === true) {
            return <div>
                <button className="button is-small is-rounded is-active is-right"
                        onClick={this.onAddNewEmployee}>Add New Employee
                </button>
            </div>
        }
    }//end displayAddEmployeeButton

    //Generate table headers for employee table
    displayTableHeaders = () => {
        let headerRow =
            <tr>
                <th>Employee#</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Salutation</th>
                <th>Profile Colour</th>
            </tr>
        return headerRow
    }//end displayTableHeaders

    //Populate employee table :Extract rows from local state EmployeeList array so that they can be rendered into a table (result)
    rowEmployeeDetails = () => {

        let employeeList = this.state.employeeListArray;
        let employeeRow;

        //console.log("There are " + employeeList.length + " employees");

        if (employeeList !== "") {
            //The MAP function will now iterate (for-loop) through every array item and display it's details
            employeeRow = employeeList.map((singleEmployeeItem, arrayIndex) => {
                let innerRowElement = "";

                //Enter current employee in array into table
                innerRowElement = <tr key={arrayIndex} value={arrayIndex}
                                      bgcolor={this.handleTableRowColour(singleEmployeeItem.profileColour)}
                                      onClick={this.currentRowClick.bind(this, arrayIndex)}>
                    <td>{singleEmployeeItem.employeeID}</td>
                    <td>{singleEmployeeItem.firstName}</td>
                    <td>{singleEmployeeItem.lastName}</td>
                    <td>{singleEmployeeItem.salutation}</td>
                    <td>{singleEmployeeItem.profileColour}</td>
                </tr>
                //console.log("currentSelectedEmployeeRow has set the current row state to " + " " + this.state.currentSelectedEmployeeRow)

                return innerRowElement;
            });
            return employeeRow;
        } else {
            //There there are no employees to display. Return nothing.
            return "";
        }
    }//end rowEmployeeDetails

    //Display Employee Information Form : to view/edit or add new employee
    displayEmployeeDetailsForm = () => {
        let tempEmployeeInputs = this.state.tempEmployee;
        let inputFormStatus = this.state.inputFormEnabled;
        //console.log("Entering the displayEmployeeDetailsForm")
        //console.log("Entering the displayEmployeeDetailsForm tempEmployeeInputs =" + " " + JSON.stringify(tempEmployeeInputs))

        //When first enter application input form wont display until user chooses to view existing employee record or Add New Employee button is clicked
        if (inputFormStatus == false) {
            return
        }

        //Display input form
        let inputFormData =
            <form className="columns is-mobile is-centered">
                <div className="column is-half is-pulled-left">
                    <div className="block">
                        <h1 className='title'>Employee Information</h1>
                        <h1 className='subtitle'>Employee# {tempEmployeeInputs.employeeID} : {tempEmployeeInputs.salutation} {tempEmployeeInputs.firstName} {tempEmployeeInputs.lastName} </h1>
                        <div className="buttons is-grouped-right">
                            {this.handleSaveButtonColour()}
                            <button className="button is-small is-rounded is-outlined is-active"
                                    onClick={this.clearEmployeeDataObj}>Cancel
                            </button>
                        </div>
                    </div>

                    <div className="form-inline">
                        <label className="label">Employee#</label>
                        <div className="form-group">
                            <input className="input" type="number" placeholder="employeeID"
                                   value={tempEmployeeInputs.employeeID}
                                   onChange={this.handleEmployeeIDInput}/>
                        </div>
                    </div>

                    <div className="form-inline">
                        <label className="label">First Name(s)</label>
                        <div className="form-group">
                            <input className="input" type="text" placeholder="First name"
                                   value={tempEmployeeInputs.firstName}
                                   onChange={this.handleFirstNameInput}/>
                        </div>
                    </div>

                    <div className="form-inline">
                        <label className="label">Last Name</label>
                        <div className="form-group">
                            <input className="input" type="text" placeholder="Last Name"
                                   value={tempEmployeeInputs.lastName} onChange={this.handleLastNameInput}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Salutation</label>
                        <div className="dropdown">
                            <select value={tempEmployeeInputs.salutation}
                                    onChange={this.handleDownOptionSelection}>
                                <option value="Dr">Dr</option>
                                <option value="Mr">Mr</option>
                                <option value="Ms">Ms</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Mx">Mx</option>
                            </select>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="field-label">
                            <label className="label">Gender</label>
                        </div>
                        <div className="field-body">
                            <div className="control">
                                <label className="radio">
                                    <input type="radio" name="radioGender" id="male" value="male"
                                           checked={tempEmployeeInputs.salutation === 'Mr'}
                                           onClick={this.handleRadioGenderSelection}/>
                                    Male
                                </label>
                                <label className="radio">
                                    <input type="radio" name="radioGender" id="female" value="female"
                                           checked={tempEmployeeInputs.salutation === 'Ms' || tempEmployeeInputs.salutation === "Mrs"}
                                           onClick={this.handleRadioGenderSelection}/>
                                    Female
                                </label>
                                <label className="radio">
                                    <input type="radio" name="radioGender" id="unspecified" value="unspecified"
                                           checked={tempEmployeeInputs.salutation === 'Dr' || tempEmployeeInputs.salutation === "Mx"}
                                           onClick={this.handleRadioGenderSelection}/>
                                    Unspecified
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group form-inline">
                        <label className="label">Gross Salary R</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Gross salary"
                                   value={tempEmployeeInputs.grossSalary} onChange={this.handleGrossSalaryInput}/>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="field-label">
                            <label className="label">Profile Colour</label>
                        </div>
                        <div className="field-body">
                            <div className="control">
                                <label className="checkbox">
                                    <input type="checkbox" name="checkProfile" id="default" value="White"
                                           checked={tempEmployeeInputs.profileColour === 'White'}
                                           onChange={this.handleRadioProfileSelection}/>
                                    Default
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" name="checkProfile" id="red" value="Red"
                                           checked={tempEmployeeInputs.profileColour === 'Red'}
                                           onChange={this.handleRadioProfileSelection}/>
                                    Red
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" name="checkProfile" id="blue" value="Blue"
                                           checked={tempEmployeeInputs.profileColour === 'Blue'}
                                           onChange={this.handleRadioProfileSelection}/>
                                    Blue
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" name="checkProfile" id="green" value="Green"
                                           checked={tempEmployeeInputs.profileColour === 'Green'}
                                           onChange={this.handleRadioProfileSelection}/>
                                    Green
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        //console.log("About to return the form input data within the displayEmployeeDetailsForm function")

        //Display the input form
        return <form>
            {inputFormData}
        </form>
    }//end displayEmployeeDetailsForm

    //Handle Table row colour (based on profile colour selection)
    handleTableRowColour = (selectedProfileColour) => {
        //Set table colour based on employee selected profile colour
        if (selectedProfileColour === "White") {
            return '#ffffff'
        } else if (selectedProfileColour === "Red") {
            return '#e33d3d'
        } else if (selectedProfileColour === "Blue") {
            return '#3ea1cf'
        } else if (selectedProfileColour === "Green") {
            return '#72ed7e'
        }
    }//end handleTableRowColour

    //Handle Save button on input form display (based on profile colour selection)
    handleSaveButtonColour = () => {
        let selectedProfileColour = this.state.tempEmployee.profileColour;
        console.log("Inside handleSaveButtonColour");
        //console.log("handleSaveButtonColour selectedProfileColour = " + " " + selectedProfileColour);
        let loadSaveButton;
        if (selectedProfileColour === "White") {
            console.log("WHITE")
            loadSaveButton = <button className="button is-small is-rounded is-black is-outlined"
                                     onClick={this.onClickSaveButton}>Save Employee Information
            </button>
        } else if (selectedProfileColour === "Red") {
            console.log("RED")
            loadSaveButton = <button className="button is-small is-rounded is-danger"
                                     onClick={this.onClickSaveButton}>Save Employee Information
            </button>
        } else if (selectedProfileColour === "Blue") {
            console.log("BLUE")
            loadSaveButton = <button className="button is-small is-rounded is-info"
                                     onClick={this.onClickSaveButton}>Save Employee Information
            </button>

        } else if (selectedProfileColour === "Green") {
            console.log("GREEN")
            loadSaveButton = <button className="button is-small is-rounded is-primary"
                                     onClick={this.onClickSaveButton}>Save Employee Information
            </button>
        }
        console.log("Finished making button")

        return loadSaveButton;
    }//end handleSaveButtonColour

//................................................................................................................................
//DISPLAY (RENDER)
//..................................................................................................................................

    render() {

        return (
            <div className="container">

                <section className="hero is-centered">
                    <div className="hero-body">
                        <p className="title">
                            Peanut Butter Payroll
                        </p>
                    </div>
                </section>

                <div className="table-container">
                    <table className="table is-bordered is-selected is-fullwidth">
                        <thead>
                        {this.displayAddEmployeeButton()}
                        {this.displayTableHeaders()}
                        </thead>
                        <tbody>
                        {this.rowEmployeeDetails()}
                        </tbody>
                    </table>
                </div>

                &emsp;
                <div className="container">
                    {this.displayEmployeeDetailsForm()}
                </div>

            </div>
        )
    }

    //end render

} //end class App

export default App;