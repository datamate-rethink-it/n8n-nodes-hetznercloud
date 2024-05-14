import type { ServerProperties } from '../../Interfaces';

export const listDescription: ServerProperties = [
	{
		displayName: 'Get Server',
		name: 'get',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Server Id',
				name: 'id',
				type: 'number',
				placeholder: '',
				required: false,
				default: '',
				description: 'Returns a specific Server object. The Server must exist inside the Project',
			},
		],
	},
];
