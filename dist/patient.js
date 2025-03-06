"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
var medicine_1 = require("./medicine");
var Patient = /** @class */ (function () {
    function Patient(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.listOfMeds = [];
    }
    Patient.prototype.addMedication = function (name, dose, unit) {
        this.listOfMeds.push(new medicine_1.Medicine(name, dose, unit));
    };
    Patient.prototype.toString = function () {
        return "ID: ".concat(this.id, " \n                Name: ").concat(this.name, " \n                Age: ").concat(this.age, "\n                Medicines: ").concat(this.listOfMeds, "\n                ");
    };
    return Patient;
}());
exports.Patient = Patient;
//# sourceMappingURL=patient.js.map