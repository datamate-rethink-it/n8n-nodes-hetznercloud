import type { ServerProperties } from '../../Interfaces';

export const removeDescription: ServerProperties = [
	{
		displayName: 'Server Id',
		name: 'id',
		type: 'options',
		required: true,
		placeholder: 'Select a server',
		typeOptions: {
			loadOptionsMethod: 'getServers',
		},
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['remove'],
			},
		},
		default: '',
		description: 'The Id Of the Server in the project to delete',
	},
];
