const buf = Buffer.from('runoob', 'ascii');

// output 72756e6f6f62
console.log(buf.toString('hex'));

// output cnVub29i
console.log(buf.toString('base64'));

// create a Buffer with length 10 and all filled with 0
const buf1 = Buffer.alloc(10);
console.log(buf1);

// create a Buffer with length 10 and all filled with 0x1 
const buf2 = Buffer.alloc(10, 1);
console.log(buf2);

// create a Buffer with length 10 without initial
// this function is more fast than Buffer.alloc() 
// but returned Buffer object may contain old data
// so need to use fill() or write() rewrite
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

// create a Buffer contained [0x1, 0x2, 0x3]
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);

// create a Buffer [0x74, 0xc3, 0xa9, 0x73, 0x74] with UTF-8
const buf5 = Buffer.from('tést');
console.log(buf5.toString('utf8'));
console.log(buf5.toString('ascii'));
console.log(buf5.toString('latin1'));


// create a Buffer contained [0x74, 0xe9, 0x73, 0x74] with Latin-1
const buf6 = Buffer.from('tést', 'latin1');
console.log(buf6);

buf7 = Buffer.alloc(256);
len = buf7.write("www.runoob.com");

console.log("number of buf7: "+  len);


buf8 = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf8[i] = i + 97;
}

console.log( buf8.toString('ascii'));       // output: abcdefghijklmnopqrstuvwxyz
console.log( buf8.toString('ascii',0,5));   // output: abcde
console.log( buf8.toString('utf8',0,5));    // output: abcde
console.log( buf8.toString(undefined,0,5)); // use 'utf8' , output: abcde

const buf9 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf9);

// output: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

// output: <Buffer 01 02 03 04 05>
console.log(copy);

var buffer1 = Buffer.from(('cainiaojiaocheng'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());

var buffer4 = Buffer.from('ABC');
var buffer5 = Buffer.from('ABCD');
var result = buffer4.compare(buffer5);

if(result < 0) {
   console.log(buffer4 + " is " + buffer5 + "before");
}else if(result == 0){
   console.log(buffer4 + " is " + buffer5 + "same");
}else {
   console.log(buffer4 + " is " + buffer5 + "behind");
}


var buf10 = Buffer.from('abcdefghijkl');
var buf11 = Buffer.from('RUNOOB');

buf11.copy(buf10, 2);

console.log(buf10.toString());

var buffer6 = Buffer.from('runoob');

var buffer7 = buffer6.slice(0,2);
console.log("buffer7 content: " + buffer7.toString());