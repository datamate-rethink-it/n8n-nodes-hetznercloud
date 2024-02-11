import type { loadbalancerProperties } from '../../Interfaces';

export const listDescription: loadbalancerProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['loadbalancer'],
				operation: ['list'],
			},
		},
		default: '',
		description:
			'Can be used to filter resources by their name. The response will only contain the resources matching the specified name.',
	},
];
