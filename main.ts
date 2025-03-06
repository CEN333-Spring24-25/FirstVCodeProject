import { Medicine } from "./medicine";
import { Patient } from "./patient";

let myPatient: Patient = new Patient(784, "Mohammed Ghazal", 42);

myPatient.addMedication("Panadol", 500, "mg");
myPatient.addMedication("Concur", 5, "mg");

console.log(myPatient.toString());

// Thank you so much. Please learn from this and use it to solve problems one and two. Good luck. 
