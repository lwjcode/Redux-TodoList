import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';


class ListItem extends Component {
	static propTypes = {
		item: PropTypes.object,
		updateTask: PropTypes.func,
		deleteTask: PropTypes.func,
	};

	constructor (props) {
		super(props);

		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	} 

	handleUpdate () {
		var status = !this.props.item.status;

		var task = {
			id: this.props.item.id,
			name: this.props.item.name,
			status: status
		};
		this.props.updateTask(task);
	}

	handleDelete () {
		this.props.deleteTask(this.props.item);
	}

	render () {
		const item = this.props.item;

		const unfinish = {
			backgroundColor: '#DFFCB5',
			color: '#2EB872',
		};

		const finish = {
			backgroundColor: '#FFFA9D',
			color: '#FF9A3C',
			textDecoration: 'line-through'
		}

		const itemStyle = item.status ? finish : unfinish;
		
		return (
			<li key={item.id} style={itemStyle}>
				<span 
					onClick={this.handleUpdate} 
					id={item.id}
					className="check-btn"
					style={{backgroundColor: item.status ? '#A1EAFB' : '#fff'}}
				></span>
				<span>
					<Link 
						to={`/detail/${item.id}`} 
						style={{color: itemStyle.color}}
					>
						{ item.name }
					</Link>
				</span>
				<span onClick={this.handleDelete} className="delete-btn">删除</span>
			</li>
		);
	}
}

export default ListItem;