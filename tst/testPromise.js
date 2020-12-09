


 function connect (admin){

   return new Promise((resolve, reject ) => {

    	admin.init()
        var db = null
        db = admin.firestore()
        if(!db) reject('db is not connected')
        else resolve(db)
   })
}


admin = {
        init: () => { console.log('init') },
	firestore : () => { return { ok: true } }
}



async function get(){

	const db = await connect(admin)
	return db

}

async function main(){
	const obj = await get()
}

//main()

var k = get().then(console.log)

console.log("helo" + k)
