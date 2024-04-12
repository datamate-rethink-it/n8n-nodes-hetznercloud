import type { sshProperties } from '../../Interfaces';

export const listDescription: sshProperties = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
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
				displayName: 'Fingerprint',
				name: 'fingerprint',
				type: 'string',
				placeholder: '',
				required: false,
				default: '',
				description:
					'Can be used to filter SSH keys by their fingerprint. The response will only contain the SSH key matching the specified fingerprint.',
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
				resource: ['ssh'],
				operation: ['list'],
			},
		},
	},
];
