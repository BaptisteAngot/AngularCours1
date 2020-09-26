import  { Pony } from "../app/Models/pony";
import  { Race } from "../app/Models/race";

describe('Test de classe Race', ()=> {
  let race: Race = null;
  let pony : Pony = null;
  beforeEach(() => {
    race = new Race();
  });

  it('Race location not be empty', function () {
    expect(race.location).not.toBeNull();
  });

  it('Set race location', function () {
    race.location = "Madrid";
    expect(race.location).toEqual("Madrid");
  });

  it('Race date not be empty', function () {
    expect(race.date).not.toBeNull();
  });

  it('Insert date to race', function () {
    race.date = new Date();
    expect(race.date).toEqual(new Date());
  });

});

describe('Test de la classe Pony' , () => {
  let pony: Pony = null;
  beforeEach(()=> {
    pony = new Pony();
  });

  it('Pony name not be empty', function () {
    expect(pony.name).not.toBeNull();
  });

  it('Insert name to pony', function () {
    pony.name = "Etalon du cul";
    expect(pony.name).toEqual("Etalon du cul");
  });

  it('Pony color not be empty', function () {
    expect(pony.color).not.toBeNull();
  });

  it('Insert color to pony', function () {
    pony.color = "violet"
    expect(pony.color).toEqual("violet");
  });

  it('Pony age not be empty', function () {
    expect(pony.age).not.toBeNull();
  });

  it('Insert age to pony', function () {
    pony.age = 15;
    expect(pony.age).toEqual(15);
  });
});
