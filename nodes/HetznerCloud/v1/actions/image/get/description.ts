import type { ImageProperties } from '../../Interfaces';

export const getDescription: ImageProperties = [
	{
		displayName: 'Id',
		name: 'id',
		type: 'number',
		placeholder: '',
		required: true,
		default: '',
		description: '',
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['get'],
			},
		},
	},
];
