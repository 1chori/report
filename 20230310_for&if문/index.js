/* 학생과 수상자의 배열을 만들고 수상자의 값이 나오도록 하라*/

let students = ['Kim','Lee','Hee','Jeong','Yoon','Cha','An'];
let awards = ['Lee','Hee','Cha'];

for(let i = 0; i < students.length; i++){
    for(let k = 0; k < awards.length; k++){
        if(students[i] == awards[k]){
            console.log(awards[k]);
        }
    }
}

/* 나머지 연산자를 이용해서 값이 3의 배수가 나오면 '짝'을 추출하고 그 외엔 값이 나오도록 추출하라(60번 반복) */

for(let a = 1; a < 61; a++ ){
    if (a%3 === 0) {
        console.log('짝');
    } else {
        console.log(a);
    }
}

