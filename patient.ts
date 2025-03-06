import { Medicine } from "./medicine";
export class Patient{
    id: number; 
    name: string; 
    age: number; 
    listOfMeds: Medicine[];

    constructor(id: number, name: string, age: number){
        this.id = id; 
        this.name = name; 
        this.age = age; 
        this.listOfMeds = [];
    }
    addMedication(name: string, dose: number,unit: string){
        this.listOfMeds.push(new Medicine(name, dose, unit));
    }

    toString(){
        return `ID: ${this.id} 
                Name: ${this.name} 
                Age: ${this.age}
                Medicines: ${this.listOfMeds}
                `
    }
}