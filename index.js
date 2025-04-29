const button = document.getElementById("submit")
const input3 = document.getElementById("input3")
const input2 = document.getElementById("priority")
const input1 = document.getElementById("input1")
const output = document.getElementById("info")
const task= []


button.addEventListener('click', () => {
let finaloutput = {
    task: input1.value,
    priority: input2.value,
    importance: input3.value,
    completed: userinput
    date : this.date

}
console.log(finaloutput)     
output.textContent = finaloutput

});
