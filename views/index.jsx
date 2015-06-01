/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');

var Hello = React.createClass({
    /*
        arbitrary method
    */
    rand: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },

    /*
        use these values if prop not passed in
    */
    getDefaultProps: function () {
        return {
            foo: 'hibiddy',
            rand: 27
        }
    },

    getInitialState: function () {
        return {
            txt: 'some text'
        }
    },

    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({txt: data.txt});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    update: function (e) {
        this.setState({
            txt: e.target.value 
        });
    },

    render: function () {
        return (
            <div>
                <h1>hello {this.props.name}</h1>
                <h2>{this.props.foo} : {this.props.rand} : {this.rand(4, 17)}</h2>
                <input type="text" placeholder="write something" onChange={this.update}/>
                <h3>{this.state.txt}</h3>
            </div>
        );
    }
});

var Parent = React.createClass({
    render: function () {
        return (
            <div>
                <h1>hello {this.props.name}</h1>
                <Hello foo='ba' url='http://demo2126729.mockable.io/hello' />
                <Hello foo='ba' url='http://demo2126729.mockable.io/hello' />
            </div>
        );
    }
});
 
module.exports = Parent;