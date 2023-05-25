
const isNumber = (number) => {
    if(number === +(number)){
        return number % 2 ? ('Парне') : ('Не парне');
    }else{return ''};
}

console.log(isNumber('123'));
console.log(isNumber(123));
console.log(isNumber(122));


function isSimpleNumber (arrNums) {
    let resultArr = [];
    arrNums.forEach((el)=>{
        if((el % 1) === 0 && (el % el) === 0) {
            resultArr.push(el);
            if(resultArr.length === 5) return;
        }
    })
    let res = 0;
    resultArr.forEach(el => res += el);
    return res
}

console.log(isSimpleNumber([2,3,4,1,3,4,5,36,0.123,0.342]));



const getModifiedSum = (number) => {
    let arrayOfOnes = [];
    for(let i = 0; i < number; i++){
        let tmp = '';
        for(let j = 0; j <= i; j++){
            tmp += '1';
        }
        arrayOfOnes.push(+(tmp));
        tmp = '';
    }
    let res = 0;
    arrayOfOnes.forEach(el=>res+=el)
    return res;
}

console.log(getModifiedSum(5));