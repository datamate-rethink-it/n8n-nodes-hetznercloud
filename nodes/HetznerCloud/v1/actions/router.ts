import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

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

import { HetznerCloud } from './Interfaces';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const operationResult: INodeExecutionData[] = [];
	let responseData: IDataObject | IDataObject[] = [];

	for (let i = 0; i < items.length; i++) {
		const resource = this.getNodeParameter<HetznerCloud>('resource', i);
		const operation = this.getNodeParameter('operation', i);

		//console.log(operation);
		//console.log(resource);

		const hetzner = {
			resource,
			operation,
		} as HetznerCloud;

		try {
			if (hetzner.resource === 'image') {
				responseData = await image[hetzner.operation].execute.call(this, i);
			} else if (hetzner.resource === 'server') {
				responseData = await server[hetzner.operation].execute.call(this, i);
			} else if (hetzner.resource === 'primary_ip') {
				responseData = await primary_ip[hetzner.operation].execute.call(this, i);
			} else if (hetzner.resource === 'floating_ip') {
				responseData = await floating_ip[hetzner.operation].execute.call(this, i);
			} else if (hetzner.resource === 'firewall') {
				responseData = await firewall[hetzner.operation].execute.call(this, i);
			} else if (hetzner.resource === 'certificate') {
				responseData = await certificate[hetzner.operation].execute.call(this, i);
			} else if (hetzner.resource === 'loadbalancer') {
				responseData = await loadbalancer[hetzner.operation].execute.call(this, i);
			} else if (hetzner.resource === 'network') {
				responseData = await network[hetzner.operation].execute.call(this, i);
			} else if (hetzner.resource === 'ssh') {
				responseData = await ssh[hetzner.operation].execute.call(this, i);
			} else if (hetzner.resource === 'volume') {
				responseData = await volume[hetzner.operation].execute.call(this, i);
			} else if (hetzner.resource === 'server_actions') {
				responseData = await server_actions[hetzner.operation].execute.call(this, i);
			}

			const executionData = this.helpers.constructExecutionMetaData(
				this.helpers.returnJsonArray(responseData),
				{ itemData: { item: i } },
			);
			operationResult.push(...executionData);
		} catch (err) {
			if (this.continueOnFail()) {
				operationResult.push({ json: this.getInputData(i)[0].json, error: err });
			} else {
				if (err.context) err.context.itemIndex = i;
				throw err;
			}
		}
	}

	return [operationResult];
}
