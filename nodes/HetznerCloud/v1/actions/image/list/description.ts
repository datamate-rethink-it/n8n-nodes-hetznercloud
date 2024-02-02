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
		],
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['list'],
			},
		},
	},
];
