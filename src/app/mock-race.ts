import {Race} from "./race";

export const RACES: Race[] = [
  {
    id: 1, location: "Rouen", date: new Date(), ponies: [
      {id: 1, name: 'Rainbow', color: 'black', age: 6},
      {id: 2, name: 'nightmare', color: 'white', age: 9},
      {id: 3, name: 'baby', color: 'chelou', age: 6}
    ]
  },
  {
    id: 2, location: "Tokyo", date: new Date(), ponies: [
      {id: 1, name: 'Rainbow', color: 'black', age: 6},
      {id: 2, name: 'nightmare', color: 'white', age: 9},
      {id: 3, name: 'baby', color: 'chelou', age: 6}
    ]
  }
]

export class MockRace {
}
