let text_input=document.getElementById("text_input")
let character=document.getElementById("Character")
let word=document.getElementById("word")
console.log(character);
text_input.addEventListener('input',()=>{
   console.log(text_input.value.replace(" ","").length)
 let count=text_input.value.replace(" ","").length;
 let count_word=text_input.value.split(" ").length
 console.log(character)
 character.innerHTML=`Character: ${count}`
 word.textContent=`Word : ${count_word-1}`
})