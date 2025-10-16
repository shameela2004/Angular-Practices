import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonEffect]'
})
export class ButtonEffectDirective {

  // constructor(el:ElementRef,renderer:Renderer2) { }
  @HostBinding ('style.backgroundColor')bgColor="yellow"
  @HostBinding ('style.transform') transform='scale(0.5)'
  @HostListener('mouseup') onMouseUp(){
    this.bgColor='blue'
    this.transform='scale(1)'
  }
  @HostListener('mousedown') onMouseDown(){
    this.transform='scale(0.8)'
  }

}
