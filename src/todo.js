import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>responsable: {this.props.responsible} </p>
                <p>descripcion: {this.props.text}</p>
                <p>prioridad: {this.props.priority}</p>
                <p>fecha: {this.props.dueDate.toString()}</p>
            </div>
        );
    }

}