import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import {ContactoService} from  '../../services/contacto.service';
import {Contacto} from '../../models/Contactos';

@Component({
  selector: 'app-list-contactos',
  templateUrl: './list-contactos.component.html',
  styleUrls: ['./list-contactos.component.css']
})
export class ListContactosComponent implements OnInit {
   @Output() sendPosition = new EventEmitter;
    myContactos : Contacto[];
  constructor(private listServ : ContactoService) { }

  ngOnInit(): void {
    this.myContactos = this.listServ.getContactos();
   console.log('Mis contactos', this.myContactos);
  }
   
  deleteContacto(id){
    this.listServ.deleteContacto(id);

  }
  getPositions(id){
   this.sendPosition.emit(id);
  }
}
