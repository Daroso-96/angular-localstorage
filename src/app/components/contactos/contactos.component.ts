import { Component, OnInit } from '@angular/core';
import {ContactoService} from '../../services/contacto.service'

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
 myContactos
 contactoFound
  constructor(private listServe : ContactoService) { }

  ngOnInit(): void {
  }
  getPositions($event){
  this.myContactos = this.listServe.getOneContacto($event);
  this.contactoFound = this.myContactos;
  }
}
