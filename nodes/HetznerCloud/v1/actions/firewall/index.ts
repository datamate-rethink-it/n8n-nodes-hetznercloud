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
		],
		default: 'list',
	},
	...list.description,
];
