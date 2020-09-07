export class Pony {
  id_poney: number;
  name:string
  color:string
  age:number;

  constructor(id?: number,name?:string, color?:string, age?:number) {
    this.id_poney = id === undefined ? 0 : id;
    this.name = name === undefined ? 'nom' : name;
    this.color = color === undefined ? 'pink':color;
    this.age = age === undefined ? 1 : age;
  }
}
