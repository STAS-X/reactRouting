import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
	// console.log(posts, postId, props)
	return (
	<React.Fragment>
		{posts.map((post) => 
        <Link key={post.id} to={`posts/${post.id}`}>
			<h3 >{post.label}</h3>
        </Link>
		)}

	</React.Fragment>
    );
};

export default PostList;
