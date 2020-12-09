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
        
        let response = await axios.post(API_URI, {
            headers: {'content-type': 'application/json'},
            data : {
                username : 'med',
                email : "ooooooooooo"
            }
        })
        // console.log(response.data)   
    } catch (error) {
        console.error('yeaaaaaaaaaaaaaaah here')
        // console.error( "error -> ", error)
        console.error( "errorMsg -> ", error.data)
        console.error( "errorMsg -> ", error.response.error)

    }


    // method: 'POST',
            // body: JSON.stringify(data),
            // headers : {
            //     'content-type': 'application/json'
            // }
})