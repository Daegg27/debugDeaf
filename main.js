function deafGrandma(){
let numberOfGoodbyes = 0

let userInput = window.prompt("HEY KID");
while ( numberOfGoodbyes < 2 ) {

   
    

    if ( userInput == "" ) {
        userInput = window.prompt("WHAT?!")
        numberOfGoodbyes = 0;
    }else if (userInput == "GOODBYE!" && numberOfGoodbyes == 0){
        userInput = window.prompt("LEAVING SO SOON?")
        numberOfGoodbyes = 1;
    }else if (userInput == "GOODBYE!" && numberOfGoodbyes == 1){
        numberOfGoodbyes = 2;
        alert("LATER, SKATER!")
    }
    else if ( userInput.toUpperCase() != userInput ) {
        userInput = window.prompt("SPEAK UP, KID!")
        numberOfGoodbyes = 0;
    }
    else if ( userInput.toUpperCase() == userInput ) {
        userInput = window.prompt('NO, NOT SINCE 1946!')
        numberOfGoodbyes = 0;
    }
}
}
deafGrandma();