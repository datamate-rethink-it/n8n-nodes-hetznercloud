import * as list from './list';
import * as create from './create';

import type { INodeProperties } from 'n8n-workflow';

export { list, create };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['network'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'Gets all existing networks that you have available.',
				action: 'Get all Networks',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Creates a new Network',
				action: 'Create a new Network',
			},
		],
		default: 'list',
	},
	...list.description,
	...create.description,
];
