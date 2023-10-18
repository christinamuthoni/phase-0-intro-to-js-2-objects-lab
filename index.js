// Write your solution in this file!
let employee = {};
function updateEmployeeWithKeyAndValue(employee, key, value){
    if (employee && typeof employee === 'object') {
        // Create a new object to hold the updated employee data
        const updatedEmployee = { ...employee };
    
        // Update the key with the new value in the updatedEmployee object
        updatedEmployee[key] = value;
    
        // Return the updated employee object
        return updatedEmployee;
}
}
function updateObjectWithKeyAndValue(employee, key, value) {
    let streetAddress = "...11 Broadway" ({}, employee, {[key]: value});
    return streetAddress;
}
  
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key] = value;
   return employee;    
    }

    function deleteFromEmployeeByKey(employee, key) {
        const updatedEmployee = { ...employee };
        if (key in updatedEmployee) {
            // Delete the key from the updatedEmployee object
            delete updatedEmployee[key];
    }
    // Return the updated employee object
  return updatedEmployee;
}

    function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee[key];
        return employee; 
    }