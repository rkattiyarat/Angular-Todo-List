export class Todo {
    public id: number;
    public name: string;
    public status: string;


    constructor(public id: number, public name: string, public status: string) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}