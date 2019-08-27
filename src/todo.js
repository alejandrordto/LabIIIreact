import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
          //Add your code here to represent a TODO
          
          <h2>{this.props.res.text} {this.props.res.priority}  {this.props.res.dueDate.toString()}</h2> 
          
        );
    }

}