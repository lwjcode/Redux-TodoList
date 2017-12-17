import React, { Component } from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BasicLayout from '../layouts';
import store from '../redux/configureStore';

class RouterApp extends Component {
	render () {
		return (
			<Provider store={store}>
				<Router>
					<Route path="/" component={BasicLayout} />
				</Router>
			</Provider>
		);
	}
}

export default RouterApp; 