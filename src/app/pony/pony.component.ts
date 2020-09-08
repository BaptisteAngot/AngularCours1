import { Component, OnInit } from '@angular/core';
import { Pony } from "../pony";
import {PONIES} from "../mock-ponies";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})

export class PonyComponent implements OnInit {

  newPony: Pony;
  add: boolean;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.newPony = new Pony();
    this.add = true;
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') == null)
      this.add = true;
    else{
      this.add = false;
      const id = parseInt(this.route.snapshot.paramMap.get('id'),0);
      // Moche avec les mocks, mieux plus tard.
      for (let index=0; index < PONIES.length; index++){
        if (PONIES[index].id_poney == id){
          this.newPony = PONIES[index];
          break;
        }
      }
    }
  }

  onSubmit():void {
    if (this.add){
      PONIES.push(this.newPony);
      this.router.navigate(['/']);
    }else {
      // Update Mock du pony
      console.log(this.newPony)
    }
  }
}
