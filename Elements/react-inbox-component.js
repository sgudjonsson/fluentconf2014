/** @jsx React.DOM */

// Email Component - Handles the way a single email is displayed
var Email = React.createClass({
	render: function() {
		var clsName = "message";
		if(this.props.importance)
			clsName += " "+ this.props.importance;

		return (
			<div className={clsName}>
				<span className="from">{this.props.from}</span>
				<span className="subject">
					<span className="label">Subject: </span>
					<span className="text">{this.props.subject}</span>
				</span>
			</div>
		);
	}
});

// EmailList Component - Contains a list of emails
var EmailList = React.createClass({
	render: function() {
		var nodes = this.props.data.map(function(email) {
			return <Email key={email.id} from={email.from} subject={email.subject} importance={email.importance} />
		});
		return (
			<div>
				{nodes}
			</div>
		);
	}
});

// Inbox Component - Renders the inbox
var Inbox = React.createClass({
	getInitialState: function() {
		return { data: [] }
	},
	loadEmails: function() {
		$.ajax({
			url: this.props.url, 
			dataType: "json",
			success: function(data) {
				this.setState({data: data});
			}.bind(this)
		});
	},
	componentWillMount: function() {
		this.loadEmails();
	},
	render: function() {
		return (
			<EmailList data={this.state.data} />
		);
	}
});