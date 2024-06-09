import type { volumeProperties } from '../../Interfaces';

export const removeDescription: volumeProperties = [
	{
		displayName: 'Id',
		name: 'id',
		type: 'options',
		required: false,
		default: null,
		description: 'ID of Volume to delete',
		displayOptions: {
			show: {
				resource: ['volume'],
				operation: ['remove'],
			},
		},
		typeOptions: {
			loadOptionsMethod: 'getVolumes',
		},
	},
];
