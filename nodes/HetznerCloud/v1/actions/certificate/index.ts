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
		],
		default: 'list',
	},
	...list.description,
];
