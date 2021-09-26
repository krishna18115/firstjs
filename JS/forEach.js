const companies=[
    {name: "Company One",category:"finance",start: 1981,end: 2003},
    {name: "Company Two",category:"retail",start: 1990,end: 2008},
    {name: "Company Three",category:"auto",start: 1989,end: 2010},
    {name: "Company Four",category:"retail",start: 1999,end: 2007},
    {name: "Company Five",category:"technology",start: 2009,end: 2014},
    {name: "Company six",category:"finance",start: 1987,end: 2010},
    {name: "Company Seven",category:"auto",start: 1986,end: 1996},
    {name: "Company Eight",category:"technology",start: 2011,end: 2016},
    {name: "Company Nine",category:"Retail",start: 1981,end: 1989},
];
const ages = [33,28,13,5,67,45,34,23,22,14,89,24,17,27,19,47];

// for(let i = 0; i < companies.length;i++){
//     console.log(companies[i].name);
//  }

//forEach
// companies.forEach(function(Company){
//     console.log(Company.name);
// });



// let canDrink = [];
// for(let i = 0;i < ages.length; i++){
//     if(ages[i] >=21){
//         canDrink.push(ages[i]);
//     }
// }


// const canDrink = ages.filter(function(age){
//     if(age >=21){
//         return true;
//     }
// });



// const canDrink = ages.filter(age => age >=21);
// console.log(canDrink);



// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'retail'){
//         return true;
//     }
// });

//const retailCompanies = companies.filter(company => company.category === 'retail');
//console.log(retailCompanies);


//Get 80s companies//

// const eightiesCompanies = companies.filter(function(company){
//     if(company.start >= 1980 && company.start <= 1990){
//         return false;
//     }
//     else if(company.start >=1991 && company.start <= 2012){
//            return true;
//     }
// });

// console.log(eightiesCompanies); 

// const lastedTenYears = companies.filter(company =>(company.end - company.start >= 10));
// console.log(lastedTenYears);

//map
//create array of company names
// const companyNames = companies.map(function(company){
//     return company.name;
// });
// console.log(companyNames); 


// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// console.log(testMap);


//sort
//sort companies by start year 

// const sortedCompanies = companies.sort(function(c1,c2){
//     if(c1.start > c2.start){
//         return 1;

//     }else {
//         return -1;
//     }
// });

// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

//sort ages
// const sortAges = ages.sort((a,b) => a-b);
// console.log(sortAges);

 //reduce
//  let ageSum = 0;
//  for(let i = 0; i < ages.length; i++){
//      ageSum += ages[i];
//  }
//  const ageSum = ages.reduce(function(total,age){
//      return total + age;
//  },0);

//  console.log(ageSum);

//combine methods

const combined = ages
       .map(age => age * 2)
       .filter(age => age >= 40)
       .sort((a,b) => a-b)
       .reduce((a,b) => a+b,0);

       console.log(combined);


