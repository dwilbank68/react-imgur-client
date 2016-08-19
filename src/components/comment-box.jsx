var React = require('react');
//var Reflux = require('reflux');
//var ImageStore = require('../stores/image-store');
//var CommentStore = require('../stores/comment-store');
//var Actions = require('../actions');
//var CommentBox = require('./comment-box');
//var ReactRouter = require('react-router');
//var Link = ReactRouter.Link;

module.exports = React.createClass({

    //mixins: [
    //    Reflux.listenTo(ImageStore, 'onChange'),
    //    Reflux.listenTo(CommentStore, 'onChange')
    //],
    //
    //componentWillMount(){
    //    Actions.getImage(this.props.params.id);
    //},
    //
    //
    //getInitialState(){
    //  return {
    //      image:null,
    //        comment:null
    //  }
    //},
    //
    //onChange(){
    //    this.setState({
    //        image: ImageStore.find(this.props.params.id),
    //        comments: CommentStore.comment
    //    })
    //},

    render(){
        return(
            <ul className="list-group">
                {this.renderComments()}
            </ul>
        )
    },

    renderComments(){
        console.log('render comments in comment-box called');
        return this.props.comments
                            .slice(0,20)
                            .map(function(comment){
                                return (
                                    <li key={comment.id}
                                        className="list-group-item comment-box">
                                        <span className="badge"> {comment.ups} </span>
                                        <h5>{comment.author}</h5>
                                        {comment.comment }
                                    </li>
                                )
                            })

    },

    //renderContent(){
    //    return (
    //        <div>
    //            <div className="panel panel-default">
    //                <div className="panel-heading">
    //                    <h4>{this.state.image.title}</h4>
    //                </div>
    //                <div className="panel-body">
    //                    {this.renderImage()}
    //                </div>
    //                <div className="panel-footer">
    //                    <h5>{this.state.image.description}</h5>
    //                </div>
    //            </div>
    //            <h3>Comments</h3>
    //            {this.renderComments()}
    //        </div>
    //    )
    //},
    //
    //renderImage(){
    //    if(this.state.image.animated){
    //        return (
    //            <video  preload="auto"
    //                    autoPlay="autoplay"
    //                    loop="loop"
    //                    webkit-playsinline >
    //                <source src={this.state.image.mp4} />
    //
    //            </video>
    //        )
    //    } else {
    //        return <img src={this.state.image.link}/>
    //    }
    //}
});