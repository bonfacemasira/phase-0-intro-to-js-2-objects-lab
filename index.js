// Write your solution in this file!
const employee = {
    name:'Bonface',
    streetAddress: 'Kahawa',
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]:value,
    };
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    'name',
    'Meshack'
)

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;

    return obj;
}

const newStreetAddress = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', 'Thika Road');

function deleteFromEmployeeByKey(employee, key){
    const veryNewEmployee = {...employee};

    delete veryNewEmployee.name;
    delete veryNewEmployee.streetAddress;

    return veryNewEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    delete employee.streetAddress;

    return employee;
}