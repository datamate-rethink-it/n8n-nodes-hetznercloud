import type { ServerProperties } from '../../Interfaces';

export const listDescription: ServerProperties = [
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
				name: 'label_selector',
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
			{
				displayName: 'Sort by',
				name: 'sort',
				type: 'options',
				options: [
					{
						name: 'id (asc)',
						value: 'id:asc',
					},
					{
						name: 'id (desc)',
						value: 'id:desc',
					},
					{
						name: 'name (asc)',
						value: 'name:asc',
					},
					{
						name: 'name (desc)',
						value: 'name:desc',
					},
					{
						name: 'created (asc)',
						value: 'created:asc',
					},
					{
						name: 'created (desc)',
						value: 'created:desc',
					},
				],
				default: '',
				required: false,
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				required: false,
				default: '1',
				typeOptions: {
					minValue: 1,
					numberStepSize: 1,
					numberPrecision: 0,
				},
				description: 'Page to load.',
			},
			{
				displayName: 'Per Page',
				name: 'per_page',
				type: 'number',
				required: false,
				default: '25',
				typeOptions: {
					minValue: 1,
					numberStepSize: 1,
					numberPrecision: 0,
				},
				description: 'Items to load per page.',
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
