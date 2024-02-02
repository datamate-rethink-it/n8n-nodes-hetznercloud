import type { ServerProperties } from '../../Interfaces';

export const serverListDescription: ServerProperties = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Server name',
				name: 'name',
				type: 'string',
				placeholder: '',
				required: false,
				default: '',
				description:
					'Can be used to filter resources by their name. The response will only contain the resources matching the specified name.',
			},
			{
				displayName: 'Label',
				name: 'label',
				type: 'string',
				placeholder: '',
				required: false,
				default: '',
				description:
					'Can be used to filter resources by labels. The response will only contain resources matching the label selector.',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'initializing',
						value: 'initializing',
					},
					{
						name: 'starting',
						value: 'starting',
					},
					{
						name: 'running',
						value: 'running',
					},
					{
						name: 'stopping',
						value: 'stopping',
					},
					{
						name: 'off',
						value: 'off',
					},
					{
						name: 'deleting',
						value: 'deleting',
					},
					{
						name: 'rebuilding',
						value: 'rebuilding',
					},
					{
						name: 'migrating',
						value: 'migrating',
					},
					{
						name: 'unknown',
						value: 'unknown',
					},
				],
				placeholder: 'Select a status',
				required: false,
				default: '',
				description: 'The response will only contain Server matching the status.',
			},
		],
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['list'],
			},
		},
	},
];
