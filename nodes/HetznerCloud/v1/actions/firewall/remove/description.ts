import type { FirewallProperties } from '../../Interfaces';

export const removeDescription: FirewallProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['firewall'],
				operation: ['remove'],
			},
		},
		description: 'ID of the resource.',
	},
];
