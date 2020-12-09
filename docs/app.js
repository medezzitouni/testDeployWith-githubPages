/*
    ! ListTodoItems Compo
    ! Add TodoItem

*/
var store = window.localStorage;
var Event = new Vue();

function toDay(){
    let a = new Date();
    // return `${theDay.getMonth()+1}/${theDay.getDate()}/${theDay.getFullYear()}`
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' | ' + hour + ':' + min + ':' + sec ;
    return time;
}

Vue.component('listTodoItems', {
    props : ['todos', 'exist'],
    data () {
        return {
            msg : "All Todos ",
            
        }    
    },
    methods:{
        deleteTodo(id){
            
            Event.$emit('deleteItem', id)
        },
        checkCompleted(id){
            Event.$emit('completedItem', id)
        }
    },
})

Vue.component('add-item', {
    data () {
        return {
            addItem : ''
        }    
    },
    methods: {
        addTodoItem(){
            let todos = JSON.parse(store.getItem('todos')) || [];
            store.setItem('todos', JSON.stringify([...todos, {id : uuid.v4(), todo : this.addItem, completed: false}]))
            Event.$emit('newItemAdded')
            this.addItem = '';
        }
    },
})
new Vue({
    el: '#app',
    data : {
        
        todos : [],
        todosExist : true,
        today : toDay()
    },
    created() {
        this.dispatchTodos();
        Event.$on('newItemAdded', () => this.dispatchTodos())
        Event.$on('deleteItem', id => this.deleteItem(id))
        Event.$on('completedItem', id => this.checkCompletedItem(id))

        
    },
    mounted() {
       
    },
    methods:{
        dispatchTodos(){
            this.todos = JSON.parse(store.getItem('todos')) || []
            this.checkTodoExisting();
        },
        checkTodoExisting(){
            if(this.todos.length !== 0 ) this.todosExist = false 
            else this.todosExist = true
        },
        deleteItem(id){
            this.todos = this.todos.filter(item => item.id !== id)
            store.setItem('todos', JSON.stringify(this.todos))
            this.checkTodoExisting();
        },
        checkCompletedItem(id){
            console.log('jina')
            this.todos = this.todos.map(item => {
                if(item.id === id) item.completed = !item.completed
                return item;
            });
            store.setItem('todos', JSON.stringify(this.todos))
            this.checkTodoExisting();
        },
        clearTdos(){
            this.todos = [];
            store.setItem('todos', JSON.stringify(this.todos))
            this.checkTodoExisting();

        }
    }
})


