import * as list from './list';
import * as get from './get';
import * as metrics from './metrics';
import * as create from './create';

import type { INodeProperties } from 'n8n-workflow';

export { list, get, metrics, create };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['server'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'Get all servers from this project',
				action: 'List all server',
			},
			{
				name: 'Get Server',
				value: 'get',
				description: 'Get Server Information with Server ID in this Project',
				action: 'Get Server Information',
			},
			{
				name: 'Get Server Metrics',
				value: 'metrics',
				description: 'Get Server Metrics (cpu,disk,io ...) with Server ID in this Project',
				action: 'Get Server Metrics',
			},
			{
				name: 'Create A server',
				value: 'create',
				description: 'Creates A new Server with the specified configurations',
				action: 'Create new Server with a config',
			},
		],
		default: 'list',
	},
	...list.description,
	...get.description,
	...metrics.description,
	...create.description,
];
