import type { FirewallProperties } from '../../Interfaces';

export const removeDescription: FirewallProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'options',
		default: '',
		required: true,
		placeholder: 'Select a firewall',
		typeOptions: {
			loadOptionsMethod: 'getFirewalls',
		},
		displayOptions: {
			show: {
				resource: ['firewall'],
				operation: ['remove'],
			},
		},
		description: 'ID of the resource',
	},
];
