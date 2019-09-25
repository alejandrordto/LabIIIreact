import React from 'react';
import { Todo } from './todo'
import Card from '@material-ui/core/Card';

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const listItems = this.props.items.map((Obj,i) =>
            
        <Card> <Todo key={i}text={Obj.text} 
        priority={Obj.priority} dueDate={Obj.dueDate} /> </Card > 
        );
        return (
            <ul>{listItems}</ul>
        );

    }
}