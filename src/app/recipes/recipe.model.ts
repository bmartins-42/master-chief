export class Recipe {
    public name: string;
    public imageUrl: string;
    public description: string;

    constructor(name: string, description: string, imageUrl: string) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
    }
}