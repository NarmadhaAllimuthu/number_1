
function fetchFact(type, targetElementId, descriptionElementId) {
    
    const ip = parseFloat(document.getElementById("number").value);
  if(isNaN(ip)){
    alert("Please enter a valid number 😊😊😊");

  }else{
    let apiUrl = `http://numbersapi.com/${ip}/${type}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Get the target HTML elements
            const targetElement = document.getElementById(type);
            // const descriptionElement = document.getElementById(type);

            // Display the category description
            // descriptionElement.innerHTML = getCategoryDescription(type);

            // Display the fact in the target element
            targetElement.innerHTML = data;
        })
        .catch(error => {
            // Handle errors, e.g., network errors or parsing errors
            console.error('Error:', error);
        });
    }
}
function getCategoryDescription(type) {
    switch (type) {
        case "math":
            return "Mathematics Fact:";
        case "year":
            return "Year Fact:";
        case "date":
            return "Date Fact:";
        case "trivia":
            return "Trivia Fact:";
          
        default:
            return "Fact:";
    }

} 


const btn = document.getElementById("button");
btn.addEventListener("click", () => {
    // Call the fetchFact function for each type and specify the target and description elements
    fetchFact("math", "math", "math-description");
    fetchFact("year", "year", "year-description");
    fetchFact("date", "date", "date-description");
    fetchFact("trivia", "trivia", "trivia-description");
  
});







// function foo(type,op){
//     const ip=parseFloat(document.getElementById("number").value);
//     let res=fetch(`http://numbersapi.com/${ip}/${type}`)
//     // res.then((data)=>data.json()).then((data1)=>
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.text();
//     })
//     .then(data => {

//             // Get the target HTML element
//             const targetElement = document.getElementById("math");

//             // Append the fact to the element's content
//             targetElement.innerHTML += data + "<br>";




//         // Handle the data here, for example, you can log it
//         // const op2=document.getElementById("math");
//         // op2.innerHTML+=data + "<br>";

//         // const op1=document.getElementById("year");
//         // op1.innerHTML=data;

//         // const date=document.getElementById("date");
//         // date.innerHTML=data;

//         // const trivia=document.getElementById("trivia");
//         // trivia.innerHTML=data;
//         console.log(data);
//     })        .catch(error => {
//         // Handle errors, e.g., network errors or parsing errors
//         console.error('Error:', error);
//     });



// }
// // foo("math","output");
// // foo("year","output");
// // foo("date");
// // foo("trivia");

// const btn=document.getElementById("button");
// btn.addEventListener("click",() => {
//     // Call the fetchFact function for each type
//     foo("math", "math");
//     foo("year", "year");
//     foo("date", "date");
//     foo("trivia", "trivia");});




