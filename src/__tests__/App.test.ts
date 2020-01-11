import { App } from "../App";

test('adds two numbers returning the correct value', () =>
{
    expect(App.addTwoNumbers(2, 3)).toBe(5);
});