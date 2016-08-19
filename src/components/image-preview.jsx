var React = require('react');
//var Reflux = require('reflux');
//var ImageStore = require('../stores/image-store');
//var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({

    //mixins: [
    //    Reflux.listenTo(ImageStore, 'onChange')
    //],
    //
    //componentWillMount(){
    //    Actions.getImages(this.props.params.id);
    //},
    //
    //componentWillReceiveProps(nextProps){
    //    Actions.getImages(nextProps.params.id);
    //},
    //
    getInitialState(){
      return {hovering: false}
    },

    handleMouseEnter(){
        this.setState({hovering:true})
    },

    handleMouseLeave(){
        this.setState({hovering:false})
    },

    icon(){
        return (
            <span className="glyphicon glyphicon-play">
            </span>
        )
    },

    image(){
        var link = "http://i.imgur.com/" +this.props.id+ "h.jpg";
        return (
            <img src={link}/>
        )
    },

    inset(){
        return (
            <div className="inset">
                Views: {this.props.views}
                <br/>
                Upvotes: {this.props.ups}
            </div>
        )
    },

    render(){
        return(
            <Link   to={"images/" +this.props.id}
                    className="image-preview "
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}>
                {this.props.animated && this.state.hovering ?
                    this.video() :
                    this.image()
                }
                {this.props.animated && !this.state.hovering ?
                    this.icon() :
                    null
                }
                {this.state.hovering ? this.inset() : null}
            </Link>
        )
    },

    video(){
        return (
            <div>
                <video  preload="auto"
                        autoPlay="autoplay"
                        loop="loop"
                        webkit-playsinline >
                    <source src={this.props.mp4}
                            type="video/mp4"/>
                </video>
            </div>
        )
    }

});