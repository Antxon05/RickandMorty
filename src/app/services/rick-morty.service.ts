import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any>{
    return this.http.get<any>(this.apiUrl) //Realiza una operación get hacia la url que hemos guardado en
  }

}
