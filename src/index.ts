import Tabbouleh from "tabbouleh";
import Ajv from 'ajv';
import {UserData} from "./UserData";

const schema = Tabbouleh.generateJSONSchema(UserData);

console.log(schema);

const ajv = new Ajv();
const validate = ajv.compile(schema);
const valid = validate({
    name: 'toto',
    age: 45,
    address: {

    }
});

console.log(valid, validate.errors);

document.body.append(
    JSON.stringify(schema)
);
