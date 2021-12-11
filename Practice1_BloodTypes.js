//Creating function blood and assigning 2 parameters: donor and receiver
const blood = (donor, receiver) => {

    switch (true) {
      case donor == "A-" && receiver == "A+":
      case donor == "A-" && receiver == "A-":
      case donor == "A-" && receiver == "AB+":
      case donor == "A-" && receiver == "AB-":
        console.log("blood type is compatible for transfusion");
        break;
      
      case donor == "A+" && receiver == "A+":
      case donor == "A+" && receiver == "AB+":
        console.log("blood type is compatible for transfusion");
        break;
        
      case donor == "B-" && receiver == "B+":
      case donor == "B-" && receiver == "B-":
      case donor == "B-" && receiver == "AB+":
      case donor == "B-" && receiver == "AB-":
        console.log("blood type is compatible for transfusion");
        break;
        
      case donor == "B+" && receiver == "B+":
      case donor == "B+" && receiver == "AB+":
        console.log("blood type is compatible for transfusion");
        break;
      
      case donor == "O+" && receiver == "A+":
      case donor == "O+" && receiver == "B+":
      case donor == "O+" && receiver == "AB+":
      case donor == "O+" && receiver == "O+":
        console.log("blood type is compatible for transfusion");
        break;
      
      case donor == "O-":
        console.log("blood type is compatible for transfusion");
        break;
      
      case donor == "AB-" && receiver == "AB+":
      case donor == "AB-" && receiver == "AB-":
      case donor == "AB+" && receiver == "AB+":
        console.log("blood type is compatible for transfusion");
        break;
        
      default:
      console.log("blood type is incompatible, please refrain from transfusion");
    }
  };
  
  blood("O+","A+");
  blood("A-","B-");
  blood("A-","AB+");