const Calculator = require("../calculator");

// describe은 관련있는 테스트를 그룹으로 만드는것
describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  // it 은 calculator를 가르킴 test라고 해도됨
  it("init with 0", () => {
    expect(cal.value).toBe(0);
  });
  // ***  const cal = new Calculator(); 선언을 테스트마다 해야함 각각 독립적이여야 함 ***
  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });
  // 중복의 코드를 써야할때는 beforeEach() 를 쓰면됨
  // ** beforeEach(), afterEach()
  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  describe("divides", () => {
    it("0/0===NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1/0=== Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("4/4=== 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
