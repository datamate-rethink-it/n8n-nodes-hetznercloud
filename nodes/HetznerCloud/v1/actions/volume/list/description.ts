import type { volumeProperties } from '../../Interfaces';

export const listDescription: volumeProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['volume'],
				operation: ['list'],
			},
		},
		default: '',
		description:
			'Can be used to filter resources by their name. The response will only contain the resources matching the specified name.',
	},
];
