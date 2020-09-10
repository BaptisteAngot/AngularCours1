import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userName: string;
  connect = true;

  constructor() {
    this.userName = '';
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if (this.connect){
      sessionStorage.setItem('idUser', this.userName);
      this.connect = false;
    } else {
      sessionStorage.removeItem('idUser');
      this.userName = '';
      this.connect = true;
    }
  }

}
