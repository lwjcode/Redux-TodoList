import { combineReducers } from 'redux';
import userReducer from '../component/User/indexRedux';
import noticeReducer from '../component/Notice/indexRedux';
import todoListReducer from '../views/TodoList/indexRedux';
import taskReducer from '../views/Detail/indexRedux';

export default combineReducers({
	userData: userReducer,
	noticeListData: noticeReducer, 
	taskListData: todoListReducer,
	taskData: taskReducer,
});
