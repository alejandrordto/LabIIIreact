import React from 'react';
import { Todo } from './todo'
import Card from '@material-ui/core/Card';

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.filterDueDate = localStorage.getItem('fecha');
        this.filterpriority = localStorage.getItem('estado');
        this.filterResponsible = localStorage.getItem('responsable');

    }
    render() {
       
        if (localStorage.getItem('filter') == "true") {
            const listItems = this.props.items.map((Obj, i) =>
                (Obj.priority === this.filterpriority &&this.igualarFechas( Obj.dueDate, this.filterDueDate) && Obj.responsible.name === this.filterResponsible)
                    || (Obj.priority === this.filterpriority && this.igualarFechas(Obj.dueDate,this.filterDueDate) && this.filterResponsible === "")
                    || (Obj.priority === this.filterpriority && Obj.responsible.name === this.filterResponsible && this.filterDueDate === "")
                    || (Obj.responsible.name === this.filterResponsible && this.igualarFechas(Obj.dueDate,this.filterDueDate) && this.filterpriority === "")
                    || (Obj.responsible.name === this.filterResponsible && Obj.priority === this.filterpriority && this.filterDueDate === "")
                    || (this.igualarFechas(Obj.dueDate,this.filterDueDate) && Obj.responsible.name === this.filterResponsible && this.filterpriority === "")
                    || (this.igualarFechas(Obj.dueDate,this.filterDueDate) && Obj.priority === this.filterpriority && this.filterResponsible === "")
                    || (Obj.priority === this.filterpriority && this.filterDueDate === "" && this.filterResponsible === "")
                    || (this.igualarFechas(Obj.dueDate,this.filterDueDate) && this.filterResponsible === "" && this.filterpriority === "")
                    || (Obj.responsible.name === this.filterResponsible && this.filterDueDate === "" && this.filterpriority === "")
                    ?
                    <Card> <Todo key={i} text={Obj.text}
                        priority={Obj.priority} dueDate={Obj.dueDate} responsible={Obj.responsible} /> </Card > : null
            );
            return (
                <ul>{listItems}</ul>
            );

        } else {
            const listItems = this.props.items.map((Obj, i) =>

                <Card> <Todo key={i} text={Obj.text}
                    priority={Obj.priority} dueDate={Obj.dueDate} responsible={Obj.responsible} /> </Card >
            );
            return (
                <ul>{listItems}</ul>
            );
        }
    }
    igualarFechas(a, b) {
        if (new Date(a).getDate() === new Date(b).getDate()) {
            if (new Date(a).getMonth() === new Date(b).getMonth()) {
                if (new Date(a).getFullYear() === new Date(b).getFullYear()) {
                    return true;
                }
            }
        }
        return false;
    }
}