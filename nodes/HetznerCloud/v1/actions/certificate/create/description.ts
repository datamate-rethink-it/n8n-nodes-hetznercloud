import type { CertificateProperties } from '../../Interfaces';

export const createDescription: CertificateProperties = [
	{
		displayName: 'Certificate',
		name: 'certificate',
		type: 'string',
		placeholder: '',
		required: false,
		default: '',
		description: 'Gets Certificate Information with Id',
		displayOptions: {
			show: {
				resource: ['certificate'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		placeholder: '',
		required: true,
		default: '',
		description: 'Name of the Certificate',
		displayOptions: {
			show: {
				resource: ['certificate'],
				operation: ['create'],
			},
		},
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
				resource: ['certificate'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'User-defined labels (key-value pairs)',
	},
	{
		displayName: 'Domain Names',
		name: 'domain_names',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		placeholder: '',
		required: false,
		default: '',
		description: 'List of Domains for the Certificate',
		displayOptions: {
			show: {
				resource: ['certificate'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'domainValues',
				displayName: 'Domain',
				values: [
					{
						displayName: 'Domain',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Domain to add.',
					},
				],
			},
		],
	},
	{
		displayName: 'Private Key',
		name: 'private_key',
		type: 'string',
		placeholder: '',
		required: false,
		default: '',
		description: 'Private Key to set for this certificate',
		displayOptions: {
			show: {
				resource: ['certificate'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		placeholder: '',
		required: false,
		default: '',
		description: 'Type of this certificate, allowed "uploaded" or "managed"',
		displayOptions: {
			show: {
				resource: ['certificate'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Cert Type',
				name: 'uploaded',
				type: 'string',
				default: '',
				description: 'Set Cert type to uploaded',
				value: 'uploaded',
			},
			{
				displayName: 'Cert Type',
				name: 'managed',
				type: 'string',
				default: '',
				description: 'Set Cert type to managed',
				value: 'managed',
			},
		],
	},
];
