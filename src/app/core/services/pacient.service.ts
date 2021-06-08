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
    return this.http.post('http://localhost:3000/create',pacient)
  }
  getFile(){
    return this.http.get('assets/files/Manual-de-Usuario.pdf',{responseType:'text'})
  }

}


