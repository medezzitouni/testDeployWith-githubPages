
export function getToDay(){
    let theDay = new Date();
    return `${theDay.getMonth()}/${theDay.getDate()}/${theDay.getFullYear()} ${theDay.getHours()}:${theDay.getMinutes()}:${theDay.getSeconds()}`
}
export function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum / 1000;
}
export function displayDay(){
    let a = new Date();
    // return `${theDay.getMonth()+1}/${theDay.getDate()}/${theDay.getFullYear()}`
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

export function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    //   console.log( "here" , a.getHours())
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