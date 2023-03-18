import { TodoItem } from '../../../type/data';
import { TodoForm } from '../TodoForm/TodoForm';
import { useModal } from '../../../hooks';
import { Modal } from '../../UI/Modal/Modal';
import styles from './TodoItem.module.scss'
interface ITdoItem extends TodoItem {}

const TodoElement: React.FC<ITdoItem> = (props) => {
    const { isOpen, toggle } = useModal();
    const { id, title,description, completed } = props;
    return (
        <li className={ styles['todo-item'] }>
            <div className={styles['todo-item__information']}>
                <input id={id?.toString()} type="checkbox" checked={ completed } readOnly/>
                <label htmlFor={id?.toString()} className={styles['todo-item__text']}>{title}</label>
                <p className={styles['todo-item__description']}> {description} </p>
            </div>
            <div className={styles['todo-item__actions']}>
                <button onClick={toggle} className={styles['todo-item__button']}>Change</button>
                <button className={styles['todo-item__button']}>Remove</button>
            </div>
            <Modal isOpen={isOpen} toggle={toggle} children={<TodoForm {...props} />}/>
        </li>
    )
};

export { TodoElement };
