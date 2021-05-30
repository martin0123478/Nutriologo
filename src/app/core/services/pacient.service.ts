import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PacientService {

  constructor(
    private http:HttpClient
  ) { }
  createPacient(pacient){
    return this.http.post('https:localhost:3000/create',pacient)
  }
}


