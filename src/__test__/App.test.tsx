function add(first: number, second: number): number {
  return first + second;
}

describe('App', () => {
  test('should add two numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
});
