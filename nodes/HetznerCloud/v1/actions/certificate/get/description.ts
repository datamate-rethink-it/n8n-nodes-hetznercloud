import type { CertificateProperties } from '../../Interfaces';

export const getDescription: CertificateProperties = [
	{
		displayName: 'Id',
		name: 'id',
		type: 'number',
		placeholder: '',
		required: true,
		default: '',
		description: 'Gets Certificate Information with Id',
		displayOptions: {
			show: {
				resource: ['certificate'],
				operation: ['get'],
			},
		},
	},
];
