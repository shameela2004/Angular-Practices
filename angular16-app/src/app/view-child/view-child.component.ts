import { Component, ElementRef, ViewChild } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {
  // @ViewChild('paragragh') pararef!:ElementRef;  
  // ngAfterViewInit(){
  //   console.log(this.pararef.nativeElement.textContent);
  //   this.pararef.nativeElement.style.backgroundColor='blue'
  // }     
  @ViewChild('HelloComponent') Hello! :HelloComponent
  onClick(){
    this.Hello.sayHello();
  }
}
