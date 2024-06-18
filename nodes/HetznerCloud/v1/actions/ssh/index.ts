import * as list from './list';
import * as get from './get';
import * as remove from './remove';
import * as update from './update';

import type { INodeProperties } from 'n8n-workflow';

export { list, get, remove, update };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ssh'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'Returns all SSH key objects.',
				action: 'Get all SSH keys',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Returns SSH key by ID',
				action: 'Get SSH key by ID ',
			},
			{
				name: 'Remove',
				value: 'remove',
				description: 'Removes SSH key by ID',
				action: 'Remove SSH key by ID ',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Updates SSH key by ID',
				action: 'Update SSH key by ID ',
			},
		],
		default: 'list',
	},
	...list.description,
	...get.description,
	...remove.description,
	...update.description,
];
