import * as create from '../server_actions/create_image';
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
				resource: ['image'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description:
					'Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.',
				action: 'Get all Images',
			},
		],
		default: 'create',
	},
	...list.description,
];
