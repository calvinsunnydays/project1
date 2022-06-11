export class Client {
    cid: number;
    firstName: string;
    lastName: string;
    date: string;
    description: string;

    constructor(cid: number, firstName: string, lastName: string, date: string, description: string,)
    {
        this.cid = cid,
        this.firstName = firstName,
        this.lastName = lastName,
        this.date = date,
        this.description = description
    }
}