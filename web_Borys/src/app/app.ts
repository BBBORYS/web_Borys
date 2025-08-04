//   se configura 

import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';  // Asegúrate de añadir RouterModule

@Component({
  selector: 'app-root',
  standalone: true, // Añade esta línea
  imports: [RouterOutlet, RouterModule], // Añade RouterModule aquí
 // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web_Borys');
}


