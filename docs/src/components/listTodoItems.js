import {timeConverter} from '../../dateLibrary.js'

Vue.component('listTodoItems', {
    props : ['todos', 'exist'],
    data () {
        return {
            msg : "Todos ",
            
        }    
    },
    methods:{
        deleteTodo(id){
            
            Event.$emit('deleteItem', id)
        },
        checkCompleted(id){
            Event.$emit('completedItem', id)
        },
        displayTodoDate(timestamp){
            return timeConverter(timestamp)
            
        },
    },
    
})
