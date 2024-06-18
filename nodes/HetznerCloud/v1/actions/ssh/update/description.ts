import type { sshProperties } from '../../Interfaces';
export const updateDescription: sshProperties = [
	{
		displayName: 'Id',
		name: 'id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['ssh'],
				operation: ['update'],
			},
		},
		default: '',
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
				resource: ['ssh'],
				operation: ['update'],
			},
		},
		default: null,
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['ssh'],
				operation: ['update'],
			},
		},
		default: '',
	},
];
