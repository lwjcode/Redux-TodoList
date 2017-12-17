import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

class User extends Component {

	static propTypes = {
		loadUser: PropTypes.func,
		user: PropTypes.object,
	};
	
	componentDidMount () {
		this.props.loadUser();
	}

	render () {
		const userName = this.props.user.name ? this.props.user.name : '未登录';
		return (
			<div className="user">
				<div>
				<Link to="/user">
					{this.props.user.icon ? 
						<Avatar size="large" src={`/images/${this.props.user.icon}`} /> 
						: 
						<Avatar size="large" icon="user" />	
					}
				</Link>
				</div>
				<div>
				<Link to="/user" className="user-name">{userName}</Link>
				</div>
			</div>
		);
	}
}

export default User;