const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");
jest.mock("../product_client");

describe("Product Service", () => {
  const fetchItems = jest.fn(async () => [
    { item: "😈", available: true },
    { item: "🐭", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return { fetchItems };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it("should filter out only available products", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
  });
});
