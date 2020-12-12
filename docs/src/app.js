import { displayDay, 
         getToDay, 
         toTimestamp, 
         timeConverter } from '../dateLibrary.js'

import './components/listTodoItems.js';
import './components/sheetsList.js';
import './components/addSheet.js';
import './components/addItem.js';


window.Event = new Vue();
window.capitalize = value => {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
}
new Vue({
    el: '#app',
    data : {
        
        todos : [],
        sheets : [],
        currentSheet : '',
        sheetName: '',
        todosExist : true,
        today : displayDay()
    },
    created() {
        this.dispatchSheets();
        this.dispatchTodos(this.sheets.length !== 0 ? this.sheets[0].id : null);
        Event.$on('newItemAdded', itemText => this.addTodo(itemText));
        Event.$on('deleteItem', id => this.deleteItem(id));
        Event.$on('completedItem', id => this.checkCompletedItem(id));
        Event.$on('loadTodos', id => this.dispatchTodos(id));
        Event.$on('deleteSheet', id => this.deleteSheet(id));
        Event.$on('addSheet', sheet => this.addSheet(sheet));
    },
    mounted() {
       
    },
    methods:{
        dispatchSheets(){
            this.sheets = storeSheet.getSheets();
            // console.table(this.sheets)
        },
        dispatchTodos(sheetId){
            this.currentSheet = sheetId ;
            this.sheetName = sheetId ? storeSheet.getSheet(sheetId).name : '';
            this.todos = sheetId ? storeSheet.getTodos(this.currentSheet) : [];
            this.checkTodoExisting();

        },
        addTodo(itemText){
            storeSheet.addTodo(this.currentSheet, itemText);
            this.checkTodoExisting();
            this.dispatchTodos(this.currentSheet);


        },
        checkTodoExisting(){
            if(this.todos.length !== 0 ) this.todosExist = false 
            else this.todosExist = true
        },
        deleteItem(id){
            // this.todos = this.todos.filter(item => item.id !== id)
            // this.storeTodos();
            storeSheet.removeTodo(this.currentSheet, id)
            this.checkTodoExisting();
            this.dispatchTodos(this.currentSheet)
        },
        checkCompletedItem(id){
            // this.todos = this.todos.map(item => {
            //     if(item.id === id) item.completed = !item.completed
            //     return item;
            // });
            // this.storeTodos();
            storeSheet.setTodoCompleted(this.currentSheet, id);
            this.checkTodoExisting();
        },
        clearTodos(){
            // this.todos = [];
            // this.storeTodos();
            storeSheet.clearTodos(this.currentSheet);
            this.dispatchTodos(this.currentSheet);
            this.checkTodoExisting();
        },
        addSheet(sheet){
            let sheetId = storeSheet.addSheet(sheet);
            console.log(sheetId);
            this.dispatchSheets()
            this.dispatchTodos(sheetId)
        },
        deleteSheet(id){
            storeSheet.removeSheet(id)
            this.dispatchSheets();
            this.dispatchTodos(this.sheets.length !== 0 ? this.sheets[0].id : null);
        },
        storeTodos(){
           
            store.setItem('todos', JSON.stringify(this.todos))
        }
    },
    filters : {
        capitalize(value) {
            return window.capitalize(value)
        }
    }
})


