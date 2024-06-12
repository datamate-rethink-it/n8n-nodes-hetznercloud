import * as list from './list';
import * as create from './create';
import * as remove from './remove';

import type { INodeProperties } from 'n8n-workflow';

export { list, create, remove };

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
			{
				name: 'Create',
				value: 'create',
				description: 'Creates a new Network',
				action: 'Create a Network',
			},
			{
				name: 'Delete',
				value: 'remove',
				description:
					'Deletes a network. If there are Servers attached they will be detached in the background. Note: if the network object changes during the request, the response will be a conflict error.',
				action: 'Delete a Network',
			},
		],
		default: 'list',
	},
	...list.description,
	...create.description,
	...remove.description,
];
