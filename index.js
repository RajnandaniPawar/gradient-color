// let addCardBtn = document.querySelector("#addCard");
// let todoContainer = document.querySelector("#todo");


// addCardBtn.addEventListener("click", addTask);

// function addTask() {
//     let card = document.createElement("div");
//     card.className = "card"; 
//     card.innerText = "Test Card";
//     card.setAttribute("contenteditable", "true")
//     todoContainer.append(card)
//     // pointer will be in editable zone automaicaally
//     card.focus();
    

//     // problem 1 ( empty card should automatically be removed)
//      // foucs lost => blur event
//      card.addEventListener("blur" , (eventDetails)=>{
//           let blurredCard = eventDetails.target;
//           if(blurredCard.innerText.trim() == ""){
//               blurredCard.remove();
//           }
//      } )

//     // problem 2 => make default text empty
//     card.addEventListener("click", (eventDetails)=>{
//          let clickedCard = eventDetails.target;
         
//          if(clickedCard.innerText == "Test Card"){
//                 clickedCard.innerText = "";
//          }
//     })

//     let selector = document.createElement("select") 
//     selector.innerHTML = `
//        <option value="todo1">Todo</option>
//        <option value="progress1">Progress</option>
//        <option value="done1">Done</option>
//     `
//     // let option1 = document.createElement("option");
//     // option1.value = "todo";
//     // option1.innerText = "Todo";

//     // selector.append(option1);

//     // let option2 = document.createElement("option");
//     // option2.value = "progress";
//     // option2.innerText = "Progress";

//     // selector.append(option2);


//     card.append(selector);

//     // selector will change something in dropdown => change event


//    let selectedIdMapping = {
//          todo1 : "todo",
//          progress1 : "progress",
//          done1 : "done"
//    }

//     selector.addEventListener("change" , (eventDetails)=>{
//          console.log(eventDetails.target)
//          console.log(eventDetails.target.value)
//         //   let selctedOption = eventDetails.target.value; // todo1, progress1, done1
//         //   let realid = selectedIdMapping[selctedOption]
//         //   let selectedContainer = document.querySelector(`#${realid}`);
//         //     selectedContainer.append(card);
//     })
    


// }


// // id => todo, progress, done 

// // value => todo1, progress1, done1

// let addCardBtn = document.querySelector("#addCard");
// let todoContainer = document.querySelector("#todo");


// addCardBtn.addEventListener("click", addTask);

// function addTask() {
//     let card = document.createElement("div");
//     card.className = "card"; 
//     card.innerText = "Test Card";
//     card.setAttribute("contenteditable", "true")
//     todoContainer.append(card)
//     // pointer will be in editable zone automaicaally
//     card.focus();
    

//     // problem 1 ( empty card should automatically be removed)
//      // foucs lost => blur event
//      card.addEventListener("blur" , (eventDetails)=>{
//           let blurredCard = eventDetails.target;
//           if(blurredCard.innerText.trim() == ""){
//               blurredCard.remove();
//           }
//      } )

//     // problem 2 => make default text empty
//     card.addEventListener("click", (eventDetails)=>{
//          let clickedCard = eventDetails.target;
         
//          if(clickedCard.innerText == "Test Card"){
//                 clickedCard.innerText = "";
//          }
//     })

//     let selector = document.createElement("select") 
//     selector.innerHTML = `
//        <option value="todo1">Todo</option>
//        <option value="progress1">Progress</option>
//        <option value="done1">Done</option>
//     `
//     // let option1 = document.createElement("option");
//     // option1.value = "todo";
//     // option1.innerText = "Todo";

//     // selector.append(option1);

//     // let option2 = document.createElement("option");
//     // option2.value = "progress";
//     // option2.innerText = "Progress";

//     // selector.append(option2);


//     card.append(selector);

//     // selector will change something in dropdown => change event


//    let selectedIdMapping = {
//          todo1 : "todo",
//          progress1 : "progress",
//          done1 : "done"
//    }

//     selector.addEventListener("change" , (eventDetails)=>{
//          console.log(eventDetails.target)
//          console.log(eventDetails.target.value)
//         //   let selctedOption = eventDetails.target.value; // todo1, progress1, done1
//         //   let realid = selectedIdMapping[selctedOption]
//         //   let selectedContainer = document.querySelector(`#${realid}`);
//         //     selectedContainer.append(card);
//     })
    


// }


// // id => todo, progress, done 

// // value => todo1, progress1, done1




/////////////// index js///////////


let btn1 = document.getElementById("MyBtn");
let btn2 = document.getElementById("MyBtn2");
let copydiv = document.querySelector(".copycode");
let rgb1 = "#004773";
let rgb2 = "#54d542";

// let myHexavalues = "0123456789abcdef";
const hexvalues = () => {
    let myHexavalues = "0123456789abcdef";
    let colors = "#";
    for(let i=0; i<6; i++){
        colors = colors + myHexavalues[Math.floor(Math.random() * 16)];
    }
    return colors;
};

const handleButton1 = () => {
     rgb1 = hexvalues();
    console.log(rgb1);
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copydiv.innerHTML = `backgroung-image : linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const handleButton2 = () => {
   rgb2 = hexvalues();
    console.log(rgb2);
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copydiv.innerHTML = `backgroung-image : linear-gradient(to right, ${rgb1}, ${rgb2})`;
};


btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copydiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copydiv.innerText);
});