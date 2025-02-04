import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule], //Necesario para el *ngFor
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{

  characters: any[] = []; //Guardamos los personajes

  constructor(private rickMortyService: RickMortyService){}


  ngOnInit(): void {
    this.rickMortyService.getCharacters().subscribe(data => {
      this.characters = data.results; //Guardamos el resultado
    });
  }

  
}
