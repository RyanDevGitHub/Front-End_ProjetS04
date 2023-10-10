export class client {
    lastName: string;
    firstName: string;
    tel: string;
    address: string;
    email: string;
    birthday: string;
    passportNumber: string;

    constructor(
        lastName: string,
        firstName: string,
        tel: string,
        address: string,
        email: string,
        birthday: string,
        passportNumber: string,
    ) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.tel = tel;
        this.address = address;
        this.email = email;
        this.birthday = birthday;
        this.passportNumber = passportNumber;
    }
}