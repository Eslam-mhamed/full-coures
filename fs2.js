const fs= require('fs');
// to get information from file(read file)
const first = fs.readFileSync('./test/first.txt','utf8');
const second = fs.readFileSync('./test/second.txt','utf8');
console.log(first ,second);

// to create file and put information

const create = fs.writeFileSync('./test/result.txt',`create ${first}${second}`,{flag:'a'});
