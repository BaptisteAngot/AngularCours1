import {Race} from "./race";

export const RACES: Race[] = [
  {
    id_race: 1, location: "Rouen", date: new Date(), ponies: [
      {id_poney: 1, name: 'Rainbow', color: 'black', age: 6},
      {id_poney: 2, name: 'nightmare', color: 'white', age: 9},
      {id_poney: 3, name: 'baby', color: 'chelou', age: 6}
    ]
  },
  {
    id_race: 2, location: "Tokyo", date: new Date(), ponies: [
      {id_poney: 1, name: 'Rainbow', color: 'black', age: 6},
      {id_poney: 2, name: 'nightmare', color: 'white', age: 9},
      {id_poney: 3, name: 'baby', color: 'chelou', age: 6}
    ]
  }
]

export class MockRace {
}
