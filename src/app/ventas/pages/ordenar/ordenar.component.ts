import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {
  enMayusculas: boolean = true;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.amarillo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'DeadPool',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    }
  ]
  
  cambiar(){
    // if(mayusculas == true){
    //   mayusculas.toUpperCase();
    // }
    // mayusculas.toLowerCase();
    this.enMayusculas = !this.enMayusculas;
  }
  ordenar(valor: string){
    this.ordenarPor = valor;
  }

}
