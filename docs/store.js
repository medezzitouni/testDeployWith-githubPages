window.store = window.localStorage;
import {toTimestamp, getToDay} from './dateLibrary.js';
window.storeSheet = {
    sheets : JSON.parse(localStorage.getItem('sheets')) || (() => {
        localStorage.setItem('sheets', JSON.stringify([]));
        return [];
    })(),
    addSheet(sheet = {}){
        let sheetKeys = ['name', 'executionDate']
        sheetKeys.forEach(key => {
            if( !(key in sheet) )
                throw new Error(`${key} doesn t exit in sheet Object!`);
        })

        sheet.id = uuid.v4()
        sheet.todos = []
        sheet.date =  toTimestamp(getToDay())
        sheet.executionDate = toTimestamp(sheet.executionDate)
        this.sheets.push(sheet);
        localStorage.setItem('sheets', JSON.stringify(this.sheets))
        return sheet.id;
    },
    removeSheet(id){
        this.sheets = this.sheets.filter(item => item.id !== id)
        localStorage.setItem('sheets', JSON.stringify(this.sheets));

    },
    getSheets(){
        return this.sheets
    },
    getSheet(id){
        return this.sheets.filter(item => item.id == id)[0]
    },
    addTodo(sheetId, itemText){
        this.sheets.filter(item => item.id == sheetId)[0].todos.push({id : uuid.v4(), todo : itemText, completed: false, date : toTimestamp(getToDay())})
        localStorage.setItem('sheets', JSON.stringify(this.sheets));

    },
    getTodos(sheetId){
        return this.sheets.filter(item => item.id == sheetId )[0].todos || [];  
    },
    getTodo(sheetId, todoId){
        return this.sheets.filter(item => item.id == sheetId )[0]
        .todos.filter(item => item.id == todoId )[0] || {};  
    },
    setTodoCompleted(sheetId, todoId){

       let todos = this.sheets.filter(item => item.id == sheetId )[0]
        .todos.map(item => {
            if(item.id == todoId ) item.completed = ! item.completed;
            return item;
        })
        // console.log(todos)
        this.sheets.filter(item => item.id == sheetId)[0].todos = todos
        localStorage.setItem('sheets', JSON.stringify(this.sheets));
    },
    removeTodo(sheetId, todoId){
        this.sheets.filter(item => item.id == sheetId)[0].todos = this.sheets.filter(item => item.id == sheetId)[0].todos.filter(item => item.id !== todoId);
        localStorage.setItem('sheets', JSON.stringify(this.sheets));
    },
    clearTodos(sheetId){
        this.sheets.filter(item => item.id == sheetId)[0].todos = [];
        localStorage.setItem('sheets', JSON.stringify(this.sheets));

    }
    // setItem(name, value){
    //     localStorage.setItem(name, value);

    // },
    // getItem(name){
    //     return localStorage.getItem(name)
    // }
    
}
//  s.addSheet({ name : 'ctppppp', executionDate: '12/14/2020 22:40:00'})
// storeSheet.addTodo(storeSheet.getSheets()[1].id, 'hghhgyyy');
// console.log(timeConverter(s.getTodo(s.getSheets()[0].id, s.getSheets()[0].todos[0].id).date))

// s.removeTodo(s.getSheets()[0].id, s.getSheets()[0].todos[0].id)
// s.clearTodos(s.getSheets()[0].id)
// s.removeSheet(s.getSheets()[1].id)
console.log("store is here".toUpperCase());