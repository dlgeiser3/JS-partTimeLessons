function greet(fName, lName) {
  console.log(`Hello ${fName} ${lName}`)
}

greet("Finn", "Mertins")



for (i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('Fizz Buzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

function isRightTriangle(side, base, hypotenuse) {
  if (side ** 2 + base ** 2 === hypotenuse ** 2) {
    return true
  } else {
    return false
  }
}

isRightTriangle(5, 6, 7)


let netflix = {
  id: 1,
  name: "show",
  seasonInfo: {
    episodeInfo: [{
      episodeNumber: 1,
      episodeName: "Pilot"
    },
    {
      episodeNumber: 2,
      episodeName: "show2"
    }]
  }
}