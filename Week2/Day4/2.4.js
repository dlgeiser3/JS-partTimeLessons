let netflix = {
  id: 9,
  likes: 932,
  name: "The Good Place", 
  seasonInfo: {
    season1: {
      numberOfEpisodes: 5,
      episodeInfo : [
        { episode: 1, episodeName: "Pilot"},
        { episode: 2, episodeName: "Flying"},
        { episode: 3, episodeName: "Tahani Al-Jamil"},
        { episode: 4, episodeName: "Jason Mendoza"},
        { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis"}
      ]
    },
    season2: {
      numberOfEpisodes: 6,
      episodeInfo : [
        { episode: 1, episodeName: "Everything is Great!"},
        { episode: 2, episodeName: "Dance Dance Resolution"},
        { episode: 3, episodeName: "Team Cockroach"},
        { episode: 4, episodeName: "Existential Crisis"},
        { episode: 5, episodeName: "The Trolley Problem"},
        { episode: 6, episodeName: "Janet and Michael"}
      ]
    },
    season3: {
      numberOfEpisodes: 5,
      episodeInfo : [
        { episode: 1, episodeName: "Everything Is Bonzer!"},
        { episode: 2, episodeName: "The Brainy Bunch"},
        { episode: 3, episodeName: "The Snowplow"},
        { episode: 4, episodeName: "Jeremy Bearimy"},
        { episode: 5, episodeName: "The Ballad of Donkey Doug"}
      ]
    }
  },
  description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
};

// OBJECT CHALLENGES
// console.log the description
// console.log episode 3 of season 2
// console.log each episode name in season 3 using only one console.log


console.log(netflix.description)
console.log(netflix.seasonInfo.season2.episodeInfo[2].episodeName)

let episodes = netflix.seasonInfo.season3.episodeInfo

episodes.forEach(episode => console.log(episode.episodeName))

for (episode of episodes) {
  console.log(episode.episodeName)
}





//PALINDROME CHALLENGE

// Create a function that accepts a string as a parameter
// within the function write a conditional that checks if the word is the is the same forwards and backwards
// If it is the same both ways console.log 'The string is a palindrome'
// If it is not console.log it is not a palindrome

let string = 'radar'

function checker(word) {
  let str = word.toLowerCase();
  let rev = str.split('').reverse().join('');
  // console.log(rev)
  if (str == rev) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}

checker(string)




