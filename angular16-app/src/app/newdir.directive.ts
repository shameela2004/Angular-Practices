import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNewdir]'
})
export class NewdirDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { }
  @HostListener('mouseenter') onMouseOver(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor',"yellow")
  }
  @HostBinding('style.backgroundColor')bgcolor='blue'

}
