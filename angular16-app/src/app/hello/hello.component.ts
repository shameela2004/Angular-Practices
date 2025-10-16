import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
      sayHello(){
        alert("hello from this hello componnet")
      }
      @Input() name:string=''
      @Input() age:number=0;
      @Output() greet= new EventEmitter<string>();

      onClick(){
        this.greet.emit("Haiii hello welcome ")
      }

}
