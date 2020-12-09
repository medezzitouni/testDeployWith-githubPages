const express = require('express')
const cors = require('cors')
const monk = require('monk')
const bodyParser = require('body-parser')
const multer = require('multer')

const app = express()

//! database
// const db = monk('localhost:27017/appTest', {
//     user :'med',
//     password:'ouioui1997'
// })

// db.then( _ => console.log('successfully runnning'))
// .catch(err => console.log("this catched -> ", err))

// const users = db.get('users')



app.use(cors())
app.use(express.json())
app.use(multer().none())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/data/:id', (req, res)=>{
    console.log(req.url)
    // users.find().then(user => res.json(user))
    res.json({
        ok : true
    })
})
app.post('/data', (req, res)=>{
    const user = {
        username: req.body.username,
        email : req.body.email,
        created_date: new Date()
    } 
    console.log("body -> ", req.body)
    console.log(user)

    console.log("we are here")
    if(user.username == "med"){
        // res.status(401)
        // res.json({
        //     error : 'prob'
        // })
        
        throw new Error('somthing happened')
    }

    res.json({
        data: "GoodBye world"
    })
    // users.insert(user).then(createdUser => res.json(createdUser)).then(err => console.log(err))
})

.get('/', (req, res) =>{
    
    res.json({error:  'HELLO'})
})

app.listen(3000)