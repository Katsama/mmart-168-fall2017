//Katsama Amornnimit
const beyonceTweet = {
    name: 'Beyoncé',
    handle: '@beyonce',
    text: '#LEMONADE the Visual Album.'
}

const links = [
  'https://twitter.com/mmart168',
  'https://twitter.com/beyonce',
  'http://www.billboard.com/files/media/beyonce-2016-press-Parkwood-Entertainment-Lemonade-billboard-1548-650-4.jpg']

const modifyText = () => {
  // YOUR CODE BELOW THIS LINE
  document.querySelector('#message2').innerHTML = beyonceTweet.text
  document.querySelector('#name2').innerHTML = beyonceTweet.name
  document.querySelector('#handle2').innerHTML = beyonceTweet.handle
}

const changeLinkAndImageAttributes = () => {
  // YOUR CODE BELOW THIS LINE
  document.querySelector('#link1').href = links[0]
  document.querySelector('#name2').href = links[1]
  document.querySelector('#beyonce').src = links[2]
}

const changeClassAttribute = () => {
  // YOUR CODE BELOW THIS LINE
  document.querySelector('#tweet1').className = 'tweet-pink'
  document.querySelector('#tweet2').className = 'tweet-pink'
}

const appendElements = () => {
  // YOUR CODE BELOW THIS LINE
  document.querySelector('#tweet1').innerHTML += '<a href = "https://f17.ebook.mmart.us/">Intro to JavaScript</a>'
  //Add An "img" element (an image) that points to an image of your choice,
  //symbolizing something about the course.
  //document.querySelector('#tweet1').innerHTML += '<a src = "https://www.planet-source-code.com/vb/2010Redesign/images/LangugeHomePages/HTML5_CSS_JavaScript.png"/a>'
}
