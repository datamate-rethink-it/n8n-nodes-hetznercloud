import * as list from './list';
import * as get from './get';
import type { INodeProperties } from 'n8n-workflow';

export { list, get };

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
		],
		default: 'list',
	},
	...list.description,
	...get.description,
];
