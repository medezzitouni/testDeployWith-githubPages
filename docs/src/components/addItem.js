import {toTimestamp, getToDay} from '../../dateLibrary.js'

Vue.component('addItem', {
    data () {
        return {
            addItem : ''
        }    
    },
    methods: {
        addTodoItem(){
           if(this.addItem.length !== 0){
            // let todos = JSON.parse(store.getItem('todos')) || [];
            // store.setItem('todos', JSON.stringify([...todos, {id : uuid.v4(), todo : this.addItem, completed: false, date : toTimestamp(getToDay())}]))
            Event.$emit('newItemAdded', this.addItem);
            this.addItem = '';
           }
        }
    },
})