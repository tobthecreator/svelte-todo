<script lang="ts">
	import type { TTodo } from '../lib';

	type TodoItemProps = {
		todo: TTodo;
		onToggle: (id: string) => void;
		onDelete: (id: string) => void;
	};
	export let todo: TTodo;
	export let onToggle: (id: string) => void;
	export let onDelete: (id: string) => void;
</script>

<div>
	{todo.id}-{todo.description}-{String(todo.completed)}
	<button on:click={() => onToggle(todo.id)}>Toggle</button>
	<button on:click={() => onDelete(todo.id)}>Delete</button>
</div>

<style></style>
