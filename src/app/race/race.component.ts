import { Component, OnInit } from '@angular/core';
import {Race} from "../race";
import {RACES} from "../mock-race";

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  races: Race[]

  constructor() {
    this.races = RACES;
  }

  ngOnInit(): void {
  }

}
