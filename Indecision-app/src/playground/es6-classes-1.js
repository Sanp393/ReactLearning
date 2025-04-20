// Setup constructor to take name and age (default to 0).
// getDescription - Sanp494 us 26 year(s) old.
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;  
    }
}

class Student extends Person {
    constructor(name, age, studies = 'none.'){
        super(name, age);
        this.studies = studies;
    }

    hasMajor(){
        return !!this.studies;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description = description + `Their major is ${this.studies}`;
        }

        return description;
    }
}

const me = new Student('Sanp393', 26, 'Laboratory degree');
console.log(me.getDescription());
console.log(me.hasMajor());