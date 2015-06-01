/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');

var Private = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Private!!!</h1>
                <h2>{this.props.email}</h2>
            </div>
        );
    }
});
 
module.exports = Private;