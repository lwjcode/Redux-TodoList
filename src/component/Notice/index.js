import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Badge, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

class User extends Component {

	static propTypes = {
		noticeList: PropTypes.arrayOf(PropTypes.object),
		loadNoticeList: PropTypes.func,
	}
	
	componentDidMount () {
		this.props.loadNoticeList();
	}

	render () {

		const num = this.props.noticeList.length > 0 ? this.props.noticeList.length : 0;

		return (
			<div className="notice">
				<Badge count={num}>
			      <Link to="/user"><Icon type="bell" /></Link>
			    </Badge>
			</div>
		);
	}
}

export default User;