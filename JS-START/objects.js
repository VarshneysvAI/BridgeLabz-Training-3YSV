let student = {
    id:101,
    name:"rahul",
    ispresent:true,
    address:{
        city:"mathura",
        pincode:12345,
    },
    display: ()=>{
        console.log('my name is $(this.name)')
    }
}
let jsondata = JSON.stringify(student);
console.log(jsondata);

let objData = JSON.parse(jsonData)
console.log(objData);
student.display()
