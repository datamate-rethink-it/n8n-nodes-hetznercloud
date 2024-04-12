import * as list from './list';
import * as create from './create';
import * as remove from './remove';
import type { INodeProperties } from 'n8n-workflow';

export { list, create, remove };

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
		],
		default: 'list',
	},
	...list.description,
	...create.description,
	...remove.description,
];
