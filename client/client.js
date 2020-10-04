const form = document.querySelector('#form')
const API_URI = 'http://localhost:3000/data'


form.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const f = new FormData(form)
    const data = {
         username : f.get('username'),
         email : f.get('email')
    }
    try {
        let response = await fetch(API_URI, {
            method: 'POST',
            body: JSON.stringify(data),
            headers : {
                'content-type': 'application/json'
            }
        })
        console.log( await response.json())
   
    } catch (error) {
        console.log(error)
    }
})