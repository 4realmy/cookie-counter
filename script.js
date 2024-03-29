let Count=document.getElementById("count");
let Message=document.getElementById("message");
let cookieCount=0;

console.log(Message)
console.log(cookieCount)


function increment(){
console.log("the more button was clicked")
cookieCount++;
Count.innerText=cookieCount;
console.log(cookieCount)
messageUpdate()
}

function decrement(){
console.log("the less button was clicked")
cookieCount--;
Count.innerText=cookieCount;
console.log(cookieCount)
messageUpdate()
}


//Amy, for the love of all sweet thing fix this function and use "if" instead.
function messageUpdate(){
    switch (cookieCount) {
        case 0:
            Message.innerText="The bitter taste of missed opportunities.";
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            Message.innerText="Enjoy every bite!";
          break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            Message.innerText="Treat yourself!";
          break;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            Message.innerText="Delicious abundance!";
          break;
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            Message.innerText="A baker's bounty!";
          break;
        default:
            Message.innerText="aight that's a lot";
      }
}

