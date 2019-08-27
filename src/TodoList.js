import React from 'react';
import {Todo} from './todo'

export class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const listItems = this.props.todoList.map((Obj) =>
        <Obj text={Obj.text} priority={Obj.priority} dueDate ={Obj.dueDate} />
        );
        return (
            <ul>{listItems}</ul>
        );

    }
}