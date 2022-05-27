function deafGrandma(){
let numberOfGoodbyes = 0

let userInput = window.prompt("HEY KID");
while ( numberOfGoodbyes < 2 ) {

   
    

    if ( userInput = "" ) {
        userInput = window.prompt("WHAT?!")
    }else if (userInput == "GOODBYE!" && numberOfGoodbyes == 0){
        userInput = window.prompt("LEAVING SO SOON?")
        numberOfGoodbyes = 1;
    }else if (userInput == "GOODBYE!" && numberOfGoodbyes == 1){
        userInput = window.prompt("LATER, SKATER!");
        numberOfGoodbyes = 2;
    }
    else if ( userinput.toUppercase() != statement ) {
        userInput = window.prompt("SPEAK UP, KID!")
    }
    else if ( userInput.toUppercase() == statement ) {
        userInput = window.prompt('NO, NOT SINCE 1946!')
    }
}
}
deafGrandma();