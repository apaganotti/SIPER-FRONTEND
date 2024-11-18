export class Model<T extends Model<T>>{
    constructor(model?: T) {
        Object.assign(this, model);
    }
}