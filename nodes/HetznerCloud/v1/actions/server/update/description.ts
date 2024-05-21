import type { ServerProperties } from '../../Interfaces';

export const updateDescription: ServerProperties = [
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
				operation: ['update'],
			},
		},
		default: '',
		description: 'The Id Of the Server to update',
	},
	{
		displayName: 'labels',
		name: 'labels',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'labelsValues',
				displayName: 'Labels',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						description: 'Name of the label to add.',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Value of the label to add.',
					},
				],
			},
		],
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'User-defined labels ( key/value pairs) for the Resource',
	},
	{
		displayName: 'name',
		name: 'name',
		type: 'string',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'New Name of the Server',
	},
];
