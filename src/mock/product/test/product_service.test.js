const ProductService = require("../product_service_no_di");
const StubProductClient = require("./stub_product_client");
describe("", () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });
  it("should filter out only available products", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: "😈", available: true }]);
  });
});
