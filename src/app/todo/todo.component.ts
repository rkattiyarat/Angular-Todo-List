import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  @ViewChild('taskInput') taskInput: ElementRef;
  taskList: string[] = [];
  completedList: string[] = [];
  activeList: string[] = [];

  constructor() { }

  ngOnInit(): void {}

  onAddTask(){
    this.taskList.push(this.taskInput.nativeElement.value);
    this.taskInput.nativeElement.value = '';
  }

  addToActive(todo: string, isChecked: boolean){
    if(isChecked){
      this.activeList.push(todo);
      console.log(this.activeList);
    }
    else{
      this.activeList = this.activeList.filter(item => item !== todo);
      console.log(this.activeList);
    }
  }

}
