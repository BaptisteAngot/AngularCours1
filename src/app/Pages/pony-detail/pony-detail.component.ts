import { Component, OnInit, Input } from '@angular/core';
import {Pony} from "../../Models/pony";

@Component({
  selector: 'app-pony-detail',
  templateUrl: './pony-detail.component.html',
  styleUrls: ['./pony-detail.component.css']
})
export class PonyDetailComponent implements OnInit {
  @Input() pony: Pony;
  constructor() { }

  ngOnInit(): void {
  }

}
