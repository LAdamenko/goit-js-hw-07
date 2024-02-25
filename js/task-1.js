const listItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);
listItems.forEach((li) => {
    console.log(`Category: ${li.firstElementChild.textContent}`);
    console.log(`Elements: ${li.querySelectorAll("ul > li").length}`)
});











