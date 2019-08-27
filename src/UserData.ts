import {UserAddress} from "./UserAddress";
import {JSONObject, JSONSchema} from "tabbouleh";

@JSONSchema<UserData>({
    required: ['name', 'age', 'address']
})
export class UserData {

    name: string;

    age: number;

    @JSONObject(() => UserAddress)
    address: UserAddress;

}