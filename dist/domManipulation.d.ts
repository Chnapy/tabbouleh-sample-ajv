import { ErrorObject } from "ajv";
export declare function DOMInit(schema: object, defaultData: object, doValidate: (data: object) => {
    valid: boolean;
    errors: ErrorObject[];
}): void;
