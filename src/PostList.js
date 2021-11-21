import React from 'react';
import Post from './Post';

function PostList({tweets, buscar})
{
    return(
        <div className="container">
            <div className="row">
                {
                    tweets.filter(tweet => tweet.text.includes(buscar)).map( (tweet, index) => 
                        (
                            <div className="col-md-12 col-lg-3 mb-4 mt-4">
                                <Post
                                    key={tweet.id}
                                    autor={tweet.author.username} 
                                    imagen={tweet.image}
                                    mensaje={tweet.text}
                                    comentarios={tweet.comments}
                                    fecha={tweet.createdAt}
                                    like={tweet.likes}
                                />
                            </div>
                        )
                    )
                };
            </div>
        </div>
    );
}

export default PostList;