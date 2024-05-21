import type { ServerActionsProperties } from '../../Interfaces';

export const power_onDescription: ServerActionsProperties = [
	{
		displayName: 'server id',
		name: 'id',
		type: 'options',
		required: true,
		placeholder: 'Select a server',
		typeOptions: {
			loadOptionsMethod: 'getServers',
		},
		displayOptions: {
			show: {
				resource: ['server_actions'],
				operation: ['power_on'],
			},
		},
		default: '',
		description: 'ID of Server to soft reboot',
	},
];
