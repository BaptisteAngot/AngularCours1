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
    return this.http.get<Array<Pony>>(this.url+'pony-get.php', this.httpsOption)
  }

  getPony(id: number): Observable<Pony> {
    return this.http.get<Pony>(this.url+'pony-get-id.php/'+id, this.httpsOption)
  }

  addPony(p: Pony): void{
    this.http.post<Pony>(this.url + 'pony-add.php', p, this.httpsOption).subscribe()
  }

  updatePony(p: Pony): void{
    this.http.put<Pony>(this.url+'pony-update.php',p,this.httpsOption)
  }
}
