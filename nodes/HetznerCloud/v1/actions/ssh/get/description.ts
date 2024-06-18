import type { sshProperties } from '../../Interfaces';

export const getDescription: sshProperties = [
	{
		displayName: 'SSH Id',
		name: 'id',
		type: 'number',
		required: true,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['ssh'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'ID of the SSH Key',
	},
];
