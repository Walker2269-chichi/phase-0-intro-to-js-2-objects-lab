const employee = {
    name:"Sam",
    streetAddress:"11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,
        name:"Sam",
        streetAddress:"11 Broadway",
    }

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee.name = "Sam";
        employee.streetAddress = "12 Broadway"
        return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    employee = {...employee}
    delete employee.name
    delete employee.streetAddress
    return employee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee;
}