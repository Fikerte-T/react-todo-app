import React from "react"
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuid4 } from "uuid";
class TodoContainer extends React.Component{
    state = {
        todos: [
          {
            id: uuid4(),
            title: "Setup development environment",
            completed: true
          },
          {
            id: uuid4(),
            title: "Develop website and add content",
            completed: false
          },
          {
            id: uuid4(),
            title: "Deploy to live server",
            completed: false
          }
        ]
       };
       addTodoItem = title => {
           const newTodo = {
               id: uuid4(),
               title: title,
               completed: false
           }
           this.setState({
               todos: [...this.state.todos, newTodo]
           })
       }

       handleChange = id => {
          this.setState(prevState => ({
              todos: prevState.todos.map(todo => {
                  if(todo.id === id){
                      return{
                          ...todo,
                          completed: !todo.completed,
                      }
                  }
                  return todo;
              })
          }))
       }

       delTodo = id => {
           this.setState({
               todos: [
                   ...this.state.todos.filter(todo=> {
                       return todo.id !== id;
                   })
               ]
           })
       }
    render(){
        
        return(
            <div className="container">
                   <div className="inner">
                    <Header/>
                    <InputTodo addTodoProps={this.addTodoItem}/>
                    <TodoList 
                        todos={this.state.todos} 
                        handleChangeProps={this.handleChange}
                        deleteTodoProps={this.delTodo}
               />
           </div>
            </div>
        )
    }
}
export default TodoContainer;