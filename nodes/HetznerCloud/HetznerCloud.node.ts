import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { HetznerCloudV1 } from './v1/HetznerCloudV1.node';

export class HetznerCloud extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'HetznerCloud',
			name: 'hetznercloud',
			icon: 'file:hetznercloud.svg',
			group: ['output'],
			subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
			description: 'Interact with the cloud api of the german infrastructure provider Hetzner.',
			defaultVersion: 1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new HetznerCloudV1(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
