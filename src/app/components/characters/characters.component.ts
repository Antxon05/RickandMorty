import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-characters',
  imports: [CommonModule], //Necesario para el *ngFor
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{

  characters: any[] = []; //Guardamos los personajes
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private rickMortyService: RickMortyService, private renderer: Renderer2){}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.rickMortyService.getCharacters(this.currentPage).subscribe(data => {
      this.characters = data.results; //Guardamos el resultado
      this.totalPages = data.info.pages;
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getCharacters();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getCharacters();
    }
  }

  // Método para manejar el movimiento del ratón y aplicar efecto 3D
  onMouseMove(event: MouseEvent, card: HTMLElement): void {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2; 
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    this.renderer.setStyle(card, 'transform', `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }

  // Restablecer la animación cuando el mouse sale de la tarjeta
  onMouseLeave(card: HTMLElement): void {
    this.renderer.setStyle(card, 'transform', 'perspective(1000px) rotateX(0deg) rotateY(0deg)');
  }

  
}
