import type { sshProperties } from '../../Interfaces';

export const listDescription: sshProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['ssh'],
				operation: ['list'],
			},
		},
		default: '',
		description:
			'Can be used to filter resources by their name. The response will only contain the resources matching the specified name.',
	},
];
