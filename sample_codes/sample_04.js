function updateValue(objRef) {
    objRef.value = 15
}

if(myObj.value != 10) {
    console.log(myObj.value)
} else {
    updateValue(myObj)
    console.log(myObj.value)
}

