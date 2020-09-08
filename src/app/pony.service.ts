import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pony} from "./pony";

@Injectable({
  providedIn: 'root'
})
export class PonyService {
  url: String = 'http://localhost/LittlePoniesAPI/api/';

  httpsOption= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {

  }

  getAllPonies(): Observable<Array<Pony>> {
    return this.http.get<Array<Pony>>(this.url+'/pony-get.php', this.httpsOption)
  }
}
