const blood = (donor, receiver) => {

    if (donor.toUpperCase() === "A-" && receiver.toUpperCase() === "A+" || "A-" || "AB+" || "AB-") {
      console.log("blood type is compatible");
    } else if (donor.toUpperCase() === "A+" && receiver.toUpperCase() === "A+" || "AB+") {
      console.log("blood type is compatible");
  
    } else if (donor.toUpperCase() === "B-" && receiver.toUpperCase() === "B+" || "B-" || "AB+" || "AB-") {
      console.log("blood type is compatible");
    } else if (donor.toUpperCase() === "B+" && receiver.toUpperCase() === "B+" || "AB+") {
      console.log("blood type is compatible");
    
    } else if (donor.toUpperCase() === "AB-" && receiver.toUpperCase() === "AB+" || "AB-") {
        console.log("blood type is compatible");
    } else if (donor.toUpperCase() === "AB+" && receiver.toUpperCase() === "AB+") {
        console.log("blood type is compatible");
    
    } else if (donor.toUpperCase() === "O-" && receiver.toUpperCase() === "A+" || "A-" || "B+" || "B-" || "AB+" || "AB-" || "O+" || "O-") {
      console.log("blood type is compatible");
    } else if (donor.toUpperCase() === "O+" && receiver.toUpperCase() === "A+" || "B+" || "AB+" || "O+") {
      console.log("blood type is compatible");
      
    } else {
      console.log("blood type is incompatible");
    }
  };
  
  blood("O+","A+");
  blood("A-","B-");
  blood("A-","AB+");

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