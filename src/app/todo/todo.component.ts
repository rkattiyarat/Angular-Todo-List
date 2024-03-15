import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  @ViewChild('taskInput') taskInput: ElementRef;
  task: string;
  taskList: string[] = [];

  constructor() { }

  ngOnInit(): void {}

  onAddTask(){
    this.task = this.taskInput.nativeElement.value;
    this.taskList.push(this.task);
    this.taskInput.nativeElement.value = '';
  }

}
