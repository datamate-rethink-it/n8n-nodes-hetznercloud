import type { ImageProperties } from '../../Interfaces';

export const removeDescription: ImageProperties = [
	{
		displayName: 'Image Id',
		name: 'id',
		type: 'number',
		required: true,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['remove'],
			},
		},
		default: '',
		description: 'ID of Image',
	},
];
