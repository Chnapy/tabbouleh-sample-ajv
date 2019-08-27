import {JSONSchema, JSONString} from "tabbouleh";

@JSONSchema<UserAddress>({
    required: ['street', 'city']
})
export class UserAddress {

    @JSONString
    street: string;

    @JSONString
    city: string;

}