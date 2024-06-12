import type { INodeTypeDescription } from 'n8n-workflow';

import * as image from './image';
import * as server from './server';
import * as primary_ip from './primary_ip';
import * as floating_ip from './floating_ip';
import * as firewall from './firewall';
import * as certificate from './certificate';
import * as loadbalancer from './loadbalancer';
import * as network from './network';
import * as ssh from './ssh';
import * as volume from './volume';
import * as server_actions from './server_actions';

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
					name: 'Image',
					value: 'image',
				},
				{
					name: 'Server',
					value: 'server',
				},
				{
					name: 'Server Action',
					value: 'server_actions',
				},
				{
					name: 'Primary IP',
					value: 'primary_ip',
				},
				{
					name: 'Floating IP',
					value: 'floating_ip',
				},
				{
					name: 'Firewall',
					value: 'firewall',
				},
				{
					name: 'Certificate',
					value: 'certificate',
				},
				{
					name: 'Load Balancer',
					value: 'loadbalancer',
				},
				{
					name: 'Network',
					value: 'network',
				},
				{
					name: 'SSH Keys',
					value: 'ssh',
				},
				{
					name: 'Volume',
					value: 'volume',
				},
			],
			default: 'server',
		},
		...image.descriptions,
		...server.descriptions,
		...primary_ip.descriptions,
		...floating_ip.descriptions,
		...firewall.descriptions,
		...certificate.descriptions,
		...loadbalancer.descriptions,
		...network.descriptions,
		...ssh.descriptions,
		...volume.descriptions,
		...server_actions.descriptions,
	],
};
