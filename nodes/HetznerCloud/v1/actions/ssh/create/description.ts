import type { sshProperties } from '../../Interfaces';

export const createDescription: sshProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		placeholder: 'Just a Key',
		displayOptions: {
			show: {
				resource: ['ssh'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the SSH key',
	},
	{
		displayName: 'Public Key',
		name: 'public_key',
		type: 'string',
		required: true,
		placeholder: 'ssh-rsa AAAjjk76kgf...Xt',
		displayOptions: {
			show: {
				resource: ['ssh'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Public Key',
	},
	{
		displayName: 'Labels',
		name: 'labels',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'labelsValues',
				displayName: 'Labels',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						description: 'Name of the label to add.',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Value of the label to add.',
					},
				],
			},
		],
		required: false,
		displayOptions: {
			show: {
				resource: ['ssh'],
				operation: ['create'],
			},
		},
		default: null,
	},
];
