import axios from 'axios';
import  { defineStore} from 'pinia'

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id: 0
    }),
    actions: {
        addTodo(item) {
            this.todoList.push({item, id: this.id++ , completed: false})
        },
        deleteTodo (itemId){
            this.todoList = this.todoList.filter((object) => {
                return object.id !== itemId;
            })
        },
        toggleCompleted(idToFind){
            const todo = this.todoList.find((obj) => obj.id === idToFind)
            if(todo){
                todo.completed = !todo.completed
            }
        },
        async getTodo (){
            const response = await axios.get('url com laravel proximo commit ')
            try{
                this.todoList = await response.data.contatos
            }catch (err){
                console.log('Error -> ' + err);
            }
        }
    }


})