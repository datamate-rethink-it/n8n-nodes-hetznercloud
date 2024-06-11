import type { networkProperties } from '../../Interfaces';

export const removeDescription: networkProperties = [
	{
		displayName: 'Id',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		description: 'ID of the Network, that should be removed',
	},
];
