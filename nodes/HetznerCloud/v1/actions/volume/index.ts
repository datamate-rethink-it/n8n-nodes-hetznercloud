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
		],
		default: 'list',
	},
	...list.description,
];
