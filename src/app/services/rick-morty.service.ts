import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/?page=${page}`) //Realiza una operación get hacia la url que hemos guardado en
  }

}
