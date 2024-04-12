import type { FirewallProperties } from '../../Interfaces';

export const createDescription: FirewallProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['firewall'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the firewall',
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
				resource: ['firewall'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'User-defined labels (key-value pairs)',
	},
	{
		displayName: 'Rules',
		name: 'rules',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'rulesValues',
				displayName: 'Rules',
				values: [
					{
						displayName: 'Protocol',
						required: true,
						name: 'protocol',
						type: 'options',
						options: [
							{
								name: 'tcp',
								value: 'tcp',
							},
							{
								name: 'udp',
								value: 'udp',
							},
							{
								name: 'icmp',
								value: 'icmp',
							},
							{
								name: 'esp',
								value: 'esp',
							},
							{
								name: 'gre',
								value: 'gre',
							},
						],
						default: 'Type of traffic to allow.',
					},
					{
						displayName: 'Direction',
						required: true,
						name: 'direction',
						type: 'options',
						options: [
							{
								name: 'in',
								value: 'in',
							},
							{
								name: 'out',
								value: 'out',
							},
						],
						default: '',
						description:
							'Select traffic direction on which rule should be applied. Use `source_ips` for direction `in` and `destination_ips` for direction `out`.',
					},
					{
						displayName: 'Destination IPs',
						name: 'destination_ips',
						type: 'string',
						typeOptions: {
							multipleValues: true,
						},
						required: true,
						default: [],
						description:
							'List of permitted IPv4/IPv6 addresses in CIDR notation. Use 0.0.0.0/0 to allow all IPv4 addresses and ::/0 to allow all IPv6 addresses. You can specify 100 CIDRs at most.',
						displayOptions: {
							show: {
								direction: ['out'],
							},
						},
						placeholder: '0.0.0.0/0 or ::/0',
					},
					{
						displayName: 'Source IPs',
						name: 'source_ips',
						type: 'string',
						typeOptions: {
							multipleValues: true,
						},
						required: true,
						default: [],
						description:
							'List of permitted IPv4/IPv6 addresses in CIDR notation. Use 0.0.0.0/0 to allow all IPv4 addresses and ::/0 to allow all IPv6 addresses. You can specify 100 CIDRs at most.',
						displayOptions: {
							show: {
								direction: ['in'],
							},
						},
						placeholder: '0.0.0.0/0  or ::/0',
					},
					{
						displayName: 'Port',
						required: false,
						name: 'port',
						type: 'string',
						default: '',
						description:
							'Port or port range to which traffic will be allowed, only applicable for protocols TCP and UDP. A port range can be specified by separating two ports with a dash, e.g 1024-5000.',
					},
					{
						displayName: 'Description',
						required: false,
						name: 'description',
						type: 'string',
						default: '',
						placeholder: 'Description of the Rule (optional).',
					},
				],
			},
		],
		required: false,
		displayOptions: {
			show: {
				resource: ['firewall'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Array of firewall rules',
	},
	/*
    {
		displayName: 'Server',
		name: 'id',
		type: 'options',
		placeholder: 'Select a server',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getServers',
		},
		displayOptions: {
			show: {
				resource: ['firewall'],
				operation: ['create'],
			},
		},
		default: '',
		description: '...',
	},
	
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		options: [
			{
				name: 'snapshot',
				value: 'snapshot',
			},
			{
				name: 'backup',
				value: 'backup',
			},
		],
		required: false,
		displayOptions: {
			show: {
				resource: ['firewall'],
				operation: ['create'],
			},
		},
		default: 'snapshot',
		description: 'Type of Image to create.',
	},*/
];
