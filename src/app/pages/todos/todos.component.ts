import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoList: Array<Todo>;
  search: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodoData();
  }

  private async getTodoData(): Promise<void> {
    this.todoService.todoData.subscribe(data => {
      this.todoList = data;
    });
  }
}
