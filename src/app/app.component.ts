import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mostrar: boolean = false;
  planes: boolean = false;

  verPlan() {
    setTimeout(() => {
      this.planes = true;
    }, 100);
  }
  ocultarPlan() {
    setTimeout(() => {
      this.planes = false;
    }, 200);
  }

  ngOnInit() {
    setTimeout(() => {
      this.mostrar = true;
      AOS.init();
      AOS.refresh();
    }, 100);

    let body = document.getElementById('body');
    window.addEventListener('click', () => {
      let hide = document.getElementById('hide');
      if (this.planes == true) {
        body?.onclick;
        if (hide) {
          hide.style.animation = 'opacityy' + 0.2 + 's' + 'linear';
        }
        this.ocultarPlan();
      }
    });
    window.addEventListener('scroll', () => {
      //console.log('value '+value)
      //console.log('pos '+pos)
      let header = document.getElementById('header');
      let value = window.scrollY;

      let altamente = document.getElementById('altamente');

      let mover1 = document.getElementById('aqui');
      let parar1 = document.getElementById('aqui2');

      let planes = document.getElementById('nustrosPlanes');

      let horarios = document.getElementById('horarios');

      let p1 = document.getElementById('p1');
      let p2 = document.getElementById('p2');

      if (altamente && header) {//altamente
        let padre = document.getElementById('titleE');
        if(padre){
          let r = header.offsetHeight;
          let pos = padre.offsetTop - r;
          let valueOg = value;
          if(valueOg>(pos) && valueOg<=(pos*1.5)){
            valueOg = valueOg-pos;
            altamente.style.position = 'relative';
            altamente.style.left = valueOg + 1 + 'px';
            altamente.style.scrollBehavior= 'smooth';
          }
          }else{
            altamente.style.position = 'static';
          }
      }
      if (mover1 && parar1 && header) {//ubicación
        let position = mover1.offsetTop;
        let stop = Math.abs(mover1.offsetHeight - parar1.offsetTop);
        let restar = header.offsetHeight;
        let valueOg = value;
        if(valueOg>position && valueOg<=stop+stop){
          valueOg = valueOg - (position-restar);
          mover1.style.position = 'relative';
          mover1.style.right = valueOg*0.3 + 'px';
          mover1.style.scrollBehavior= 'smooth';
        }else{
          mover1.style.position = 'static';
        }
      }
      if(planes && header){//planes
        let r = header.offsetHeight;
        let pos = planes.offsetTop - r;
        let valueOg = value;
        if(valueOg>pos && valueOg<(pos*1.5)){
          valueOg = valueOg-pos;
          planes.style.position = 'relative';
          planes.style.top = valueOg*0.6 + 'px';
          planes.style.opacity = 1-(valueOg*0.005) +'';
        }else{
          planes.style.position = 'static';
        }
      }
      if(horarios && header){//horarios
        let r = header.offsetHeight;
        let pos = horarios.offsetTop - r;
        let valueOg = value;
        if(valueOg>pos && valueOg<(pos*1.5)){
          valueOg = valueOg-pos;
          horarios.style.position = 'relative';
          horarios.style.top = valueOg*0.6 + 'px';
          horarios.style.opacity = 1-(valueOg*0.002) +'';
        }else{
          horarios.style.position = 'static';
        }
      }
      if(p1 && header && p2){
        let inicio1 = document.getElementById('inicio1');
        let valueOg = value;
        if(inicio1){
          let pos = inicio1.offsetTop-(header.offsetHeight);
          if(value>=pos && value<=(1.5*pos) ){
            p2.style.animation = 'changeColor ' +10+'s infinite linear';
            p1.style.animation = 'changeColor ' +10+'s infinite linear';
          }
        }
      }
    });
    /*window.addEventListener('click',()=>{
      let mover = document.getElementById('aqui');
      let h = window.onclick;
      if(mover){
        if(h == null){
          console.log('click')
          mover.style.animation = 'uno ' + 0.5 +'s linear forwards';
        }
      }
    });*/
  }

}
