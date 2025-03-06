"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medicine = void 0;
var Medicine = /** @class */ (function () {
    function Medicine(name, dose, unit) {
        this.name = name;
        this.dose = dose;
        this.unit = unit;
    }
    Medicine.prototype.toString = function () {
        return "Name: ".concat(this.name, " Dose: ").concat(this.dose, " Unit: ").concat(this.unit);
    };
    return Medicine;
}());
exports.Medicine = Medicine;
//# sourceMappingURL=medicine.js.map