import {Schema, model} from "mongoose";
//  this is a contructor function used to create new object.

export interface ClientI {
    firstName : string;
    lastName : string;
    email : string;
    mobileNumber : number;
    project : string;
}

const clientSchema = new Schema<ClientI>({
    firstName : { type : String, require : true},
    lastName : { type : String, require : true},
    email : { type : String, require : true},
    mobileNumber : { type : Number, require : true},
    project : { type : String, require : true},

})

const ClientModel = model<ClientI>("todo",clientSchema);

export default ClientModel;


