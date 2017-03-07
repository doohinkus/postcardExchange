export class ImageInfo {
  constructor (
    public url: string,
    public startLat: number,
    public startLon: number,
    public endLat: number,
    public endLon: number,
    public startAddress: string,
    public endAddress: string
  ){}
}
