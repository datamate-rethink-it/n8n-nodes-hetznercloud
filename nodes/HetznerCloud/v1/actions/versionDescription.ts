import type { INodeTypeDescription } from 'n8n-workflow';

import * as snapshot from './snapshot';
import * as server from './server';

export const versionDescription: INodeTypeDescription = {
	displayName: 'HetznerCloud',
	name: 'hetznercloud',
	icon: 'file:hetznercloud.svg',
	group: ['output'],
	version: 1,
	subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
	description: 'Interact with the cloud api of the german infrastructure provider Hetzner.',
	defaults: {
		name: 'Hetzner Cloud Api',
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: [
		{
			name: 'hetznercloud',
			required: true,
		},
	],
	properties: [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Snapshot',
					value: 'snapshot',
				},
				{
					name: 'Server',
					value: 'server',
				},
			],
			default: 'server',
		},
		...snapshot.descriptions,
		...server.descriptions,
	],
};
