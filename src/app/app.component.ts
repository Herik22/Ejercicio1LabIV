import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  edad1:number;
  edad2:number;
  sumaEdades:number;
  promedioEdades:number;

  constructor(){
    this.edad1=0;
    this.edad2=0;
    this.sumaEdades=0;
    this.promedioEdades=0;
  }

  SumaPromedio = () =>{
    this.sumaEdades = this.edad1 + this.edad2;
    this.promedioEdades= this.sumaEdades/2;
  }
  CleanValues = ()=>{
    this.edad1=0
    this.edad2=0
    this.sumaEdades=0
    this.promedioEdades=0
  }
}


