import { Component } from '@angular/core';
import { CharactersComponent } from './components/characters/characters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharactersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rick-morty-app';
}
