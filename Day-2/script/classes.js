"use strict";
// class Hero{
//     public title:string="Batman";
//     private _firstName:string="Bruce";
//     private _lastName:string="Wayne";
//     static version:number= 1001;
//     constructor(ntitle:string,nfirstname:string,nlastname:string){
//         this.title=ntitle;
//         this._firstName = nfirstname;
//         this._lastName = nlastname
// }
//     get firstname(){
//         return this._firstName;
//     }
//     set firstname(nfirstname:string){
//         this._firstName=nfirstname;
//     }
//     get lastname(){
//         return this._lastName;
//     }
//     set lastname(nlastname:string){
//         this._lastName = nlastname;
//     }
// }
// let hero = new Hero("spiderman","peter","parker");
// console.log(hero.title);
// console.log(hero.firstname);
class Person {
    constructor(canwalk) {
        this.canwalk = canwalk;
    }
}
class Hero extends Person {
    constructor(title, _firstname, _lastname, ncw) {
        super(ncw);
        this.title = title;
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    fullname() {
        return this._firstname + " " + this._lastname;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(nfirstname) {
        this._firstname = nfirstname;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(nlastname) {
        this._lastname = nlastname;
    }
}
Hero.version = 1001;
let hero = new Hero("spiderman", "peter", "parker", "I can fly");
console.log(hero.title);
console.log(hero.firstname);
console.log(hero.canwalk);
