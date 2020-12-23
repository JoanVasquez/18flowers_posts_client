import { PaginationService } from "../../services/PaginationService";
const paginationService: PaginationService = new PaginationService();

const arr: Array<number> = [];
beforeAll(() => {
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }
});

test("PostService should exist", () => {
  expect(paginationService.setPagination).toBeDefined();
});

test("Testing pagination", async () => {
  paginationService.setPagination(1, arr);
  expect(
    paginationService.setPagination(1, arr).paginatedData.length
  ).toBeLessThan(arr.length);
});
