const log=(print)=>console.log(print)
const objName={
    Roshini:"rose",
    keerthana:"kiki",
    Dhivya:"yuva",
    sandhya:"sandy",
};
log("looping Object");
const objValue=Object.values(objName)
for (let i = 0; i < objValue.length; i++) {
    log(objValue[i]);
}
const objKeys=Object.keys(objName)
for (let i = 0; i < objKeys.length; i++) {
    log(objKeys[i]);
}

log("----------------for each loop------------");
var data = [{
    "id" : "1", 
    "Name"   : "Rose",
    "Batch" : "2023",
    "Email": "rose@gmail.com"
},
{
    "id" : "2", 
    "Name"   : "kiki",
    "Batch" : "2023",
    "Email": "rose@gmail.com"
}];

data.forEach((item) => {
  log('ID: ' + item.id);
 log('Name: ' + item.Name);
 log('Batch: ' + item.Batch);
log('Email: ' + item.Email);
});

log("----------------for in loop---------------");
for(val in objName){
  log(`
    Name:${val}
    NickName:${objName[val]}
  `)
}
log("----------------for of------------");
const string="dharshini";
for(str of string){
    log(`letter:${str}`)
}