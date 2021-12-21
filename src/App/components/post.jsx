import React from 'react';
import { useHistory } from 'react-router-dom';

const Post= ({id, posts}) => {
	const postId=posts.find((post)=>post.id===id)
    const history=useHistory()
    const handleSave=()=>{
        history.replace("/posts")
    }
	return (<React.Fragment>
                <h2>{postId?postId.label:`Post '${id}' not found`}</h2>
                <button onClick={()=>handleSave()}>Сохранить</button>
    </React.Fragment>)
    


};

export default Post;