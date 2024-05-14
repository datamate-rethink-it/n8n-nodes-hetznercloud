import type { FirewallProperties } from '../../Interfaces';

export const updateDescription: FirewallProperties = [
	{
		displayName: 'Firewall Id',
		name: 'id',
		type: 'number',
		placeholder: 'Select a Firewall',
		required: true,
		displayOptions: {
			show: {
				resource: ['firewall'],
				operation: ['update'],
			},
		},
		default: '',
		description: '...',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		placeholder: '',
		required: false,
		default: '',
		description: 'New Firewall Name',
		displayOptions: {
			show: {
				resource: ['firewall'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Labels',
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
		displayOptions: {
			show: {
				resource: ['firewall'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'User-defined labels (key-value pairs)',
	},
];
