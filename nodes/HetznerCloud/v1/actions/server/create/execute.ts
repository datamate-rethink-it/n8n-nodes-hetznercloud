import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

// takes in an array of {key:string,value:any} objects
// mainly for creating the
function createDynamicObject(objects: { key: string; value: any }[]): { [key: string]: any } {
	const dynamicObject: { [key: string]: any } = {};
	for (const e of objects) {
		dynamicObject[e.key] = e.value;
	}
	return dynamicObject;
}

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const uri: string = `https://api.hetzner.cloud/v1/servers/`;
	const automount = this.getNodeParameter('automount', index) as boolean;
	const datacenter = this.getNodeParameter('datacenter', index) as string;
	const firewalls = this.getNodeParameter('firewalls', index) as any;
	const image = this.getNodeParameter('image', index) as string;
	const location = this.getNodeParameter('location', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const networks = this.getNodeParameter('networks', index) as any;
	const placement_group = this.getNodeParameter('placement_group', index) as number;
	const public_net = this.getNodeParameter('public_net', index) as object;
	const server_type = this.getNodeParameter('server_type', index) as string;
	const ssh_keys = this.getNodeParameter('ssh_keys', index) as any;
	const start_after_create = this.getNodeParameter('start_after_create', index) as boolean;
	const user_data = this.getNodeParameter('user_data', index) as string;
	const volumes = this.getNodeParameter('volumes', index) as any;
	const labels = this.getNodeParameter('labels', index, {}) as any;
	const labelValues = (labels.labelsValues as Array<any>) || [];
	let label_object = createDynamicObject(labelValues);
	let firewallValues = (firewalls.firewallValues as Array<Object>) || [];
	let networkList = new Array<number>();
	let volumeList = new Array<number>();
	if (networks.networkValues !== undefined) {
		for (const e of networks.networkValues) {
			networkList.push(e.value);
		}
	}
	console.log(ssh_keys);
	let ssh_keysList = new Array<string>();

	if (ssh_keys.ssh_keysValues !== undefined) {
		for (const e of ssh_keys.ssh_keysValues) {
			ssh_keysList.push(e.value);
		}
	}
	if (volumes.volumeValues !== undefined) {
		for (const e of volumes.volumeValues) {
			console.log(e);
			volumeList.push(e.value);
		}
	}

	const options: OptionsWithUri = {
		method: 'POST',
		qs: {},
		uri: uri,
		body: {
			automount: automount,
			image: image,
			name: name,
			public_net: public_net,
			server_type: server_type,
			start_after_create: start_after_create,
		},
		json: true,
	};
	if (placement_group !== null) {
		options.body.placement_group = placement_group;
	}
	if (datacenter !== '') {
		options.body.datacenter = datacenter;
	}
	if (location !== '') {
		options.body.location = location;
	}
	if (user_data !== '') {
		options.body.user_data = user_data;
	}
	if (Object.keys(label_object).length > 0) {
		options.body.labels = label_object;
	}
	if (firewallValues.length !== undefined && firewallValues.length > 0) {
		options.body.firewalls = firewallValues;
	}
	if (ssh_keysList.length !== undefined && ssh_keysList.length > 0) {
		options.body.ssh_keys = ssh_keysList;
	}
	if (volumeList.length !== undefined && volumeList.length > 0) {
		options.body.volumes = volumeList;
	}
	console.log(options);
	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'hetznercloud',
		options,
	);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
