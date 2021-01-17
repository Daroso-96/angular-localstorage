import { Injectable } from '@angular/core';
import {Contacto} from '../models/Contactos'

const ContactosList = [
  {
    "id": "1",
    "nombre": 'Sashita',
    "direccion": 'Sincelejo',
    "celular": "3003003030",
    "fecha": '2019/19/03'
  },
  {
    "id": "2",
    "nombre": 'Lucerito',
    "direccion": 'Cienga de oro',
    "celular": "3003005050",
    "fecha": '2017/23/06'
  },
  {
    "id": "3",
    "nombre": 'Tobby',
    "direccion": 'Sincelejo',
    "celular": "3003008030",
    "fecha": '2015/15/08'
  }

]

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() {

   }
   getContactos(){
     return ContactosList;
   }

   getOneContacto(id){
    return ContactosList.find(contacto => contacto.id === id) ;
   }
   addContacto(contacto : Contacto){
     ContactosList.push(contacto);
   }

   deleteContacto(id){
    ContactosList.splice(id, 1)
   }
   editContacto(newContactoEdit){
     const index  = ContactosList.findIndex(contacto =>contacto.id === newContactoEdit);
     ContactosList[index] = newContactoEdit;

    }
}
