import React, { useReducer } from "react";
import { TodoItem } from "../../../type/data";
import styles from './TodoForm.module.scss';

const TodoForm: React.FC<TodoItem> = ({ id, title, completed, description}) => {
    const initialState: TodoItem = {
        title,
        completed,
        description,
    }

    enum FieldTypesKind {
      TITLE = 'title',
      COMPLETED = 'completed',
      DESCRIPTION = 'description',
    }

    interface FieldTypes {
      type: FieldTypesKind,
      payload: string | boolean,
    }

    const valueReducer = (state: any, action: FieldTypes) => {
      const { type, payload } = action;
      console.log(payload)
      switch (type) {
        case FieldTypesKind.TITLE:
          return {
            ...state,
            [FieldTypesKind.TITLE]: payload,
          }
        case FieldTypesKind.COMPLETED:
          return {
            ...state,
            [FieldTypesKind.COMPLETED]: !state.checked,
          }
        case FieldTypesKind.DESCRIPTION:
          return {
            ...state,
            [FieldTypesKind.DESCRIPTION]: payload,
          }
        default:
          return state;
      }
    }

    const [state, dispatch] = useReducer(valueReducer, initialState);
    const submitForm = (event: any) => {
      event.preventDefault();
      console.log(state)
    };

    return(
        <form className={styles['todo-form']}>
            <div className={styles['todo-form__control']}>
              <p className={styles['todo-form__field-label']}>Title</p>
              <input type="text"
                     className={styles['todo-form__field']}
                     value={state.title}
                     name={FieldTypesKind.TITLE}
                     onChange={(event) => dispatch({ type: FieldTypesKind.TITLE, payload: event.target.value })}
              />
            </div>
            <div className={styles['todo-form__control']}>
              <p className={styles['todo-form__field-label']}>Description</p>
              <textarea className={styles['todo-form__field']}
                        value={state.description}
                        name={FieldTypesKind.DESCRIPTION}
                        onChange={(event) => dispatch({ type: FieldTypesKind.DESCRIPTION, payload: event.target.value })}
              ></textarea>
            </div>
            <div className={styles['todo-form__control']}>
              <p className={styles['todo-form__field-label']}>Task status</p>
              <input
                className={styles['todo-form__field']}
                checked={state.completed}
                type='checkbox'
                typeof='checkbox'
                name={FieldTypesKind.COMPLETED}
                onChange={(event) => dispatch({ type: FieldTypesKind.COMPLETED, payload: event.target.checked })}
              />
            </div>
            <div className={styles['todo-form__button-wrapper']}>
                <button className={styles['todo-form__button']} onClick={(event) => submitForm(event)}>Add task</button>
            </div>
        </form>
    )
};

export { TodoForm };
