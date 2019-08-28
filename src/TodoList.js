import React from 'react';
import { Todo } from './todo'

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const listItems = this.props.items.map((Obj) =>

            <Todo text={Obj.text} priority={Obj.priority} dueDate={Obj.dueDate} />
        );
        return (
            <ul>{listItems}</ul>
        );

    }
}