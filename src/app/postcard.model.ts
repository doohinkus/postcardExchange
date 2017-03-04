export class Postcard {
  constructor (
    public city: string,
    public state: string,
    public lat: number,
    public lon: number,
    public received: boolean,
    public sent: boolean,
    public type: string

  ){}
}
