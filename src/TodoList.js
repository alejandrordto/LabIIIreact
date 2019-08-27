import React from 'react';
import {Todo} from './todo'

export class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.todoList)
        const listItems = this.props.todoList.map((Obj,i) =>
        <li><Todo res ={Obj}
        />
        </li>
        );
        return (
            <ul>{listItems}</ul>
        );

    }
}