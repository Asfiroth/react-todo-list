import React, {Component} from "react";
import TodoItem from "./todoItem";

class TodoList extends Component{

    constructor(props){
        super(props);
        this.removeFromList = this.removeFromList.bind(this);
        this.setAsDone = this.setAsDone.bind(this);
    }

    removeFromList(index){
        this.props.removeItem(index);
    }

    setAsDone(index){
        this.props.markAsDone(index);
    }

    render(){
        let {items} = this.props;
        let todoItems = items.map((item,index) => <TodoItem key={item.index} 
                                                        item={item} 
                                                        index={index} 
                                                        removeItem={this.removeFromList}
                                                        setAsDone={this.setAsDone} />)
        return(
            <ul className="list-group" > {todoItems} </ul>
        )
    }
}

export default TodoList;