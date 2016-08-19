var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

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

    onChange( event, topics){
        this.setState({topics: topics});
    },

    render(){
        return(
            <div className="list-group">
                {this.renderTopics()}
            </div>
        )
    },

    renderTopics(){
        return this.state.topics
                        .slice(0,4)
                        .map(function(topic){
                            return (
                                <Link   to={'topics/' + topic.id}
                                        className="list-group-item"
                                        key={topic.id} >
                                    <h4>{topic.name}</h4>
                                    <p>{topic.description}</p>
                                </Link>
                            )
                        })
    }
});