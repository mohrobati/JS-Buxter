function updateValue(objRef) {
    objRef.value = 20
}

if(myObj.value == 10) {
    updateValue(myObj)
}

console.log(myObj.value)