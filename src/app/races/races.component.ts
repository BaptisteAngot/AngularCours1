import {Component, OnInit} from '@angular/core';
import {Race} from '../race';
import {RACES} from "../mock-race";
import {ActivatedRoute, Router} from "@angular/router";
import {Pony} from "../pony";
import {RaceServiceService} from "../race-service.service";
import {PonyService} from "../pony.service";

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  newRace: Race;
  poniesBool = Array<boolean>();
  allPonies = Array<Pony>();

  add: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private raceServiceService: RaceServiceService, private ponyService: PonyService) {
    this.newRace = new Race();
    this.ponyService.getAllPonies().subscribe(p => {
      this.allPonies = p;
      for (let i = 0; i < this.allPonies.length; i++) {
        this.poniesBool.push(false);
      }
    })
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') == null) {
      this.add = true;
    } else {
      this.add = false;
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
      this.raceServiceService.getRace(id).subscribe(r => {
        console.log(r);
        this.newRace = r;
      });
    }
  }

  onSubmit(): void {
    if (this.add) {
      for (let index = 0; index < this.poniesBool.length; index++) {
        if (this.poniesBool[index]) {
          this.newRace.ponies.push(this.allPonies[index]);
        }
      }
      this.raceServiceService.addRace(this.newRace);
      this.router.navigate(['/races']);
    } else {
      this.raceServiceService.updateRace(this.newRace);
      this.router.navigate(['/races']);
    }
  }
}
