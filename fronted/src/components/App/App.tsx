import { useEffect, useState, useRef } from 'react';
import { TodoItem } from '../../type/data';
import { TodoList } from '../Todo/TodoList/TodoList';
import { useModal } from '../../hooks';
import { Modal } from '../UI/Modal/Modal';
import styles from './App.module.scss';

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<TodoItem[]>([])
    const { isOpen, toggle } = useModal();
    // const [password, setNewPassword] = useState('');
    // type Person = {
    //     name: string,
    //     age: number | string,
    //     nickname?: string,
    //     getData?: () => string,
    // }
    //
    // const user: Person = {
    //     name: 'Vlad',
    //     age: 22,
    //     nickname: 'Walt',
    // };
    //
    // const admin: Person = {
    //     name: 'Vlad',
    //     age: 22,
    //     getData: () => 'Walt',
    // };
    //
    // class User {
    //     static secret = 124;
    //     name: string;
    //     age: number | string;
    //     constructor(name: string, age: number | string) {
    //         this.name = name;
    //         this.age = age;
    //     };
    //
    //     getPass(): string {
    //         return `${this.name}${User.secret}`;
    //     }
    // }
    //
    // const vv = new User('Vlad', '22');
    // console.log(vv.getPass());
    // const createPassword = (name: string, age: number | string, skills: Array<string>) => setNewPassword(`${name}${age}${setSkills(skills)}`);
    // const setSkills = (skills: Array<string>) => skills.join('');
    // const generatePassword = () => {
    //     const name = `date${Date.now().toString()}`;
    //     const age = Math.floor(Math.random() * 100);
    //     const skills = [
    //         'JavaScript',
    //         'React',
    //         'Redux',
    //         'Node',
    //     ];
    //     createPassword(name, age, skills);
    // };

    useEffect(() => {
        fetch('api/todos/')
            .then((response: Response) => response.json())
            .then((data: TodoItem[]) => setTodos(data));
    }, [])

    const addTodo = () => {
        if (!value) {
            return;
        }

        setTodos([...todos, {
            id: Date.now(),
            title: value,
            description: '',
            completed: false,
        }])
        setValue('');
    }
    return (
        <div className={ styles.root }>
            <div className={ styles.container }>
                <div>
                    <button onClick={toggle}>add new task</button>
                    <Modal isOpen={isOpen} toggle={toggle} children={<div>text</div>}/>
                </div>
                {/*<div>*/}
                {/*    /!*<button onClick={generatePassword}>generate password</button>*!/*/}
                {/*    /!*<div>{password}</div>*!/*/}
                {/*    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>*/}
                {/*    <button onClick={addTodo}>Add</button>*/}
                {/*</div>*/}
                <TodoList items={todos}/>
            </div>
        </div>
    )
};

export { App };
