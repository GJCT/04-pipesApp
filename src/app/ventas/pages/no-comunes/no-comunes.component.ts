import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
  
  //i18nSelect
  nombre: string = 'Alejandra';
  genero: string = 'Femenino';

  invitacionMap= {
    'Masculino': 'invitarlo',
    'Femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string [] = ['Gabriel',' Jacob',' Alejandra',' Juliana',' Hansel'];
  clientesMap= {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': '# cliente esperando',
    'other': '# clientes esperando'
  } 

  cambiaCliente(){
    this.nombre = 'Gabriel';
    this.genero = 'Masculino'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValuePipe
  persona = {
    nombre: 'Gabriel',
    edad: 23,
    direccion: 'Tuluá'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //AsyncPipe
  miObservable = interval(3500);

  valorPromesa = new Promise( (resolve, reject) =>{

    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
