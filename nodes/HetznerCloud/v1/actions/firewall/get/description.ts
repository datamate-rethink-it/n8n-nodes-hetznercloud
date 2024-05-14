import type { FirewallProperties } from '../../Interfaces';

export const getDescription: FirewallProperties = [
	{
		displayName: 'Id',
		name: 'id',
		type: 'number',
		placeholder: '',
		required: true,
		default: '',
		description: 'Gets Server Information with Id',
		displayOptions: {
			show: {
				resource: ['firewall'],
				operation: ['get'],
			},
		},
	},
];
