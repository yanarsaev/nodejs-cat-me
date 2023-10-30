let catMe = require('cat-me')
let arrCats = ['grumpy', 'approaching', 'tubby', 'confused', 'playful', 'thoughtful', 'delighted', 'nyan', 'resting']

for(let i = 0; i < arrCats.length; i++) {
    let random = Math.floor(Math.random() * arrCats.length)
    if(i < 3) {
        console.log(catMe(arrCats[random]))
    }
}

