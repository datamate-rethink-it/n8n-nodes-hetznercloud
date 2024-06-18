import type { sshProperties } from '../../Interfaces';

export const removeDescription: sshProperties = [
	{
		displayName: 'SSH Id',
		name: 'id',
		type: 'number',
		required: true,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['ssh'],
				operation: ['remove'],
			},
		},
		default: '',
		description: 'ID of the SSH Key to remove',
	},
];
