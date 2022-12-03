const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;
  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });
  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);
    expect(onSuccess.mock.calls.length).toBe(1); // onSuccess가 한번 불렸는지 테스트
    // expect(onSuccess.mock.calls[0][0]).toBe("yes"); // onSuccess가 한번 불렸는지 테스트
    expect(onSuccess).toHaveBeenCalledWith("yes");
    expect(onFail.mock.calls.length).toBe(0); // onFail 한번 불렸는지 테스트
    expect(onFail).toHaveBeenCalledTimes(0);
  });
});
