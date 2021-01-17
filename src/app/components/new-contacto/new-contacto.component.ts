import { Component, OnInit } from '@angular/core';
import {ContactoService} from  '../../services/contacto.service';

@Component({
  selector: 'app-new-contacto',
  templateUrl: './new-contacto.component.html',
  styleUrls: ['./new-contacto.component.css']
})
export class NewContactoComponent implements OnInit {
 
  newContacto = {
    id :'',
    nombre : '',
    direccion : '',
    celular : '',
    fecha : ''
  }
  constructor(private listServ : ContactoService) { }

  ngOnInit(): void {
  }
  addContacto(){
    console.log('enviando......', this.newContacto);
    this.listServ.addContacto(this.newContacto);
    this.newContacto = {
      id :'',
      nombre: '',
      direccion: '',
      celular: '',
      fecha: ''
    }
  }
}
