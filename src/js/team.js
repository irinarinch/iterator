import Character from "./character";

export default class Team {
  constructor() {
    this.daemon = new Character('Daemon', 'Daemon');
    this.zombie = new Character('Zombie', 'Zombie');
    this.bowerman = new Character('Bowerman', 'Bowerman');

    let keys = Object.keys(this); 
    let obj = this;   

    this[Symbol.iterator] = function() {
      let i = 0;
      
      return {               
        next() {          
          if (i < keys.length) {
            return {
              value: obj[keys[i++]],
              done: false
            }            
          }

          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }
}

const team = new Team();

for(let item of team) {
  console.log(item);
}


