import type { ServerProperties } from '../../Interfaces';

export const createDescription: ServerProperties = [
	{
		displayName: 'automount',
		name: 'automount',
		type: 'boolean',
		required: false,
		placeholder: 'true',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: false,
		description: 'Auto-mount Volumes after attach',
	},
	{
		displayName: 'datacenter',
		name: 'datacenter',
		type: 'string',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: '',
		description:
			'ID or name of Datacenter to create Server in (must not be used together with location)',
	},
	{
		displayName: 'firewalls',
		name: 'firewalls',
		type: 'fixedCollection',
		required: false,
		placeholder: '',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'firewallValues',
				displayName: "List of Firewall ID's",
				values: [
					{
						displayName: 'Firewall ID',
						name: 'firewall',
						type: 'number',
						default: '',
						description: 'ID of the Firewall.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: '',
		description:
			"Firewalls which should be applied on the Server's public network interface at creation time",
	},
	{
		displayName: 'image',
		name: 'image',
		type: 'string',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'ID or name of the Image the Server is created from',
	},
	{
		displayName: 'labels',
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
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'User-defined labels ( key/value pairs) for the Resource',
	},
	{
		displayName: 'location',
		name: 'location',
		type: 'string',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: '',
		description:
			'ID or name of Location to create Server in (must not be used together with datacenter)',
	},
	{
		displayName: 'name',
		name: 'name',
		type: 'string',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: '',
		description:
			'Name of the Server to create (must be unique per Project and a valid hostname as per RFC 1123)',
	},
	{
		displayName: 'networks',
		name: 'networks',
		type: 'fixedCollection',
		required: false,
		placeholder: '',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'networkValues',
				displayName: "List of Network ID's",
				values: [
					{
						displayName: 'Network ID',
						name: 'value',
						type: 'number',
						default: '',
						description: 'ID of the Network.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: '',
		description:
			'Network IDs which should be attached to the Server private network interface at the creation time',
	},
	{
		displayName: 'placement_group',
		name: 'placement_group',
		type: 'number',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: null,
		description:
			'Network IDs which should be attached to the Server private network interface at the creation time',
	},
	{
		displayName: 'public_net',
		name: 'public_net',
		type: 'collection',
		required: false,
		placeholder: 'Select an Option',
		options: [
			{
				displayName: 'enable_ipv4',
				name: 'enable_ipv4',
				type: 'boolean',
				placeholder: '',
				required: false,
				default: true,
				description:
					'Attach an IPv4 on the public NIC. If false, no IPv4 address will be attached.',
			},
			{
				displayName: 'enable_ipv6',
				name: 'enable_ipv6',
				type: 'boolean',
				placeholder: '',
				required: false,
				default: true,
				description:
					'Attach an IPv6 on the public NIC. If false, no IPv6 address will be attached.',
			},
			{
				displayName: 'ipv4',
				name: 'ipv4',
				type: 'number',
				placeholder: '',
				required: false,
				default: true,
				description:
					'ID of the ipv4 Primary IP to use. If omitted and enable_ipv4 is true, a new ipv4 Primary IP will automatically be created.',
			},
			{
				displayName: 'ipv6',
				name: 'ipv6',
				type: 'number',
				placeholder: '',
				required: false,
				default: true,
				description:
					'ID of the ipv6 Primary IP to use. If omitted and enable_ipv6 is true, a new ipv6 Primary IP will automatically be created.',
			},
		],
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: {},
		description: 'Public Network options',
	},
	{
		displayName: 'server_type',
		name: 'server_type',
		type: 'string',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'ID or name of the Server type this Server should be created with',
	},
	{
		displayName: 'ssh_keys',
		name: 'ssh_keys',
		type: 'fixedCollection',
		required: false,
		placeholder: '',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'ssh_keysValues',
				displayName: "List of SSH Key ID's or Names",
				values: [
					{
						displayName: 'SSH ID',
						name: 'value',
						type: 'string',
						default: '',
						description: 'ID of the Network.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: '',
		description:
			'SSH key IDs ( integer ) or names ( string ) which should be injected into the Server at creation time',
	},
	{
		displayName: 'start_after_create',
		name: 'start_after_create',
		type: 'boolean',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: true,
		description:
			'This automatically triggers a Power on a Server-Server Action after the creation is finished and is returned in the next_actions response object.',
	},
	{
		displayName: 'user_data',
		name: 'user_data',
		type: 'string',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: '',
		description:
			'Cloud-Init user data to use during Server creation. This field is limited to 32KiB.',
	},
	{
		displayName: 'volumes',
		name: 'volumes',
		type: 'fixedCollection',
		required: false,
		placeholder: '',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'volumeValues',
				displayName: "List of Volume ID's",
				values: [
					{
						displayName: 'Volume ID',
						name: 'value',
						type: 'number',
						default: 0,
						description: 'ID of the Volume.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['create'],
			},
		},
		default: [],
		description:
			'Volume IDs which should be attached to the Server at the creation time. Volumes must be in the same Location.',
	},
];
