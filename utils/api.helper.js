const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com";

class ApiHelper {
  constructor(){
    this.posts = [];
  }
  async getAllPosts() {
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      return response;
    } catch (error) {
      return error.response;
    }
  }

  async createPost(postData) {
    try {
      //const response = await axios.post(`${BASE_URL}/posts`, postData);
      const newPost = { ...postData, id: this.posts.length + 1 };
      this.posts.push(newPost);
      return {status:201, data: newPost};
    } catch (error) {
      return {status: 500, data: {error: "Internal Server Error"}};
    }
  }

  async getPostById(postId) {
    try {
      // const response = await axios.get(`${BASE_URL}/posts/${postId}`);
      const post = this.posts.find((p) => p.id === postId);
      if (!post){
        return { status: 404, data: {error: "Post not found"} };
      }
      return { status: 200, data: post };
    } catch (error) {
      return { status: 500, data: {error: "Internal Server Error"} };
    }
  }

  async updatePost(postId, updatedData) {
    try {
      // const response = await axios.patch(`${BASE_URL}/posts/${postId}`, updatedData);
      const postIndex = this.posts.findIndex((p) => p.id === postId);
      if (postIndex === -1) {
        return { status: 404, data: { error: "Post not found" } };
      }
      this.posts[postIndex] = { ...this.posts[postIndex], ...updatedData };
      return { status: 200, data: this.posts[postIndex] };
    } catch (error) {
      return { status: 500, data: { error: "Internal Server Error" } };
    }
  }

  async deletePost(postId) {
    try {
      // const response = await axios.delete(`${BASE_URL}/posts/${postId}`);
      const postIndex = this.posts.findIndex((p) => p.id === postId);
      if (postIndex === -1) {
        return { status: 404, data: { error: "Post not found" } };
      }
      this.posts.splice(postIndex, 1);
      return { status: 200 };
    } catch (error) {
      return { status: 500, data: { error: "Internal Server Error" } };
    }
  }
}


module.exports = new ApiHelper();
