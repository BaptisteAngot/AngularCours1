import { Component, OnInit } from '@angular/core';
import {Race} from "../race";
import {RaceServiceService} from "../race-service.service";

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  races: Race[]

  constructor(private raceServiceService: RaceServiceService) {
    this.raceServiceService.getAllRaces().subscribe(p => this.races = p);
  }

  ngOnInit(): void {
    this.raceServiceService.getAllRaces().subscribe(p => this.races = p);
  }

}
