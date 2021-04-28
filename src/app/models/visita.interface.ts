import { IonDatetime } from '@ionic/angular';

export interface VisitaI{
    id?: string,
    nombre: string;
    fecha: IonDatetime,
    tipoFecha: string,
    clave: string,
    tipo: string
    domicilio: string;
    who: string;
}