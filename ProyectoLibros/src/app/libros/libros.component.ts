import { Component, OnInit } from '@angular/core';
import {Libro} from './libro';
import { listaLibros } from './libros.Json';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent  {

  listaLibros: Libro[] = [];
  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listaLibros = listaLibros;
  }

}
