var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions');
var TopicStore = require('../stores/topic-store');

module.exports = React.createClass({

    mixins: [
        Reflux.listenTo(TopicStore, 'onChange')
    ],

    componentWillMount(){
        Actions.getTopics();
    },

    getInitialState(){
        return {topics:[]}
    },

    onChange(e, topics){
        this.setState({topics: topics});
    },

    render(){
        return(
            <nav className="navbar navbar-default header">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Imgur Browser
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        {this.renderTopics()}
                    </ul>
                </div>
                {this.props.children}
            </nav>
        )
    },

    renderTopics(){
        return this.state.topics
                            .slice(0,4)
                            .map(function(topic){
                                return (
                                    <li key={topic.id}>
                                        <Link   to={"topics/"+topic.id}
                                                activeClassName="active">
                                            {topic.name}
                                        </Link>
                                    </li>
                                )
                            })
    }
});