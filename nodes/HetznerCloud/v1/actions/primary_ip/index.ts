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
				resource: ['primary_ip'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'Returns all Primary IP objects.',
				action: 'Get all Primary IPs',
			},
		],
		default: 'list',
	},
	...list.description,
];
