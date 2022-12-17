export enum Color{
    rojo, negro, azul, 
    verde, amarillo, blanco
}


export interface Heroe{
    nombre: string;
    vuela: boolean;
    color: Color;
}