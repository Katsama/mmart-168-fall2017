//Katsama Amornnimit

//------------------------------------------------------------------
// PART I

const addListItemToUnorderedHTMLList = (message) => {
    //add "li" tag to "ul" tag
    //document.getElementById('output').innerHTML += "<li>" + message + "</li>"

    //step 1: get the element in the HTML file:
    const ul = document.getElementById('output')

    //steo 2: create a brand new li element:
    const li = document.createElement("li")

    //step 3: create a textNode with the message inside
    const textNode = document.createTextNode(message)

    //step 4: append a textNode to the li element
    li.appendChild(textNode)

    //step 5: append the li element to the ul element
    ul.appendChild(li)
}

/*addListItemToUnorderedHTMLList("Kat")
addListItemToUnorderedHTMLList("sa")
addListItemToUnorderedHTMLList("ma")*/

//------------------------------------------------------------------
// PART II
//------------------------------------------------------------------
// Using the strategy of your choice, write a loop over the numbers
// 1 - 100 that satisfies the following conditions:
//
// 1. If the number is divisible by 3, append "Fizz" to the unordered list
// 2. If the number is divisible by 5, append "Buzz" to the unordered list
// 3. If the number is divisible by 3 AND 5, append "FizzBuzz" to the unordered list.
// 4. Bonus points: Include both the number *and* the word you've appended to the list

for (let i = 1; i <= 100; i++) {
    //for console
    //console.log(i)
    //Order matters
    if (i % 3 === 0 && i % 5 === 0) {
        addListItemToUnorderedHTMLList("FizzBuzz")
    } else if (i % 3 === 0) {
        addListItemToUnorderedHTMLList("Fizz")
    } else if (i % 5 === 0) {
        addListItemToUnorderedHTMLList("Buzz")
    } else {
        addListItemToUnorderedHTMLList(i)
    }
}
