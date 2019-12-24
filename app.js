//With this I select the element from DOM with id "Forma", that is my form element. And I saving the selector of that element in the variable called Forma
let Forma = document.getElementById("Forma");
//I selected the input filed which has the id "polje" and I store it in the variable
let polje = document.getElementById("polje");
//I here selected the ul list with id  "lista", in this list I will via vanila JS insert the tasks that users inputs thorugh the form
let lista = document.getElementById("lista");


//Here I on the variable Forma (which contains selector of DOM element) setup the vanila JS function addEventListener and I added the parametear of event which will JS listen and that is the submit  event, after that i wrote the anonimus function as array function an inside it I create code block which will execute when someone click on the submit button
Forma.addEventListener("submit", (e)=>{
  //Here I prevent default browser behaviour when form is submited and that is the reloading the page, I do not want that behaviour and because of that I prevent default behaviour with this JS function which I setup on the parameter of the my anominus function inside of the this code blok. With this the page will not reload when some cliks on the submit button and this will enabled me to put the tasks in the ul list below
  e.preventDefault();
  //Here I calling the function which I created bellow and which has all code for adding the list item in the list. In this calling function i pase it the arugment which held the selector of the input field and specify the value of it. This will pase into the function as the parametar the value which the user is inputed in the input field
  kreirajItem(polje.value);
})

//Creating the function which will recive userinput value as parametar and proces it and added it into the selected list. 
function kreirajItem(x){
  //Creating the variavle which held the html markup and in which I pased the parametar which is pased form calling the function and wich held the value of input. Here i use template literals and this enables me to on easy way use the html and valiable or js code
  let html = `<li>${x} <button>Delete</button></li>`
  //Here I selected the ul list which I selected from dom on top and stored in the variable lista. After that i added the vanila js functioj insertAdjacentHTML which inserts html into selected element. This function had to have the 2 parametars first is the place where the element will be put in our cease it is the beforeend which will added element on the end, and the second parametar is the content of that elemen we here put the variable html wich held the html markup and pased value from input field
  lista.insertAdjacentHTML("beforeend",html );

}