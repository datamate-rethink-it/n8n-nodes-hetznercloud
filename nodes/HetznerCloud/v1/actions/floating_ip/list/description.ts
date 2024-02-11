import type { FloatingIPProperties } from '../../Interfaces';

export const listDescription: FloatingIPProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['floating_ip'],
				operation: ['list'],
			},
		},
		default: '',
		description:
			'Can be used to filter Floating IPs by their name. The response will only contain the Floating IP matching the specified name.',
	},
];
