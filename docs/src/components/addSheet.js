import { getToDay } from '../../dateLibrary.js'
Vue.component('addSheet', {
    data () {
        return {
            sheetName : '', 
            executionDate : null    
        }    
    },
    methods:{
       addSheet(){
            if(this.sheetName.length !== 0){
                this.executionDate = this.executionDate || getToDay()
                Event.$emit('addSheet', { name : this.sheetName, executionDate: this.executionDate })
                this.sheetName = ''; this.executionDate = null;
            }
       },

    },
    
})