import type { ImageProperties } from '../../Interfaces';
export const updateDescription: ImageProperties = [
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
				resource: ['image'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'User-defined labels (key-value pairs)',
	},
	{
		displayName: 'Id',
		name: 'id',
		type: 'number',
		placeholder: '',
		required: true,
		default: '',
		description: '',
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		placeholder: '',
		required: false,
		default: '',
		description: 'New description of Image',
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'string',
		placeholder: '',
		required: false,
		default: '',
		description: 'Allowed: snapshot, Image type to convert to',
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['update'],
			},
		},
	},
];
