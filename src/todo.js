import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
          //Add your code here to represent a TODO
          
          <h2>{this.props.text} {this.props.priority}  {this.props.dueDate}</h2> 
          
        );
    }

}