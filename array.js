let salary=[3000,4000,5000,2000];
salary.pop();
console.log("deleting a item",salary);
//enter a cities if is chennai print yes otherwise doesnot exist
let cities=["hyd","bang","vizag","chennai"];
cities.shift();
cities.shift();
cities.shift();
console.log("deleting a items",cities);
if(cities=='chennai')
{
    console.log("yes");
}
else{
    console.log("doesnt exist");
}