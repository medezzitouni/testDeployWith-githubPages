const moment = require('moment-shortformat')

function toTimestamp(strDate){
 var datum = Date.parse(strDate);
 return datum / 1000;
}


// this function is better
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
	console.log( "here" , a.getHours())
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

function toDay(){
	let theDay = new Date();
	return `${theDay.getMonth()+1}/${theDay.getDate()}/${theDay.getFullYear()}`
}

// console.log(toDay());
let k = toDay();


let dateArray = [ toTimestamp('04/25/2020'),toTimestamp('05/25/2020'), toTimestamp(toDay()),toTimestamp('12/30/2021'),toTimestamp('01/24/2020'),toTimestamp('05/24/2019')];
//console.log(dateArray);
//console.log(k);

let t = toTimestamp(k);
console.log(dateArray.includes(t));


let d = new Date(t * 1000);
console.log(d);

// using the second function

console.log(timeConverter(t));
