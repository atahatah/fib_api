import { OutOfRangeError } from "@/libs/errors";

export const fibonacci = (n: number): BigInt => {
    if (n < 1) throw new OutOfRangeError()
    let a = 0n, b = 1n, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};