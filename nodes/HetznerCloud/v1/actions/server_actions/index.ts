import type { INodeProperties } from 'n8n-workflow';
import * as power_off from './power_off';
import * as power_on from './power_on';
import * as soft_reboot from './soft_reboot';
import * as shutdown from './shutdown';
import * as reset from './reset';

export { power_off, power_on, soft_reboot, shutdown, reset };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['server_actions'],
			},
		},
		options: [
			{
				name: 'Power Off',
				value: 'power_off',
				description: 'Powers off server with given ID',
				action: 'Power off server with given ID',
			},
			{
				name: 'Power On',
				value: 'power_on',
				description: 'Powers on server with given ID',
				action: 'Power on server with given ID',
			},
			{
				name: 'Soft Reboot',
				value: 'soft_reboot',
				description: 'Reboots a Server with ID',
				action: 'Reboot Server with ID',
			},
			{
				name: 'Shutdown',
				value: 'shutdown',
				description: 'Shutdown a Server with ID',
				action: 'Shutdown Server with ID',
			},
			{
				name: 'Reset',
				value: 'reset',
				description: 'Reset a Server with ID',
				action: 'Reset Server with ID',
			},
		],
		default: 'power_off',
	},
	...power_off.description,
	...power_on.description,
	...soft_reboot.description,
	...shutdown.description,
	...reset.description,
];
