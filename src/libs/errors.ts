export class OutOfRangeError extends Error {
    number: number;
    constructor(number: number) {
        super(`The number${number} is out of range`);
        this.number = number;
    }
}

export class TooLargeError extends Error {
    number: number;
    constructor(number: number) {
        super(`The number is too large`);
        this.number = number;
    }
}
