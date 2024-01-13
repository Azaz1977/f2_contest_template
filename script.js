/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  var empName = arr.map(arrName);
  console.log(empName);

  function arrName(profe){
  if(profe.profession == "developer")
	  {return profe.name;}
  }
}

function PrintDeveloperbyForEach() {
  function arrName(profe){
    if(profe.profession == "developer")
      {console.log(profe.name);}
    }
    
    arr.forEach(arrName);
}

function addData() {
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
}

function concatenateArray() {
  let arrCopy = arr;
  console.log(arrCopy);
}
