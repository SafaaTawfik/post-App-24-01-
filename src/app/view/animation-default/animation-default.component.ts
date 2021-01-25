import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-default',
  templateUrl: './animation-default.component.html',
  styleUrls: ['./animation-default.component.css'],
  animations:[
    trigger('divstate',[
      state('normal',style({'background-color' : 'red',transform: 'translateX(0'})),
      state('highlighted',style({'background-color' : 'blue',transform: 'translateX(100px'})),
      transition('normal => highlighted',animate(300)),
       transition('highlighted => normal',animate(800)),
    ])
  ]
})
export class AnimationDefaultComponent implements OnInit {
state = 'normal';
onAnimate(){
  this.state === 'normal' ? this.state = 'highlighted' : this.state= 'normal'
}
  constructor() { }

  ngOnInit(): void {
  }

}
