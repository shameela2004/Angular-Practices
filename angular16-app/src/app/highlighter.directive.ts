import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
   @Input () appHighlighter:string=''
  constructor(private el:ElementRef,private renderer:Renderer2) {
   
   }
    @HostListener('mouseenter') onMouseEnter(){
      this.renderer.setStyle(this.el.nativeElement , 'backgroundColor',this.appHighlighter)
      this.renderer.setStyle(this.el.nativeElement,'cursor','pointer')
    }
    @HostListener('mouseleave') onMouseLeave(){
      this.renderer.removeStyle(this.el.nativeElement,'backgroundColor')
    }

}
