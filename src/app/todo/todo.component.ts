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

  addToCompleted(todo: string, isChecked: boolean){
    if(isChecked){
      this.completedList.push(todo);
      console.log(this.completedList);
    }
    else{
      this.completedList = this.completedList.filter(item => item !== todo);
      console.log(this.completedList);
    }
  }

  editTodo(todo: string){
    this.taskInput.nativeElement.value = todo;
    this.taskList = this.taskList.filter(item => item !== todo);
  }

  deleteTodo(todo: string){
    this.taskList = this.taskList.filter(item => item !== todo);
  }

}
