import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';

Meteor.startup(() => {
    // //ES6 - class
    // class Person {
    //     constructor(name = 'Anonymouse', personAge=0) {
    //         this.name = name;
    //         this.age = personAge;
    //     }

    //     GetGreeting() {
    //         // --- we can use symbol `...` to use follow syntax! ---
    //         return `Hi! I am ${this.name}.`;
    //     }
    //     GetPersonDescription() {
    //         return `${this.name} is ${this.age} year(s) old.`;
    //     }
    // }

    // class Programmer extends Person {
    //     constructor(name, age, language='newbie') {
    //         super(name, age);
    //         this.language = language;
    //     }

    //     hasLanguage() {
    //         return !!this.title;
    //     }
    //     GetGreeting() {
    //         if(this.language) {
    //             return `Hi! I am ${this.name}. I am ${this.language} developer.`;
    //         }
    //     }
    // }
    
    // let me = new Programmer('Nutthakorn', 25, 'Mobile application');
    // let someone = new Programmer('Sompong', 19);
    // console.log(me.GetGreeting());
    // console.log(someone.GetGreeting());

    
});