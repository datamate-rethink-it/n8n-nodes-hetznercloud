import type { ServerActionsProperties } from '../../Interfaces';

export const imageCreateDescription: ServerActionsProperties = [
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
				resource: ['server_actions'],
				operation: ['create_image'],
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
				resource: ['server_actions'],
				operation: ['create_image'],
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
				resource: ['server_actions'],
				operation: ['create_image'],
			},
		},
		default: 'snapshot',
		description: 'Type of Image to create.',
	},
];
