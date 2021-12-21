import React from "react";
import PostList from "./postList";
import Post from "./post";
import { useParams } from 'react-router-dom'
//import query from 'query-string';
//import _ from 'lodash'

const Posts = () => {
	const params=useParams()
	const posts = [
		{ id: 1, label: "post 1" },
		{ id: 2, label: "post 2" },
		{ id: 3, label: "post 3" },
		{ id: 4, label: "post 4" },
		{ id: 5, label: "post 5" },
	];

	//const search = query.parse(location.search)
	const {postId} = params;
	//const cropPost = search ?_(posts).slice(0).take(search.count).value():posts

	return postId ? (
		<Post id={postId} posts={posts} />
	) : (
		<PostList posts={posts} />
	);
};

export default Posts;
