import React, {Component} from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

class TodoPage extends Component{

    constructor(props){
        super(props);
        this.addItemToList = this.addItemToList.bind(this);
        this.removeItemFromList = this.removeItemFromList.bind(this);
        this.markAsDone = this.markAsDone.bind(this);
        this.state = {todoItems: []};
    }

    addItemToList(todo){
        let {todoItems} = this.state;
        todoItems.push({ index: todoItems.length + 1, text: todo, done: false });
        this.setState({todoItems: todoItems});
    }

    removeItemFromList(index){
        let {todoItems} = this.state;
        todoItems.splice(index, 1);
        this.setState({todoItems: todoItems});
    }

    markAsDone(index){
        let {todoItems} = this.state;
        let item = todoItems[index];
        todoItems.splice(index, 1);
        item.done = !item.done;
        if(item.done) todoItems.push(item);
        else todoItems.unshift(item);
        this.setState({todoItems: todoItems});
    }

    render(){
        let {todoItems} = this.state;
        return(
            <div className="main container">
                <h1>ToDo List</h1>
                <TodoForm addItem={this.addItemToList} />
                <TodoList items={todoItems} removeItem={this.removeItemFromList}
                            markAsDone={this.markAsDone} />
            </div>
        )
    }
}

export default TodoPage;