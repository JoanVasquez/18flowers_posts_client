import Post from "../../models/Post";
import PostService from "../../services/PostService";
const postService: PostService = new PostService();

test("PostService should exist", () => {
  expect(postService.list).toBeDefined();
  expect(postService.update).toBeDefined();
});

describe("Testing Post Service", () => {
  test("Test List Post", async () => {
    expect((await postService.list()).success).toEqual(true);
  });

  test("Testing Update Post", async () => {
    const post: Post = {
      id: 1,
      userId: 2,
      title: "test",
      body: "test",
    };
    expect((await postService.update(post)).success).toEqual(true);
  });

  test("Testing Error", (done) => {
    const post: Post = {
      id: 0,
      userId: 0,
      title: "",
      body: "",
    };
    postService.update(post).catch((ex) => {
      expect(ex.status).toEqual(500);
      done();
    });
  });
});
