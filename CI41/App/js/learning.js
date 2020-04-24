//  1. Boolean
    let b1 = true;
    let b2 = false;
    let x;
    // x false: null, undefined,NaN, 0 , '',false;
    // x true : else false;
    if(x)  
    {

    }

//2.String
    // ""  ''  ``

    let name = 'Linh'
    let message = `Hello ${name}` // message = 'Hello Linh'

    let str ='Abc'
    str.length //3;
    tr.toLowerCase() //'abc';
    str.toUpperCase() //'ABC';

    let str2 = 'ab c d e'
    str2.trim() //'ab c d e'
    str2.trim().split(' ') // ['ab','c','d','e']
    str2.trim().split('') // tự tìm Hiểu

    let str3 = `Hello i'm Cuong`
    str3.startsWith('Hello') //true;
    str3.endsWith('dcm') //false
    str3.includes('l') // true


// regex ~ regular expression
    let regex = /linh/gi;
    let strs = ['Nam','Cuong','Huy','Ha']
    for(let str of strs){
        console.log(str, regex.test(str))
    }
// 3.Number
    parseInt('12.1') // 12
    parseInt(12) // 12
    pareseFloat('12.1') // 12.1
    Math.sqrt(2)
    Math.pow(2,5)
    Math.sin(Math.PI/2)

    Math.floor(10.5) // 10
    Math.ceil(10.5) //11
//4. Class, Object