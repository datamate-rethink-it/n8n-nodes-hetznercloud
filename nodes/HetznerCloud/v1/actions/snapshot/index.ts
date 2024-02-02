import * as create from './create';
import * as list from './list';
import type { INodeProperties } from 'n8n-workflow';

export { create, list };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['snapshot'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new row',
				action: 'Create a row',
			},
			{
				name: 'List',
				value: 'list',
				description: 'Get many rows from a table of view',
				action: 'Get many rows',
			},
		],
		default: 'create',
	},
	...create.description,
	...list.description,
];
