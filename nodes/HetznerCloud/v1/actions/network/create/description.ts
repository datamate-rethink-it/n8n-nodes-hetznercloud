import type { networkProperties } from '../../Interfaces';
export const createDescription: networkProperties = [
	{
		displayName: 'Expose Routes To VSwitch',
		name: 'expose_routes_to_vswitch',
		type: 'boolean',
		required: false,
		placeholder: 'false',
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['create'],
			},
		},
		default: false,
		description: 'Toggle to expose routes to the networks vSwitch.',
	},
	{
		displayName: 'Ip range',
		name: 'ip_range',
		type: 'string',
		required: true,
		placeholder: '10.0.0.0/16',
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['create'],
			},
		},
		default: '10.0.0.0/16',
		description: 'IP Range of this Network',
	},
	{
		displayName: 'name',
		name: 'name',
		type: 'string',
		required: true,
		placeholder: 'example Name',
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the Network',
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
				resource: ['network'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'User-defined labels (key-value pairs)',
	},
	{
		displayName: 'routes',
		name: 'routes',
		type: 'fixedCollection',
		required: false,
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'Route',
				displayName: 'route',
				values: [
					{
						displayName: 'Destination',
						name: 'destination',
						type: 'string',
						default: '',
						placeholder: '10.100.1.0/24',
						description: 'Destination IP Address',
					},
					{
						displayName: 'Gateway',
						name: 'gateway',
						type: 'string',
						default: '',
						placeholder: '10.0.1.1',
						description: 'Gateway Ip Address',
					},
				],
			},
		],
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['create'],
			},
		},
		default: null,
		description: 'preset Routes in this Network',
	},
	{
		displayName: 'Subnets',
		name: 'subnets',
		type: 'fixedCollection',
		required: false,
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'Subnet',
				displayName: 'subnet',
				values: [
					{
						displayName: 'IP Range',
						name: 'ip_range',
						type: 'string',
						default: '',
						placeholder: '10.100.1.0/24',
						description: 'IP Range of the subnet',
					},
					{
						displayName: 'Network Zone',
						name: 'network_zone',
						type: 'string',
						default: '',
						placeholder: 'eu-central',
						description: 'Network Zone of the subnet',
					},
					{
						displayName: 'Subnet Type',
						name: 'type',
						type: 'string',
						default: '',
						placeholder: 'cloud',
						description: 'Type of the subnet',
					},
					{
						displayName: 'Vswitch ID',
						name: 'vswitch_id',
						type: 'string',
						default: '',
						placeholder: '',
						description: 'Vswitch ID to which this subnet is connected',
					},
				],
			},
		],
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['network'],
				operation: ['create'],
			},
		},
		default: null,
		description: 'Subnets to be created in this network',
	},
];
