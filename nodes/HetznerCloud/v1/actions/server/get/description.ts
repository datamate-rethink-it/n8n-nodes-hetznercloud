import type { ServerProperties } from '../../Interfaces';

export const getDescription: ServerProperties = [
	{
		displayName: 'Server Id',
		name: 'id',
		type: 'number',
		required: true,
		placeholder: '3918671',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'The Id Of the Server in the project to get',
	},
];
