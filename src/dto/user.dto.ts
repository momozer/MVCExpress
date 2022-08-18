export class Userdto {

    private name: string;
    private username: string;
    private street: string;
    private suite: number;
    private city: string;
    private email: string;


    constructor(name: string, username: string, street: string, suite: number, city: string, email: string) {

            this.name = name,
            this.username = username,
            this.email = email,
            this.street = street,
            this.suite = suite,
            this.city = city
        
    }
}