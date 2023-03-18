import { TodoElement } from '../TodoItem/TodoItem';
import { TodoItem } from '../../../type/data';
import styles from './TodoList.module.scss';

interface ITodoListProps {
    items: TodoItem[];
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    return (
        <ul className={styles.list}>
            {
                props.items.map((item) => <TodoElement key={item.id} {...item}/>)
            }
        </ul>
    )
};

export { TodoList };
