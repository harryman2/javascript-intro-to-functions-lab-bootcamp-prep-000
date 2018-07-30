function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  
  return console.log(string.toUpperCase())
  
}

function logWhisper(string){
  
  return console.log(string.toLowerCase())
  
}

function sayHiToGrandma(string){
  if(string == "hello".toLowerCase()){
    
    return string = "I can\'t hear you!"
    
  }
  if(string == "HELLO".toUpperCase()){
    
    return string = "YES INDEED!"
    
  }
  
  if(string == "I love you, Grandma."){
    
    return string = "I Love You Too"
    
  }
  
}