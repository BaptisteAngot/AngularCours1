import { Component, OnInit } from '@angular/core';
import { Pony } from "../pony";
import {PONIES} from "../mock-ponies";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})

export class PonyComponent implements OnInit {

  newPony: Pony;
  constructor(private router: Router) {
    this.newPony = new Pony();
  }

  ngOnInit(): void {
  }

  onSubmit():void {
    PONIES.push(this.newPony);
    this.router.navigate(['/']);
  }
}
