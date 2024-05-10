// computerArea();

// function computerArea(width, height)
// {
//     let area = width*height;
//     return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`
// }

// console.log(computerArea(6, 5));

// function planetHasWater(planet)
// {
//     if(planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars')
//         return true;
//     else
//         return false;
// }

// console.log(planetHasWater('Earth'));
// console.log(planetHasWater('EartH'));
// console.log(planetHasWater('EaRtH'));
// console.log(planetHasWater('MaRs'));
// console.log(planetHasWater('mArS'));
// console.log(planetHasWater('Venus'));
// console.log(planetHasWater('JUPITER'));

function getDevObject(name) {
    let skills = [];
    for (let i = 1; i < arguments.length; i++) {
      skills.push(arguments[i]);
    }
    return {
      devName: name,
      jobSkills: skills
    };
}

let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');
console.log(maria)