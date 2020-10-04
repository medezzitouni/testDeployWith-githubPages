const express = require('express')
const cors = require('cors')
const monk = require('monk')


const app = express()

//! database
const db = monk('localhost:27017/appTest', {
    user :'med',
    password:'ouioui1997'
})

db.then( _ => console.log('successfully runnning'))
.catch(err => console.log("this catched -> ", err))

const users = db.get('users')



app.use(cors())
app.use(express.json())

app.post('/data', (req, res)=>{
    const user = {
        username: req.body.username,
        email : req.body.email,
        created_date: new Date()
    } 
    console.log(user)
    users.insert(user).then(createdUser => res.json(createdUser)).then(err => console.log(err))
})
.get('/data', (req, res)=>{
    users.find().then(user => res.json(user))
})
.get('/', (req, res) =>{
    res.json({msg:  'HELLO'})
})

app.listen(3000)