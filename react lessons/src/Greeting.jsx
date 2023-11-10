// function List(props) {
// 	if (!props.animals) {
// 		return <div>Loading...</div>;
// 	}

// 	if (props.animals.length === 0) {
// 		return <div>There are no animals in the list!</div>;
// 	}

// 	return (
// 		<ul>
// 			{props.animals.map((animal) => {
// 				return <li key={animal}>{animal}</li>;
// 			})}
// 		</ul>
// 	);
// }

// function App() {
// 	const animals = [];

// 	return (
// 		<div>
// 			<h1>Animals: </h1>
// 			<List animals={animals} />
// 		</div>
// 	);
// }
import { v4 as uuidv4 } from "uuid";

const todos = [
	{ task: "mow the yard", id: uuidv4() },
	{ task: "Work on Odin Projects", id: uuidv4() },
	{ task: "feed the cat", id: uuidv4() },
];

function TodoList() {
	return (
		<ul>
			{todos.map((todo) => (
				// here we are using the already generated id as the key.
				<li key={todo.id}>
					{todo.task} {todo.id}
				</li>
			))}
		</ul>
	);
}

function Greeting() {
	return (
		<>
			<TodoList />
		</>
	);
}

export default Greeting;
