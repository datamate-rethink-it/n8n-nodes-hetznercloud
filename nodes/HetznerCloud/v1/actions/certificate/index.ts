import * as list from './list';
import * as get from './get';
import * as create from './create';

import type { INodeProperties } from 'n8n-workflow';

export { list, get, create };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['certificate'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'Returns all Certificate objects.',
				action: 'Get all Certificates',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Returns a Certificate object',
				action: 'Return a Certificate by ID',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Creates a new Certificate',
				action: 'Create a new Certificate',
			},
		],
		default: 'list',
	},
	...list.description,
	...get.description,
	...create.description,
];
