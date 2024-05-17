import * as list from './list';
import * as get from './get';
import * as metrics from './metrics';
import * as remove from './remove'; // delete is a reserved keyword ...
import * as create from './create';
import * as update from './update';
import type { INodeProperties } from 'n8n-workflow';

export { list, get, metrics, remove, create, update };

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
				name: 'Create Server',
				value: 'create',
				description: 'Creates a new Server',
				action: 'Create a new Server',
			},
			{
				name: 'Delete Server',
				value: 'remove',
				description: 'Deletes a Server with given ID',
				action: 'Delete a Server with given ID',
			},
			{
				name: 'Update Server',
				value: 'update',
				description: 'Updates a Servers Labels and Name',
				action: 'Update a Server',
			},
		],
		default: 'list',
	},
	...list.description,
	...get.description,
	...metrics.description,
	...remove.description,
	...create.description,
	...update.description,
];
