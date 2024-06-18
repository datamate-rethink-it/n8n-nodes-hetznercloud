import type { ServerActionsProperties } from '../../Interfaces';
export const changeServerTypeDescription: ServerActionsProperties = [
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
				resource: ['server_actions'],
				operation: ['change_server_type'],
			},
		},
		default: '',
		description: 'ID of the Server whose type should be changed',
	},
	{
		displayName: 'Upgrade Disk',
		name: 'upgrade_disk',
		type: 'boolean',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['server_actions'],
				operation: ['change_server_type'],
			},
		},
		default: true,
		description:
			'If false, do not upgrade the disk (this allows downgrading the Server type later)',
	},
	{
		displayName: 'Server Type',
		name: 'server_type',
		type: 'options',
		placeholder: '',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getServertypes',
		},
		displayOptions: {
			show: {
				resource: ['server_actions'],
				operation: ['change_server_type'],
			},
		},
		default: '',
		description: 'ID or name of Server type the Server should migrate to',
	},
];
