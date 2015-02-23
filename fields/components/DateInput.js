var React = require('react');

module.exports = React.createClass({

	// set default properties
	getDefaultProps: function() {
		return {
			format: 'YYYY-MM-DD'
		};
	},
	
	getInitialState: function() {
		return {
			value: this.props.value
		};
	},
	
	componentWillReceiveProps: function(newProps) {
		this.setState({
			value: newProps.value
		});
	},
	
	handleChange: function(e) {
		this.setState({ value: e.target.value });
	},

	render: function() {
		return <input type="text" name={this.props.name} value={this.state.value} placeholder={this.props.format} onChange={this.handleChange} onBlur={this.handleBlur} autoComplete="off" className="form-control" />;
	}
	
});
