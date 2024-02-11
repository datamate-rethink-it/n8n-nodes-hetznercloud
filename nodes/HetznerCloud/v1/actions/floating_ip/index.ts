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
				resource: ['floating_ip'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'Returns all Floating IP objects.',
				action: 'Get all Floating IPs',
			},
		],
		default: 'list',
	},
	...list.description,
];
