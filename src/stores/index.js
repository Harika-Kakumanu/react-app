import UserService from '../services/UserService/index.api';
import UserStore from './UsersStore';

import TodoNetworkStore from './TodoNetworkStore';
import TodoService from '../services/TodoService/index.api';


const userService=new UserService();
const userStore=new UserStore(userService);

const todoService=new TodoService();
const todoNetworkStore=new TodoNetworkStore(todoService);


export default {userStore,todoNetworkStore} ;