import { Pony } from "./pony";

export class Race {
  id_race : number;
  location : string;
  date: Date;
  ponies: Pony[];

  constructor(id?:number, location?:string, date?:Date, ponies?:Pony) {
    this.id_race = id === undefined ? 0 : id;
    this.location = location === undefined ? 'lieux' : location;
    this.date = date === undefined ? new Date() : date;
    this.ponies = [];
  }
}
