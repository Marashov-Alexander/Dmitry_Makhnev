import React, { Component } from 'react';
import { TodoItemsFilter } from '../../models/TodoItemsFilter';
import { setTodosFilterAction } from '../../actions/setTodosFilter.action';
import { cleanAllTodosAction } from '../../actions/cleanAllTodos.action';
import { TodoItemModel } from '../../models/todosModel';

import style from './TodosActionsComponent.module.css'

const theBestTexts = {
  [TodoItemsFilter.ALL]: {
    aria: 'Show all',
    text: 'All'
  },
  [TodoItemsFilter.READY]: {
    aria: 'Show ready',
    text: 'Ready'
  },
  [TodoItemsFilter.NOT_READY]: {
    aria: 'Show not ready',
    text: 'Not Ready'
  },
};

export class TodosActionsComponent extends Component<{
  items: TodoItemModel[];
  filteredItems: TodoItemModel[];
}> {

  render() {
    const {
      items,
      filteredItems,
    } = this.props;

    return <div className={style.content__actionsBar}>

      <div className="counter" id="todos-counter">
        {filteredItems.length}/{items.length}
      </div>

      <div className="filter">
        { Object.values(TodoItemsFilter).map(filterValue =>
          <button
            key={ filterValue }
            aria-label={`Todos filter: ${ theBestTexts[filterValue].aria }`}
            onClick={ () => { setTodosFilterAction(filterValue) } }
          >
            { theBestTexts[filterValue].text }
          </button>
        ) }
      </div>

      <button
        id="todos-clean-all"
        aria-label="Clean all todos"
        onClick={ cleanAllTodosAction }
      >
        Clean all
      </button>
    </div>
  }

}

