import type { networkProperties } from '../../Interfaces';

export const updateDescription: networkProperties = [
	{
		displayName: 'Id',
		name: 'id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'ID Of the Network to update',
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
				resource: ['network'],
				operation: ['update'],
			},
		},
		default: null,
	},
	{
		displayName: 'Expose Routes to Vswitch',
		name: 'expose_routes_to_vswitch',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['update'],
			},
		},
		default: false,
		description: 'Toggle to expose routes to the networks vSwitch.',
	},
];
