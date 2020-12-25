import { FilterTodoByPriorityPipe } from './filter-todo-by-priority.pipe';

describe('FilterTodoByPriorityPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterTodoByPriorityPipe();
    expect(pipe).toBeTruthy();
  });
});
