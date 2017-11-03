//Katsama Amornnimit

//------------------------------------------------------------------
// PART I: Using a while loop, print the message provided 100 times
//------------------------------------------------------------------

const name = 'John'

// Creates a list element and appends it to the unordered list in part1

//Note : Ricky created this fuction as convinient way to add list items
//to the DOM
const appendListElement = (message) => {
  //1. creates an emtry "list item" container
  const li = document.createElement('li')

  //2. creates a TextNode in the document that contain the string stored
  //   in the "text" parameter (which is a variable).
  const textNode = document.createTextNode(message)

  //3. attaches the textNode to the list item element.
  li.appendChild(textNode)

  //4. finds the element that has id="part1" and appends the list items.
  document.querySelector('#part1').appendChild(li)

}

//beginning our while loop syntax:
//Caroline: assign different words in the loop hits different numbers.
let counter = 1
while (counter < 101) {
    //Note : make sure you call it *after* you defind it.
    appendListElement(counter + '. I had learned something useful')
    ++counter
}

//To actually exucute the function, you have to call it:
//appendListElement('One week and one day')
//appendListElement('is')
//appendListElement('Today, ' + name + '! Make yourself comfortable.')
//appendListElement('Today, ' + name + '! Make yourself comfortable.')
//appendListElement('Today, ' + name + '! Make yourself comfortable.')


//------------------------------------------------------------------
// PART II: Using a for loop, write out each person’s avatar, name, and score, based on the people array
//------------------------------------------------------------------
//The data:
var people = [
    { name: 'Arrays',
      pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png',
      score: 600
    },
    { name: 'Plus',
      pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png',
      score: 300
    },
    { name: 'Loops',
      pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png',
      score: 80
    },
    { name: 'Is',
      pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png',
      score: 60
    },
    { name: 'The',
      pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png',
      score: 40
    },
    { name: 'Bests',
      pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png',
      score: 10
    },
    { name: 'Friend',
      pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png',
      score: 5
    },
    { name: 'Caro',
      pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png',
      score: 1
    }
]


// use a for loop to DRY up the printNames function
// it should loop over the people array and append
// the users avatar pic, a greeting, and their score to the HTML
const printNames = (counter) => {
      // Message 1
      const img1 = document.createElement('img')
      img1.src = people[counter].pic
      img1.classList.add('avatar')

      const paragraph1 = document.createElement('p')
      const text1 = document.createTextNode('Welcome, ' + people[counter].name + '! Your score is: ' + people[counter].score)
      paragraph1.appendChild(text1)

      document.querySelector('#part2').appendChild(img1)
      document.querySelector('#part2').appendChild(paragraph1)

      /* Message 2
      const img2 = document.createElement('img')
      img2.src = people[1].pic
      img2.classList.add('avatar')

      const paragraph2 = document.createElement('p')
      const text2 = document.createTextNode('Welcome, ' + people[1].name + '! Your score is: ' + people[1].score)
      paragraph2.appendChild(text2)

      document.querySelector('#part2').appendChild(img2)
      document.querySelector('#part2').appendChild(paragraph2)*/
}

// arrays + loops === Best Friends
for (let i = 0; i < people.length; i++) {
    printNames(i)

  }
//Loops is better then this one for a lot of Arrays
/*printNames(0)
  printNames(1)
  printNames(2)
  printNames(3)
  printNames(4)*/
