const { test, expect } = require('@playwright/test');
const apiHelper = require('../../utils/api.helper');

test.describe('JSONPlaceholder API Tests', () => {
  let initialPostCount;
  let createdPostData;

  test('@api Read Total Number of Posts', async () => {
    const response = await apiHelper.getAllPosts();
    expect(response.status).toBe(200);
    initialPostCount = response.data.length;
    
  });

  test('@api Create a New Post and Store its Data', async () => {
    const newPost = {
      title: 'Software QA Engineer',
      body: 'I am an engineer, and I love to test software',
      userId: 1,
    };
    const response = await apiHelper.createPost(newPost);
    expect(response.status).toBe(201);
    createdPostData = response.data; // Store the response data for future use
    
  });

  test('@api Get Only the Created Post by ID', async () => {
    const response = await apiHelper.getPostById(createdPostData.id); 
    expect(response.status).toBe(200);
    const post = response.data;
    expect(post.id).toBe(createdPostData.id);
    expect(post.title).toBe(createdPostData.title);
    expect(post.body).toBe(createdPostData.body); 
  });

  test('@api Replace Some Field in the Created Post with PATCH', async () => {
    const updatedPost = {
      title: 'Updated Software QA Engineer',
    };
    const response = await apiHelper.updatePost(createdPostData.id, updatedPost);
    expect(response.status).toBe(200);
    const updatedResponse = await apiHelper.getPostById(createdPostData.id);
    expect(updatedResponse.status).toBe(200);
    const post = updatedResponse.data;
    expect(post.title).toBe(updatedPost.title);
  });


  test('@api Delete the Created Post by ID', async () => {
    const response = await apiHelper.deletePost(createdPostData.id); 
    expect(response.status).toBe(200);
    const deletedResponse = await apiHelper.getPostById(createdPostData.id);
    expect(deletedResponse.status).toBe(404);
  });

  test('@api Check the Number of Posts to Ensure Integrity', async () => {
    const response = await apiHelper.getAllPosts();
    expect(response.status).toBe(200);
    const currentPostCount = response.data.length;
    expect(currentPostCount).toBe(initialPostCount);
  });
});
