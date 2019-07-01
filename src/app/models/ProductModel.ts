export class ProductModel {
    name: string;
    price: number;
    available: boolean;
    dateCreated: Date;

    constructor(obj: any = null) {
        if (obj != null) {
            Object.assign(this, obj);
        }
    }
}