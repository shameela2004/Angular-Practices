import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
     @Input () firstName: string='';
     @Input() age:number=0;
       showMessage: boolean=false;

     @Output() clickMessage = new EventEmitter<{showMessage:boolean,messageString: string} >();
     onClick ():void{
     this.showMessage=!this.showMessage;
     const messageString : string= 'This button has been clicked ';

      this.clickMessage.emit({showMessage: this.showMessage,messageString});
     }






     //ngstyle styles
     textcolor:string='';
     fontsize:number=0;
     isHighlighted:boolean=false;
     toggleHighlight(){
              this.isHighlighted=!this.isHighlighted
     }







     sayHai(){
      alert("Hii helloo")
     }
}
