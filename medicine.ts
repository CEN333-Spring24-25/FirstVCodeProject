export class Medicine{
    name: string; 
    dose: number; 
    unit: string; 
    constructor(
        name: string, 
        dose: number, 
        unit: string
    ){
        this.name = name;
        this.dose = dose;
        this.unit = unit; 
    }
    toString(){ 
        return `Name: ${this.name} Dose: ${this.dose} Unit: ${this.unit}`;
    }
}