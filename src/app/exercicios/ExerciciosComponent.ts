import { Component, } from '@angular/core';


@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {
  frase: string = 'olá mundo';
  link = "https://www.google.com.br/search?q=five+nights+at+freddy%27s+filme&sca_esv=571760004&sxsrf=AM9HkKkTZ8kyemC-es9plNWnoTQUtQsa5g%3A1696794849690&source=hp&ei=4QgjZZ6AKIrU1sQP1MuziA4&iflsig=AO6bgOgAAAAAZSMW8TBJPiIZPZqHySTS_wEDS_oc3lTv&gs_ssp=eJzj4tVP1zc0TDaML8_IzSkzYPSSTcssS1XIy0zPKClWSCxRSCtKTUmpVC9WSMvMyU0FAF_AD6k&oq=f&gs_lp=Egdnd3Mtd2l6IgFmKgIIADIHEC4YigUYJzIHECMYigUYJzIHECMYigUYJzILEC4YgAQYsQMYgwEyCxAAGIAEGLEDGIMBMhEQLhiABBixAxiDARjHARjRAzILEC4YgwEYsQMYgAQyCxAAGIoFGLEDGIMBMgsQABiABBixAxiDATILEAAYigUYsQMYgwFI3QpQAFgAcAB4AJABAJgBpgGgAaYBqgEDMC4xuAEByAEA-AEB&sclient=gws-wiz";
  cor = 'green'
  mudaCor = ()=>{
  if(this.cor == 'green'){
    this.cor = 'blue'
  }else{
    this.cor = 'green'
  }
}
  
texto = '';
setTexto(value:string): void {
  this.texto = value;
}
}
  
  

