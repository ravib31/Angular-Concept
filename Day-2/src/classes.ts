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
  constructor(public canwalk: string) {}
}
interface IHero {
  title: string;
  firstname: string;
  lastname: string;
  fullname(): string;
}

class Hero extends Person implements IHero {
  static version: number = 1001;

  constructor(
    public title: string,
    private _firstname: string,
    private _lastname: string,
    ncw: string
  ) {
    super(ncw);
  }
  fullname() {
    return this._firstname + " " + this._lastname;
  }
  get firstname() {
    return this._firstname;
  }
  set firstname(nfirstname: string) {
    this._firstname = nfirstname;
  }
  get lastname() {
    return this._lastname;
  }
  set lastname(nlastname: string) {
    this._lastname = nlastname;
  }
}

let hero = new Hero("spiderman", "peter", "parker", "I can fly");
console.log(hero.title);
console.log(hero.firstname);
console.log(hero.canwalk);
