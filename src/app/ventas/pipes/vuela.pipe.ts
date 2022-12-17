import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{
    transform(valor: boolean): string {
        // if(enMayusculas == true){
        //     return valor.toUpperCase();
        // }
        // return valor.toLowerCase();
    
        return (valor) ? 'vuela': 'no vuela' 
    }
}