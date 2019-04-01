import React, {Component} from "react";

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.onTodoDone = this.onTodoDone.bind(this);
        this.onCloseTodo = this.onCloseTodo.bind(this);
    }

    onCloseTodo(){
        let {index} = this.props;
        this.props.removeItem(index);
    }

    onTodoDone(){
        let {index} = this.props;
        this.props.setAsDone(index);
    }

    render(){
        let {item} = this.props;
        const todoState = !item.done ? "done" : "undone";
        const todoClass = item.done ? "done" : "undone";
        const todoButtonClass = item.done ? "btn btn-primary" : "btn btn-success"
        
        return (<li className="list-group-item ">
                    <div className={todoClass}>
                        {item.text}
                    </div>
                    <div>
                        <button type="button" className={todoButtonClass} onClick={this.onTodoDone}>{todoState}</button>
                        <button type="button" className="btn btn-danger" onClick={this.onCloseTodo}>delete</button>
                    </div>
                </li> );
    }
}

export default TodoItem;