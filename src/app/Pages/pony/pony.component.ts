import { Component, OnInit } from '@angular/core';
import { Pony } from "../../Models/pony";
import {PONIES} from "../../Mock/mock-ponies";
import {ActivatedRoute, Router} from "@angular/router";
import {PonyService} from "../../Services/pony.service";

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})

export class PonyComponent implements OnInit {

  newPony: Pony;
  add: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private ponyService: PonyService) {
    this.newPony = new Pony();
    this.add = true;
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') == null)
      this.add = true;
    else{
      this.add = false;
      const id = parseInt(this.route.snapshot.paramMap.get('id'),0);

      this.ponyService.getPony(id).subscribe(r => this.newPony = r);
    }
  }

  onSubmit():void {
    if (this.add){
      this.ponyService.addPony(this.newPony);
      this.router.navigate(['/']);
    }else {
      this.ponyService.updatePony(this.newPony);
      this.router.navigate(['/']);
    }
  }
}
