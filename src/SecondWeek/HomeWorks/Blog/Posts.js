import React, { Component, Fragment } from 'react';
import { Feed, Loader, Button } from 'semantic-ui-react';
import Comments from './Comments';

class Posts extends Component {

    state = {
        posts: [],
        isPostFetching: false,
        isComments: false,
        isSelectedPost: null,
    };

    componentDidMount() {
        this.setState({ isPostFetching: true });
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            this.setState({ posts, isPostFetching: false })
        })
    }

    handlerComments = post => {
        !this.state.isComments ? 
        this.setState({ isSelectedPost: post, isComments: true }) :
        this.setState({ isSelectedPost: null, isComments: false })
    }

  render() {
    const { posts, isSelectedPost, isPostFetching } = this.state;
    const { onPostSelect } = this.props;

    return (
      <Fragment>
        <Loader size='small' active={isPostFetching} />
        <Feed>
          {posts.map(post => (
            <Feed.Event key={post.id}>
              <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
              <Feed.Content>
                <Feed.Summary onClick={() => onPostSelect(post)}>
                  <a>{post.title}</a>
                </Feed.Summary>
                <Feed.Extra text>
                  {post.body}
                </Feed.Extra>
                <Button onClick={() => this.handlerComments(post.id)} secondary>
                    { post.id === isSelectedPost ? 'Hide Comments' : 'Show Comments'}
                </Button>
                {
                    post.id === isSelectedPost && <Comments postId={post.id}></Comments>
                }
              </Feed.Content>
            </Feed.Event>
          ))}
        </Feed>
      </Fragment>
    );
  }
}

export default Posts;