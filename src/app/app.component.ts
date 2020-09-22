import { Component } from '@angular/core';
import { Pony } from './Models/pony';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon petit poney';
  welcomeMessage: string;
  constructor() {
    this.welcomeMessage = "Bonjour";
  }
}
