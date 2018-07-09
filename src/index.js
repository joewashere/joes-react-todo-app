import React from "react";
import ReactDOM from "react-dom";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

ReactDOM.render(
	<div class="row">
	<div class="col-12">
		<TodoList/>
	</div>
	</div>,

	destination

);