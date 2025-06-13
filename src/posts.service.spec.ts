import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const testPost = postsService.create(post);
    console.log(testPost);

    expect(testPost).toBeDefined();
    expect(testPost.id).toBe('2');
    expect(testPost.date).toBeDefined();
    expect(testPost.text).toBe(post.text);
  });

  it('should find a post', () => {
  const testPost = postsService.create(post);
  const findPost = postsService.find(testPost.id);

  expect(findPost).toEqual(testPost);
  });
});
