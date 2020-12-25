import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TodoService } from 'src/app/core/services/todo/todo.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(
    private todoService: TodoService,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  modalHide(): void {
    this.bsModalRef.hide();
  }

  delTodo(todoId: number): void {
    this.todoService.delTodo(todoId);
    this.modalRef.hide();
  }
}
