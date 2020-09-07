import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RACES} from "../mock-race";
import {Router} from "@angular/router";
import {PONIES} from "../mock-ponies";
import {Pony} from "../pony";
import {element} from "protractor";

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  newRace: Race;
  poniesBool= Array<boolean>();
  allPonies = PONIES;
  constructor(private router: Router) {
    this.newRace = new Race();
    for (let i=0;i < PONIES.length; i++){
      this.poniesBool.push(false);
    }
  }

  ngOnInit(): void {
  }

  onSubmit():void {
    for (let index = 0; index< this.poniesBool.length; index++){
      if (this.poniesBool[index]){
        this.newRace.ponies.push(this.allPonies[index])
      }
    }
    RACES.push(this.newRace);
    this.router.navigate(['/races'])
  }

}
