import type { networkProperties } from '../../Interfaces';

export const listDescription: networkProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['list'],
			},
		},
		default: '',
		description:
			'Can be used to filter networks by their name. The response will only contain the networks matching the specified name.',
	},
];
