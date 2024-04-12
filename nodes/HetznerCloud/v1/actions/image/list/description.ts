import type { ImageProperties } from '../../Interfaces';

export const imageListDescription: ImageProperties = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Image type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'system',
						value: 'system',
					},
					{
						name: 'snapshot',
						value: 'snapshot',
					},
					{
						name: 'backup',
						value: 'backup',
					},
					{
						name: 'app',
						value: 'app',
					},
				],
				placeholder: 'Select an image type',
				required: false,
				default: '',
				description: 'Can be used to filter the images by their type.',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'available',
						value: 'available',
					},
					{
						name: 'creating',
						value: 'creating',
					},
				],
				placeholder: 'Select a status',
				required: false,
				default: '',
				description: 'The response will only contain images matching the status.',
			},
			{
				displayName: 'Name',
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
				displayName: 'Bound to (Backup)',
				name: 'bound_to',
				type: 'string',
				placeholder: '',
				required: false,
				default: '',
				description: 'Server ID linked to the Image. Only available for Images of type `backup`.',
			},
			{
				displayName: 'Architecture',
				name: 'architecture',
				type: 'options',
				options: [
					{
						name: 'x86',
						value: 'x86',
					},
					{
						name: 'arm',
						value: 'arm',
					},
				],
				placeholder: '',
				required: false,
				default: '',
				description: 'Return only images with the given architecture.',
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
				resource: ['image'],
				operation: ['list'],
			},
		},
	},
];
