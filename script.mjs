const str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus libero sit amet urna vestibulum, quis volutpat neque feugiat. Etiam ex quam, blandit sit amet elementum sit amet, pulvinar quis nibh. Vivamus pharetra sem metus, a efficitur lorem commodo quis. Sed volutpat, lacus vitae euismod volutpat, purus quam posuere.`;

let counter = 0;
for(let i=0;i<str.length;i++)
{
    if(str.length === 0)
        break;
    else if(str[i] === ` `)
        counter++;
}

if(counter != 0)
    counter++;

console.log(`# of words: ${counter}`);