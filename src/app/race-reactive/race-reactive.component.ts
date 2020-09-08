import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Race} from "../race";
import {RACES} from "../mock-race";
import {PONIES} from "../mock-ponies";
import {Pony} from "../pony";

@Component({
  selector: 'app-race-reactive',
  templateUrl: './race-reactive.component.html',
  styleUrls: ['./race-reactive.component.css']
})
export class RaceReactiveComponent implements OnInit {

  raceForm = this.fb.group({
    location: ['', Validators.required],
    date: ['', Validators.required],
    ponies: ['', Validators.required],
  });

  allPonies = PONIES;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let res : Race;
    res = this.raceForm.value;
    res.ponies = Array<Pony>();
    RACES.push(res);
    this.router.navigate(['/races'])
  }
}
