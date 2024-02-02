import type { ImageProperties } from '../../Interfaces';

export const imageCreateDescription: ImageProperties = [
	{
		displayName: 'Server',
		name: 'id',
		type: 'options',
		placeholder: 'Select a server',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getServers',
		},
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['create'],
			},
		},
		default: '',
		description: '...',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Description of the image, will be auto-generated if not set',
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		options: [
			{
				name: 'snapshot',
				value: 'snapshot',
			},
			{
				name: 'backup',
				value: 'backup',
			},
		],
		required: false,
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['create'],
			},
		},
		default: 'snapshot',
		description: 'Type of Image to create.',
	},
];
