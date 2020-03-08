import React from 'react';
import {fetchPostsAndUsers} from '../actions';
import {connect} from 'react-redux'
import UserHeader from '../components/UserHeader';
class PostList extends React.Component{
    componentDidMount(){
  
    this.props.fetchPostsAndUsers()
   
    }
    renderList(){
        return this.props.posts.map((post)=>{
            return(
                <div className="item" key ={post.id}>
                    <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <div id={post.userId}><UserHeader userId={post.userId}></UserHeader></div>

                </div>
            )
        })
    }
    render(){
        
        return (
            <div className="ui relaxed divided list">
            {this.renderList()}
            </div>
        )
    }
}
const mapStateToProps =(state)=>{

    return {posts:state.posts}
}
export default connect(
    mapStateToProps,
    {fetchPostsAndUsers}
)(PostList)