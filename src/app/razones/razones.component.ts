import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-razones',
  templateUrl: './razones.component.html',
  styleUrls: ['./razones.component.scss']
})
export class RazonesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll',()=>{
      let mover = document.getElementById('mover');
      let logoGym = document.getElementById('logoGym');
      let value = window.scrollY
      if(mover && logoGym){
        if(value>0 && value <900){
          mover.style.position = 'relative';
          mover.style.right = value + 1 + 'px';
          logoGym.style.animation = 'bordes1 150s linear forwards infinite'
        }else{
          mover.style.position = 'static';
        }
      }
    });
  }

}
