import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Todo } from 'src/app/core/interfaces';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() isEdit = new EventEmitter<Todo>();

  modalRef: BsModalRef;
  isDescriptionShown = false;
  config = {
    ignoreBackdropClick: true
  };

  constructor(private todoService: TodoService,
    private modalService: BsModalService) { }

  ngOnInit(): void { }

  toggleDescription(): void {
    this.isDescriptionShown = !this.isDescriptionShown;
  }

  toggleTodo(): void {
    this.todo.isDone = !this.todo.isDone;
    this.todoService.updateTodo(this.todo.id, this.todo);
  }

  editTodo(): void {
    this.isEdit.emit(this.todo);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  decline(): void {
    this.modalRef.hide();
  }

  delTodo(todoId: number): void {
    this.todoService.delTodo(todoId);
    this.modalRef.hide();
  }
}