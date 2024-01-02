class Student {
    constructor (firstName, lastName, grade, tardies, scores){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.tardies = 0;
        this.scores = []
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate(){
        this.tardies += 1;
        if (this.tardies >= 3){
            return "YOU ARE EXPELLED"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScore(score){
        this.scores.push(score)
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b) {return a+b})
        return sum/this.scores.length
    }
}

let firstStudent = new Student ("Colt", "Steele", 1);
let secondStudent = new Student ("Blue", "Steele", 2);