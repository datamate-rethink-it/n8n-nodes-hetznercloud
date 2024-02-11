import * as list from './list';
import type { INodeProperties } from 'n8n-workflow';

export { list };

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
		],
		default: 'list',
	},
	...list.description,
];
