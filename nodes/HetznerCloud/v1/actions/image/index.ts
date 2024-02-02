import * as create from './create';
import * as list from './list';
import type { INodeProperties } from 'n8n-workflow';

export { create, list };

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
				name: 'Create',
				value: 'create',
				description: 'Create a new image',
				action: 'Create an image',
			},
			{
				name: 'List',
				value: 'list',
				description: 'Get all images, snapshots, backups, ...',
				action: 'Get all images',
			},
		],
		default: 'create',
	},
	...create.description,
	...list.description,
];
