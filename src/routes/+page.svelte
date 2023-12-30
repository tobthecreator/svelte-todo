<script lang="ts">
	import TodoItem from '../components/TodoItem.svelte';
	import { CreateUniqueId, type TTodo } from '../lib';

	let todos = [
		{ id: CreateUniqueId(), description: 'hi', completed: false },
		{ id: CreateUniqueId(), description: 'tyler', completed: true }
	];
	let description: string = '';
	let filter: boolean = false;
	$: filteredTodos = !filter ? todos : todos.filter((t) => !t.completed);

	const onToggle = (id: string): void => {
		const index = todos.findIndex((t) => t.id === id);
		const cpy = [...todos];
		cpy[index].completed = !cpy[index].completed;

		todos = cpy;
	};

	const onDelete = (id: string): void => {
		const index = todos.findIndex((t) => t.id === id);
		const cpy = [...todos];
		cpy.splice(index, 1);

		todos = cpy;
	};

	const addTodo = (description: string): void => {
		const cpy = [...todos];
		const newTodo: TTodo = {
			id: CreateUniqueId(),
			description,
			completed: false
		};

		cpy.push(newTodo);
		todos = cpy;
	};
</script>

<h2>Whatcha need to do my dood?</h2>
<div>
	Filter Completed:
	<input type="checkbox" bind:checked={filter} />
</div>
<div>
	<input bind:value={description} />
	<button on:click={() => addTodo(description)}>Add</button>
</div>
{#each filteredTodos as todo}
	<TodoItem {todo} {onToggle} {onDelete} />
{/each}
