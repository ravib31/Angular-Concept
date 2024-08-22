class Hero{
    public title:string="Batman";
    private _firstName:string="Bruce";
    private _lastName:string="Wayne";
    static version:number= 1001;

    constructor(ntitle:string,nfirstname:string,nlastname:string){
        this.title=ntitle;
        this._firstName = nfirstname;
        this._lastName = nlastname
}

    get firstname(){
        return this._firstName;
    }
    set firstname(nfirstname:string){
        this._firstName=nfirstname;
    }
    get lastname(){
        return this._lastName;
    }
    set lastname(nlastname:string){
        this._lastName = nlastname;
    }
}

let hero = new Hero("spiderman","peter","parker");
console.log(hero.title);
console.log(hero.firstname);