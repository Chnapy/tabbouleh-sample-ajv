import Tabbouleh from "tabbouleh";
import Ajv, {ErrorObject} from 'ajv';
import {UserData} from "./UserData";
import {DOMInit} from "./domManipulation";

// generate the UserData schema
const schema = Tabbouleh.generateJSONSchema(UserData);
console.log('schema:', schema);

// instantiate AJV & compile the schema
const ajv = new Ajv();
const validate = ajv.compile(schema);

const defaultData: UserData = {
    name: 'Toto',
    age: 28,
    address: {
        city: 'Paris',
        street: '56 rue Saint Martin'
    }
};

// validate data with AJV
function doValidate(data: object): { valid: boolean; errors: ErrorObject[] } {
    const valid = validate(data) as boolean;

    return {
        valid,
        errors: validate.errors || []
    };
}

DOMInit(schema, defaultData, doValidate);