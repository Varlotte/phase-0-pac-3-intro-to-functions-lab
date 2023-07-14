function shout(string){
    return string.toUpperCase();
}

function logShout (shout) {
    console.log(`${shout}`.toUpperCase()); 
}

function whisper(string){
    return string.toLowerCase();
}

function logWhisper (whisper){
    console.log(`${whisper}`.toLocaleLowerCase());
}

function sayHiToHeadphonedRoommate (string){  
    switch (string) {
      case string.toUpperCase(): return "YES INDEED!";
      case string.toLowerCase(): return "I can\'t hear you!";
      case "Let\'s have dinner together!": return "I would love to!";
        break;
      default:
        return null;
    }
  
}