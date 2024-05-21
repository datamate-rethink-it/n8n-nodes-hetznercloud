import type { FirewallProperties } from '../../Interfaces';

export const getDescription: FirewallProperties = [
	{
		displayName: 'Id',
		name: 'id',
		type: 'number',
		placeholder: '',
		required: true,
		default: '',
		description: 'Gets Firewall Information with Id',
		displayOptions: {
			show: {
				resource: ['firewall'],
				operation: ['get'],
			},
		},
	},
];
