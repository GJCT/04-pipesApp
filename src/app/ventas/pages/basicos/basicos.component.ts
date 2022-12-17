import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  nombreLower: string = 'gabriel';
  nombreUpper: string = 'GABRIEL';
  nombreCompleto: string = 'GabRiel cArdOna';

  fecha: Date = new Date() //el dia de hoy 14-12-22
}
