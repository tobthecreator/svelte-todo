<script lang="ts">
	import { updated } from '$app/stores';
	import TodoItem from '../components/TodoItem.svelte';

	let ID_NUM = 1;
	const createUniqueId = () => {
		return `todo-${ID_NUM++}`;
	};

	let todos = [
		{ id: createUniqueId(), description: 'hi', completed: false },
		{ id: createUniqueId(), description: 'tyler', completed: true }
	];

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
</script>

<!-- 
<h2>Whatcha need to do my dood?</h2>
<div>
	Filter Completed:
	<input type="checkbox" checked={filter()} onChange={(e) => setFilter(() => e.target.checked)} />
</div>
<div>
	<input value={description()} onChange={(e) => setDescription(() => e.target.value)} />
	<button onClick={() => addTodo(description())}>Add</button>
</div> -->
{#each todos as todo}
	<TodoItem {todo} {onToggle} {onDelete} />
{/each}
