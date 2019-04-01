import React, {Component} from "react";


class TodoForm extends Component{

    constructor(props){
        super(props);
        this.state = {todo: ''}
        this.onTodoTextChanged = this.onTodoTextChanged.bind(this);
        this.addItemToList = this.addItemToList.bind(this);
    }
    componentDidMount(){
        this.refs.itemName.focus();
    }

    onTodoTextChanged(event) {
        let {value} = event.target;
        this.setState({todo: value});
    }

    addItemToList(){
        let {todo} = this.state;
        this.props.addItem(todo);
        this.setState({todo: ''});
    }

    render(){
        return(
            <div className="form-inline">
                <input type="text" ref="itemName" className="form-control" value={this.state.todo} 
                        placeholder="add a new todo..." onChange={this.onTodoTextChanged}/>
                <button type="submit" className="btn btn-success" onClick={this.addItemToList}>Add</button> 
            </div>
        )
    }
}

export default TodoForm;