import type { volumeProperties } from '../../Interfaces';

export const createDescription: volumeProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		description: 'Name of the volume',
		displayOptions: {
			show: {
				resource: ['volume'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Auto-Mount',
		name: 'automount',
		type: 'boolean',
		required: false,
		default: false,
		description: 'Auto-mount Volume after attach. server must be provided.',
		displayOptions: {
			show: {
				resource: ['volume'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		required: false,
		default: 'xfs',
		description: 'Format Volume after creation. One of: xfs , ext4',
		options: [
			{
				displayName: 'Format',
				name: 'xfs',
				type: 'string',
				default: 'xfs',
				description: 'xfs Format for the Volume',
				value: 'xfs',
			},
			{
				displayName: 'Format',
				name: 'ext4',
				type: 'string',
				default: 'ext4',
				description: 'ext4 Format for the Volume',
				value: 'ext4',
			},
		],
		displayOptions: {
			show: {
				resource: ['volume'],
				operation: ['create'],
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
				resource: ['volume'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'User-defined labels (key-value pairs)',
	},
	{
		displayName: 'Location',
		name: 'location',
		type: 'string',
		required: false,
		default: null,
		description: 'Location to create the Volume in (can be omitted if Server is specified)',
		displayOptions: {
			show: {
				resource: ['volume'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Server',
		name: 'server',
		type: 'number',
		required: false,
		default: null,
		description:
			"Server to which to attach the Volume once it's created (Volume will be created in the same Location as the server)",
		displayOptions: {
			show: {
				resource: ['volume'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Size',
		name: 'size',
		type: 'number',
		required: true,
		default: 12,
		description: 'Size of the Volume in GB',
		displayOptions: {
			show: {
				resource: ['volume'],
				operation: ['create'],
			},
		},
	},
];
