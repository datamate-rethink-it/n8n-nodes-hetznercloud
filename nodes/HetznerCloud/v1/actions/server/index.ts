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
				description: 'Returns all existing Server objects.',
				action: 'Get all Servers',
			},
			{
				name: 'Create',
				value: 'create',
				description:
					'Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of creation.',
				action: 'Create a Server',
			},
			{
				name: 'Delete',
				value: 'remove',
				description:
					'Deletes a Server. This immediately removes the Server from your account, and it is no longer accessible. Any resources attached to the server (like Volumes, Primary IPs, Floating IPs, Firewalls, Placement Groups) are detached while the server is deleted.',
				action: 'Delete a Server',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Returns a specific Server object. The Server must exist inside the Project.',
				action: 'Get a Server',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Updates a Server. You can update a Server’s name and a Server’s labels.',
				action: 'Update a Server',
			},
			{
				name: 'Get Metrics',
				value: 'metrics',
				description:
					'Get Metrics for specified Server. You must specify the type of metric to get: cpu, disk or network. You can also specify more than one type by comma separation, e.g. cpu,disk.',
				action: 'Get Metrics for a Server',
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
