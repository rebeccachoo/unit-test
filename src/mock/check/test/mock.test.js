const mock = jest.fn();

describe("", () => {
  it("", () => {
    mock.mockImplementation((name) => `I am ${name}!`);
    // console.log(mock("Dale")); // I am Dale!
  });

  test("mock Test", () => {
    const mockFn = jest.fn();
    mockFn.mockImplementation((name) => `I am ${name}`);

    mockFn("a");
    mockFn(["b", "c"]);

    expect(mockFn).toBeCalledTimes(2); // 몇번 호출? -> 2번
    expect(mockFn).toBeCalledWith("a"); // a로 호출? -> true
    expect(mockFn).toBeCalledWith(["b", "c"]); // 배열로 호출? -> true
  });
});
