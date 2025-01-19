import {
	View,
	Text,
	StyleSheet,
	Button,
	Pressable,
	SafeAreaView,
	FlatList,
	TextInput,
	Alert
} from 'react-native';
import { React, useState } from 'react';

const TodoApp = () => {
	// Create one useState to store and set your task
	const [addTask, setNewTask] = useState([]);
	// one to edit and set the edit
	const [taskText, setTaskText] = useState('');
	// one to track whether you're in editing mode or not
	const [editingTaskId, setEditingTaskId] = useState(null);
	// one for storing errors
	const [error, setError] = useState('');

	// the reason we need one to store in array and one in string is
	// onChange text returns a string and we cant directly store in an array so we take the string check it and then push it inside our array.

	// create a function on submit. we check if it is empty or not. considering there can be n number of todo what we require is individual id
	// so what we do is create an id with date so it's individual and unique and we convert it to string as we don't want it in dateformat.
	// we then set the task. as we need to check if we have any prev task, we use spread operator to add new task and clear the task inside input

	const onSubmitTask = () => {
		if (taskText.trim() !== '') {
			const newTask = { id: Date.now().toString(), title: taskText };
			setNewTask((prevTasks) => [...prevTasks, newTask]);
			setTaskText('');
			setError('');
		} else {
			setError('Please enter a task');
		}
	};

	const onClearIt = () => {
		setNewTask([]);
	};

	const deleteIndividual = (id) => {
		const removeTask = addTask.filter((cv) => cv.id !== id);
		setNewTask(removeTask);
	};

	const editIndividual = (id) => {
		const taskToEdit = addTask.find((cv) => cv.id === id);
		if (taskToEdit) {
			setTaskText(taskToEdit.title);
			setEditingTaskId(id);
		}
	};

	const submitIndividual = () => {
		const updatedTasks = [...addTask];
		const taskIndex = updatedTasks.findIndex((task) => task.id === editingTaskId);

		if (taskIndex !== -1) {
			updatedTasks[taskIndex].title = taskText;
			setNewTask(updatedTasks);
		}

		setTaskText('');
		setEditingTaskId(null);
	};

	return (
		<SafeAreaView>
			<Text style={styles.title}>My Todo App</Text>

			<View style={styles.formContainer}>
				<Text style={styles.label}>{editingTaskId ? 'Edit Your Task' : 'Add Your Task'}</Text>
				<TextInput
					style={styles.input}
					value={taskText}
					onChangeText={setTaskText}
					autoCorrect={false}
					autoCapitalize="none"
					placeholder={editingTaskId ? 'Edit task...' : 'Enter a task'}
				/>

				{error ? <Text style={styles.errorText}>{error}</Text> : null}

				{editingTaskId ? (
					<Button title="Update Task" onPress={submitIndividual}></Button>
				) : (
					<Button title="Submit Todo" onPress={onSubmitTask}></Button>
				)}

				<Button title="Clear All Tasks" onPress={onClearIt}></Button>
				<FlatList
					data={addTask}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<View>
							<Text style={styles.title}>{item.title}</Text>
							<Button title="Delete" onPress={() => deleteIndividual(item.id)}></Button>
							<Button title="Edit" onPress={() => editIndividual(item.id)}></Button>
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

export default TodoApp;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black'
	},
	title: {
		fontSize: 26,
		fontWeight: 500,
		fontStyle: 'italic',
		textAlign: 'center'
	},
	formContainer: {
		//   flex : 1,
	},
	label: {
		fontSize: 16,
		marginBottom: 5,
		marginTop: 16,
		fontWeight: 'bold',
		color: 'black'
	},
	loginT: {
		fontSize: 52,
		color: 'white',
		marginBottom: 20,
		fontFamily: 'Lato',
		fontWeight: 400
		// textAlign: 'center'
	},
	input: {
		height: 45,
		minWidth: 300,
		margin: 12,
		// flex : 1,
		borderWidth: 1,
		borderBlockColor: 'black',
		padding: 10,
		borderRadius: 4,
		width: '100'
	},
	username: {
		color: 'white',
		fontSize: 16,
		marginBottom: 5,
		fontWeight: 'bold'
	},
	errorText: {
		fontSize: 16,
		marginBottom: 5,
		fontWeight: 'bold',
		color: 'red'
	}
});
