import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/core/interfaces';

@Pipe({
  name: 'filterTodoByPriority'
})
export class FilterTodoByPriorityPipe implements PipeTransform {

  transform(value: Array<Todo>, priorityValue: string): Array<Todo> {
    if (!priorityValue) {
      return value;
    }
    return value.filter((el: Todo) => {
      return el.priority.indexOf(priorityValue) > -1;
    });
  }

}
