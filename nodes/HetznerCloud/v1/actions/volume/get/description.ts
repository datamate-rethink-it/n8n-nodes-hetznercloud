import type { volumeProperties } from '../../Interfaces';

export const getDescription: volumeProperties = [
	{
		displayName: 'Id',
		name: 'id',
		type: 'options',
		required: false,
		default: null,
		description: 'ID of Volume to get',
		displayOptions: {
			show: {
				resource: ['volume'],
				operation: ['get'],
			},
		},
		typeOptions: {
			loadOptionsMethod: 'getVolumes',
		},
	},
];
