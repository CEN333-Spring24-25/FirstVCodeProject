"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var patient_1 = require("./patient");
//let Something:Type = new Something(pass stuff)
var myPatient = new patient_1.Patient(784, "Mohammed Ghazal", 42);
myPatient.addMedication("Panadol", 500, "mg");
myPatient.addMedication("Concur", 5, "mg");
console.log(myPatient.toString());
//# sourceMappingURL=main.js.map