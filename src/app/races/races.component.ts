import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RACES} from "../mock-race";
import {Router} from "@angular/router";
import {PONIES} from "../mock-ponies";
import {Pony} from "../pony";

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  newRace: Race;
  ponies: Pony[];
  constructor(private router: Router) {
    this.ponies = PONIES;
    this.newRace = new Race();
  }

  ngOnInit(): void {
  }

  onSubmit():void {
    RACES.push(this.newRace);
    console.log(this.newRace)
    // this.router.navigate(['/races'])
  }

}
