import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Pony} from "../pony";
import {PONIES} from "../mock-ponies";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pony-reactive',
  templateUrl: './pony-reactive.component.html',
  styleUrls: ['./pony-reactive.component.css']
})
export class PonyReactiveComponent implements OnInit {
  ponyForm = this.fb.group({
    name: ['', Validators.required],
    color: ['', Validators.required],
    age: ['0', Validators.required],
  })

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let res : Pony;
    res = this.ponyForm.value
    PONIES.push(res);
    this.router.navigate([''])
  }
}
