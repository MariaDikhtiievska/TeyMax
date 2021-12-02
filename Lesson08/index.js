class Worker{
    constructor(_first, _last, _rate,_hours, _overtime) {
        this.f_name = _first;
        this.l_name = _last;
        this.rate = _rate;
        this.hours = _hours;
        this.overtime = _overtime;
    }
    get fullName(){
        return this.f_name + " " + this.l_name;
    }

    get salary(){
        return this.rate*this.hours
    }
}


class SoftwareEngineer extends Worker{
    constructor(_first, _last, _rate,_hours, _overtime,_position,_role,_skills) {
        super(_first, _last, _rate,_hours, _overtime);
        this.position = _position;
        this.role = _role;
        this.skills = _skills;
    }

    get bonusCoefficient(){
        return (this.position === 'Junior' ? 1.2 : this.position === 'Middle' ? 1.5 : this.position ==='Senior' ? 1.8 : 1) +
        (this.role === 'Backend' ? 0.2 :this.role === 'Frontend' ? 0.3 :this.role === 'Fullstack' ? 0.4 : 0)
    }

    get bonus(){
        return this.overtime * (this.rate * 2) * this.bonusCoefficient
    }

    get fullSalary(){
        return this.salary + this.bonus
    }

    getFullInfo(){
        console.log(this.f_name);
        console.log(this.l_name);
        console.log(this.position);
        console.log(this.role);
        console.log(this.hours);
        console.log(this.overtime);
        console.log(this.skills);
        
    }
}
let fn = prompt("Your first name");
let ln = prompt("Your last name");
let rate = prompt("Your rate");
let hours = prompt("How many hours do you work?");
let overt = prompt("How many hours do you work overtime?");
let position = prompt("What is your position?");
let role = prompt("What is your role")
let user = new SoftwareEngineer(fn,ln,rate,hours,overt,position,role)
console.log(user.fullName)
console.log(user.bonusCoefficient)
console.log(user.fullSalary)
user.getFullInfo()