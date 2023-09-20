import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ciudades = ['Santiago', 'Buenos Aires', 'Bogota', 'Lima', 'Sao Paulo'];
  showCiudad: boolean = true;
  changeCss: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  mostrar () {
    this.showCiudad = !this.showCiudad;
  }

  cambioCss () {
    this.changeCss = !this.changeCss;
  }

}
