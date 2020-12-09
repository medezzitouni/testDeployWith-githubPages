const axios = require('axios')
const moment = require('moment-shortformat')

//console.log(moment.unix(timestamp).short())


async function main(){
try{
//	const res = await axios.post(`http://127.0.0.1:3000/api/user/login`, { username: 'medo', password: 'oui'})
//	console.log(res.data)

//	axios.defaults.headers.common["Authorization"] = "jwt " + res.data.token;
//	axios.defaults.headers.common["userId"] = res.data.userId;

	const resUpdate = await axios.put('http://127.0.0.1:3000/api/user', { username: 'medo'})
	console.log("update -> ", resUpdate.data)

	const resAll = await axios.get('htt://127.0.0.1:3000/api/user')
	console.log(resAll)
}catch (e){
	console.log("error -> ", e.response.data)
}

}

main()




const $ = {
    get : (url= null, params = null, query = null, headers= null) => {

        return new Promise(async (resole, reject) =>{
            if(!url) reject('url required')
            try {
                let response = await axios.get(url)
                if(response.data.error) reject(response.data)
                else resole(response.data)
            } catch (error) {
                reject('Sorry, Internal server Error, try later')
            }


        })
    },
    post : (url= null, body = null, headers= null) => {


        return new Promise.reject('heep')
    }
}


async function post(){
    try {
        
        let response = await axios.post('http://localhost:3000/data', {
            username : "med",
            email: "med@gmail.com"
        })
        console.log( typeof response.data)   
    } catch (error) {
        console.error('yeaaaaaaaaaaaaaaah here')
        console.error( "error -> ", error.toJSON())
        // console.error( "error status-> ", error.response)
        console.error( "errorMsg -> ", error.response.data)

    }
}

async function getData(){
    try {   
        let res = await $.get('http://localhost:3000/')
        console.log('my data -> ', res)
    } catch (error) {
        console.error("error: ", error)
    }
}

// getData()
// post()
