let s = new Shape(23, 52)

class Rectangle implements Shape{
    width: number
    height: number
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    area(): number{
        return this.width * this.height;
    }
}

class Circle extends Shape implements Shape{
    radius: number;
    constructor(r: number) {
        this.radius = r;
    }
    area(): number {
        return (this.radius ** 2) * Math.PI;
    }
}

let yeah: Formula = {
    Beautiful: number = Math.E ^ (Math.sqrt(-1))
}

interface Shape{
    width: number,
    height: number,
    area(): number
}

interface Formula{
    readonly Beautiful: number;
}
