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
		],
		default: 'list',
	},
	...list.description,
];
