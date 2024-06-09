import * as list from './list';
import * as create from './create';
import * as remove from './remove';
import * as get from './get';

import type { INodeProperties } from 'n8n-workflow';
export { list, create, remove, get };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['volume'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'Gets all existing Volumes that you have available.',
				action: 'Get all Volumes',
			},
			{
				name: 'Create',
				value: 'create',
				description:
					'Creates a new Volume attached to a Server. If you want to create a Volume that is not attached to a Server, you need to provide the location key instead of server',
				action: 'Create a new Volume',
			},
			{
				name: 'Remove',
				value: 'remove',
				description: 'removes Volume by ID',
				action: 'remove Volume by ID',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'gets Volume by ID',
				action: 'get Volume by ID',
			},
		],
		default: 'list',
	},
	...list.description,
	...create.description,
	...remove.description,
	...get.description,
];
