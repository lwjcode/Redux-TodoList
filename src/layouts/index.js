import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadUser } from '../component/User/indexRedux';
import { loadNoticeList } from '../component/Notice/indexRedux';
import User from '../component/User';
import Notice from '../component/Notice';
import TodoList from '../views/TodoList';
import Detail from '../views/Detail';
import './index.css';


const { Header, Content, Footer } = Layout;

class BasicLayout extends Component {

	render () {
		return (
			<Layout>
			    <Header style={{ position: 'fixed', width: '100%', display: 'flex'}}>
			      <Link to="/home"><h1 className="logo" >todoList</h1></Link>
			      <Menu
			        theme="dark"
			        mode="horizontal"
			        style={{width: '90%'}}
			      >
			        <Menu.Item key="1" className="list-item">日志</Menu.Item>
			        <Menu.Item key="2" className="list-item">说说</Menu.Item>
			        <Menu.Item key="3" className="list-item">留言</Menu.Item>
			        <Menu.Item key="4" style={{float: 'right',}}>
				        <Menu
				        	theme="dark"
				        	mode="horizontal"
				        >
				        	<Menu.Item key="notice">
				        		<Notice {...this.props.noticeListData} 
				        			loadNoticeList={this.props.loadNoticeList} 
				        		/>
				        	</Menu.Item>
				        	<Menu.Item key="user">
				        		<User {...this.props.userData} 
				        		loadUser={this.props.loadUser} 
				        		/>
				        	</Menu.Item>	
				        </Menu>
				    </Menu.Item>
			      </Menu>
			    </Header>
			    <Content style={{ padding: '0 50px', marginTop: 64 }}>
			      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
			      	<Switch>
			      		<Route path="/home" component={TodoList} />
			      		<Route path="/detail/:id" component={Detail} />
			      		<Redirect exact from="/" to="/home" />
			      	</Switch>
			      </div>
			    </Content>
			    <Footer style={{ textAlign: 'center' }}>
			      Lucy' todoList  ©2017 Created by React
			    </Footer>
			</Layout>
		);
	}
}

export default connect( state => {
	return {
		userData: {
			loading: state.userData.loading,
			error: state.userData.error,
			user: state.userData.user,
		},
		noticeListData: {
			loading: state.noticeListData.loading,
			error: state.noticeListData.error,
			noticeList: state.noticeListData.noticeList,
		}
	};
}, dispatch => {
	return {
		loadUser: bindActionCreators(loadUser, dispatch),
		loadNoticeList: bindActionCreators(loadNoticeList, dispatch),
	}
})(BasicLayout);
