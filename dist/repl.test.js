import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";
describe.each([
    {
        input: "  ",
        expected: [],
    },
    {
        input: "  hello  ",
        expected: ["hello"],
    },
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "  HellO  World  ",
        expected: ["hello", "world"],
    },
    {
        input: "  Charmander Bulbasaur PIKACHU  ",
        expected: ["charmander", "bulbasaur", "pikachu"],
    },
    {
        input: "Pomp pwip $%#@  ",
        expected: ["pomp", "pwip", "$%#@"],
    },
    // TODO: more test cases here
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        // TODO: call cleanInput with the input here
        const actual = cleanInput(input);
        // The `expect` and `toHaveLength` functions are from vitest
        // they will fail the test if the condition is not met
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            // likewise, the `toBe` function will fail the test if the values are not equal
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
