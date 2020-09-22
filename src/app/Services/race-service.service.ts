import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Race} from "../Models/race";

@Injectable({
  providedIn: 'root'
})
export class RaceServiceService {

  url: String = 'http://localhost:8888/LittlePoniesAPI/api/';

  httpsOption= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  getAllRaces(): Observable<Array<Race>> {
    return this.http.get<Array<Race>>(this.url+'race-get.php', this.httpsOption);
  }

  getRace(id: number): Observable<Race> {
    return this.http.get<Race>(this.url+'race-get-id.php/'+id, this.httpsOption);
  }

  addRace(r: Race): void {
    this.http.post<Race>(this.url+'race-add.php/',r,this.httpsOption).subscribe();
  }

  updateRace(r: Race): void {
    this.http.put<Race>(this.url+'race-update.php/',r,this.httpsOption).subscribe();
  }
}
