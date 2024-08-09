import { fibonacci } from "../../src/features/fib/index";
import { OutOfRangeError, TooLargeError } from "../../src/libs/errors";

describe("fibonacci", () => {
    test("最初の要素は1", () => {
        expect(fibonacci(1)).toBe(1n);
    });
    test("2番目の要素は1", () => {
        expect(fibonacci(2)).toBe(1n);
    });
    test("3番目の要素は2", () => {
        expect(fibonacci(3)).toBe(2n);
    });
    test("4番目の要素は3", () => {
        expect(fibonacci(4)).toBe(3n);
    });
    test("5番目の要素は5", () => {
        expect(fibonacci(5)).toBe(5n);
    });
    test("6番目の要素は8", () => {
        expect(fibonacci(6)).toBe(8n);
    });
    test("7番目の要素は13", () => {
        expect(fibonacci(7)).toBe(13n);
    });
    test("8番目の要素は21", () => {
        expect(fibonacci(8)).toBe(21n);
    });
    test("9番目の要素は34", () => {
        expect(fibonacci(9)).toBe(34n);
    });
    test("10番目の要素は55", () => {
        expect(fibonacci(10)).toBe(55n);
    });
    test("11番目の要素は89", () => {
        expect(fibonacci(11)).toBe(89n);
    });
    test("99番目の要素", () => {
        expect(fibonacci(99)).toBe(218922995834555169026n);
    });
    test("500番目の要素", () => {
        expect(fibonacci(500)).toBe(139423224561697880139724382870407283950070256587697307264108962948325571622863290691557658876222521294125n);
    });
    test("入力0はエラー", () => {
        expect(() => fibonacci(0)).toThrow(OutOfRangeError);
    });
    test("入力-1はエラー", () => {
        expect(() => fibonacci(-1)).toThrow(OutOfRangeError);
    });
    test("入力-100はエラー", () => {
        expect(() => fibonacci(-100)).toThrow(OutOfRangeError);
    });
    test("入力501は大きすぎる", () => {
        expect(() => fibonacci(501)).toThrow(TooLargeError);
    });
    test("入力15425は大きすぎる", () => {
        expect(() => fibonacci(15425)).toThrow(TooLargeError);
    });
});