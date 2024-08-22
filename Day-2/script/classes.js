"use strict";
class Hero {
    constructor() {
        this.title = "Batman";
        this._firstName = "Bruce";
        this._lastName = "Wayne";
    }
    get firstname() {
        return this._firstName;
    }
    set firstname(nfirstname) {
        this._firstName = nfirstname;
    }
    get lastname() {
        return this._lastName;
    }
    set lastname(nlastname) {
        this._lastName = nlastname;
    }
}
Hero.version = 1001;
