// 1. For the given JSON literate over all for loops(for,for in, forEach)

var student = [{
    "Name" : "Archana K",
    "Age" : "35",
    "Address" : " 26 Anna nagar Chennai-24",
    "PH" : "9734575412"
}]
//JSON For loop

for(let i=0;i<student.length;i++){
    console.log(student[i]); //{ Name: 'Archana K', Age: '35', Address: '26 Anna nagar Chennai-24', PH: '9734575412' }
}

//JSON forin loop

for(let j in student){
    console.log(student[j]); //{ Name: 'Archana K', Age: '35', Address: '26 Anna nagar Chennai-24', PH: '9734575412' }
}

//JSON forof loop

for(arr of student){
    console.log(arr); //{ Name: 'Archana K', Age: '35', Address: '26 Anna nagar Chennai-24', PH: '9734575412' }
}

//JSON forEach loop

student.forEach((ele)=>console.log(ele)); //{ Name: 'Archana K', Age: '35', Address: '26 Anna nagar Chennai-24', PH: '9734575412' }