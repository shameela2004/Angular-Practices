import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ToDoApplication');
  task : string=''
  tasklist:string[]=[]
  add()
  {
    this.tasklist.push(this.task)
    this.task=''
  }
  delete(index:number)
  {
    this.tasklist.splice(index,1)
  }

}
