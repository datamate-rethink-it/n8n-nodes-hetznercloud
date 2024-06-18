import type { networkProperties } from '../../Interfaces';

export const getDescription: networkProperties = [
	{
		displayName: 'Id',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		description: 'ID of the Network',
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['get'],
			},
		},
	},
];
