import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
    name : string='shameela';
    age : number =20;
    message : string='';
    showMessage: boolean=false;
    receiveMessage(event : {messageString:string,showMessage:boolean}){
            this.message=event.messageString;
            this.showMessage=event.showMessage;
    }
    color : string ='blue'
    colors: string []=['red',"green","blue","yellow","orange","cyan"]
    login:boolean=false;
    changeLogin(){
      this.login= !this.login
    }





   @ViewChild(ChildComponent) ChildComponent!:ChildComponent

  onClick(){
    this.ChildComponent.sayHai()
  }

}
