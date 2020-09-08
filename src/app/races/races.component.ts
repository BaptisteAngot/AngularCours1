import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RACES} from "../mock-race";
import {ActivatedRoute, Router} from "@angular/router";
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

  add: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.newRace = new Race();
    for (let i=0;i < PONIES.length; i++){
      this.poniesBool.push(false);
      this.add = true
    }
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') == null)
      this.add = true;
    else {
      this.add = false;
      const id = parseInt(this.route.snapshot.paramMap.get('id'),0);

      for (let index=0; index < RACES.length; index++){
        if (RACES[index].id_race == id){
          this.newRace = RACES[index];
          break
        }
      }
    }
  }

  onSubmit():void {
    if (this.add){
      for (let index = 0; index< this.poniesBool.length; index++){
        if (this.poniesBool[index]){
          this.newRace.ponies.push(this.allPonies[index])
        }
      }
      RACES.push(this.newRace);
      this.router.navigate(['/races'])
    }else {
      //Update du mock
      console.log(this.newRace)
    }
  }
}
