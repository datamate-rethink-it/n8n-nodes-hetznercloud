import * as list from './list';
import * as create from './create';
import * as remove from './remove';
import * as get from './get';
import * as update from './update';

import type { INodeProperties } from 'n8n-workflow';

export { list, create, remove, get, update };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['firewall'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'Returns all Firewall objects.',
				action: 'Get all Firewalls',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Creates a new Firewall.',
				action: 'Create a Firewall',
			},
			{
				name: 'Delete',
				value: 'remove',
				description: 'Deletes a Firewall.',
				action: 'Delete a Firewall',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Gets a Firewall.',
				action: 'Get a Firewall',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Updates a Firewall.',
				action: 'Update a Firewall',
			},
		],
		default: 'list',
	},
	...list.description,
	...create.description,
	...remove.description,
	...get.description,
	...update.description,
];
