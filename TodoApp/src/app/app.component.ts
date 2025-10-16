import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  task:string=''
  tasks :string[]=[]
  editIndex:number|null=null
  Add(){
    if(this.editIndex!=null)
    {
      this.tasks[this.editIndex]=this.task
      this.editIndex=null;
    }
    else{
             this.tasks.push(this.task)

    }
    this.task=''
  }
  delete(i: number)
  {
    this.tasks.splice(i,1)
  }
  update(i:number)
  {
    this.editIndex=i;
  }
}
