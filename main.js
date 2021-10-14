//inserire all'inerno della lista 20 li items


//query selector

//for loop

//insertadiacenthtml


const ulElement = document.querySelector("ul")

for (let i = 0; i < 20; i++) {
    const liElement = `<li> ${i}lorem </li>`
    console.log(liElement);

    ulElement.insertAdjacentHTML("beforeend", liElement)
}