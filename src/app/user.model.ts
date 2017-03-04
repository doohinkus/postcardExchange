import { Postcard } from "./postcard.model";
import { Partner } from "./partner.model";

export class User {
  constructor (
    public address: string,
    public name: string,
    public partners: Array<any>,
    public postcards: Array<any>
  ){}
}
