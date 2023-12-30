export type TTodo = {
	id: string;
	description: string;
	completed: boolean;
};

let ID_NUM = 1;
export const CreateUniqueId = () => {
	return `todo-${ID_NUM++}`;
};
