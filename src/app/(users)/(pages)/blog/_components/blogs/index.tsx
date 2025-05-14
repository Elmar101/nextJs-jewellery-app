import { IPosts } from '@/app/(users)/api/blog/types';
import React from 'react'

const getPosts = async (): Promise<IPosts[]> => {
    const response = await fetch('http://localhost:3000/api/blog');
    const posts: IPosts[] = await response.json();
    return posts;
}

const BlogList = async() => {
     const posts: IPosts[] = await getPosts();
       
  return (
    <div className="container mx-auto py-8">
    <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default BlogList
