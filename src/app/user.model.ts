import { Postcard } from "./postcard.model";
import { Partner } from "./partner.model";

export class User {
  constructor (
    public participating: boolean,
    public received: boolean,
    public sent: boolean, 
    public address: string,
    public street: string,
    public city: string,
    public state: string,
    public name: string,
    public partner: string
  ){}
}
