import { Postcard } from "./postcard.model";

export class User {
  constructor (
    public name: string,
    public namePostcard: Postcard [],
    public partnerPostcard: Postcard []
  ){}
}
