import React, { Component } from 'react';
import { Comment, Loader } from 'semantic-ui-react';

class Comments extends Component {
    state = {
        comments: [],
        isCommentNotFetching: true,
        isFetching: false,
    }

    componentDidMount = () => {
        this.fetchCommentsData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.postId !== this.props.postId && this.props.postId !== null) {
            this.fetchCommentsData();
        }
    }

    fetchCommentsData() {
        const { postId } = this.props;
            if (!postId) return;
            this.setState({ isFetching: true });
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(response => response.json())
                .then(comments => this.setState({ comments, })) //isFetching: false 
                .catch(err => this.setState({ isFetching: false }));
    }

  
    render() {
        const { comments, isFetching } = this.state;

        return (
            <>
                <Loader active={isFetching}>Loading</Loader>
                <Comment.Group>
                    <h3>Comments:</h3>
                    {
                        comments.map(comment => (
                            <Comment key={comment.id}>
                                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
                                <Comment.Content>
                                    <Comment.Author>{comment.name}</Comment.Author>
                                        <Comment.Metadata>
                                            <div>{comment.email}</div>
                                        </Comment.Metadata>
                                        <Comment.Text>
                                            {comment.body}
                                        </Comment.Text>
                                </Comment.Content>
                            </Comment>
                        ))
                    }
                </Comment.Group>
            </>
        )
    }
}

export default Comments;
