import {timeConverter} from '../../dateLibrary.js'

Vue.component('sheetsList', {
    props : ['sheets'],
    data () {
        return {
            title : 'Sheets 📁',    
        }    
    },
    methods:{
        deleteSheet(id){
            
            Event.$emit('deleteItem', id)
        },
        checkCompleted(id){
            Event.$emit('completedItem', id)
        },
        displayTodoDate(timestamp){
            return timeConverter(timestamp)  
        },
        displaySheetTodos(id){
            Event.$emit('loadTodos', id)
        },
        deleteSheet(id){
            Event.$emit('deleteSheet', id);
        }
    },
    filters:{
        capitalize(s){
            return window.capitalize(s)
        },
        convertToDate(timestamp){
            return timeConverter(timestamp);
        },
        truncate(text, stop, clamp) {
            return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
        },
    },
    
})