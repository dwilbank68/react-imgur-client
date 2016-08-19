var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-list');

module.exports = React.createClass({

    content(){
        if(this.props.children){
            return this.props.children;
        } else {
            return <TopicList/>
        }
    },

    render(){
        return(
            <div>
                <Header/>
                {this.content()}
            </div>
        )
    }
});