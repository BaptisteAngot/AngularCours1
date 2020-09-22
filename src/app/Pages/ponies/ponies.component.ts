import { Component, OnInit } from '@angular/core';
import { Pony } from '../../Models/pony';
import {PonyService} from "../../Services/pony.service";

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css']
})
export class PoniesComponent implements OnInit {

  ponies: Pony[]

  constructor(private ponyService: PonyService) {
    this.ponyService.getAllPonies().subscribe(p => this.ponies = p);
  }

  ngOnInit(): void {
    this.ponyService.getAllPonies().subscribe(p => this.ponies = p);
  }

}
