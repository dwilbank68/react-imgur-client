var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');
var ImagePreview = require('./image-preview');
//var ReactRouter = require('react-router');
//var Link = ReactRouter.Link;

module.exports = React.createClass({

    mixins: [
        Reflux.listenTo(ImageStore, 'onChange')
    ],

    componentWillMount(){
        Actions.getImages(this.props.params.id);
    },

    componentWillReceiveProps(nextProps){
        Actions.getImages(nextProps.params.id);
    },

    getInitialState(){
      return {images:[]}
    },

    onChange( event, images){
        this.setState({images: images});
    },

    render(){
        return(
            <div className="topic">
                {this.renderImages()}
            </div>
        )
    },

    renderImages(){
        return this.state.images
                            .slice(1,20)
                            .map(function(image){
                                return (
                                    <ImagePreview   key={image.id}
                                                    {...image}
                                                    className="list-group-item" />
                                )
                            })
    }
});