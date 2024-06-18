import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function changeServerType(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as object;
	const server_type = this.getNodeParameter('upgrade_disk', index) as object;
	const upgrade_disk = this.getNodeParameter('server_type', index) as boolean;

	const options: OptionsWithUri = {
		method: 'POST',
		qs: {},
		body: {
			server_type: server_type,
			upgrade_disk: upgrade_disk,
		},
		uri: 'https://api.hetzner.cloud/v1/servers/' + id + '/actions/change_type',
		json: true,
	};

	// console.log(options);

	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'hetznercloud',
		options,
	);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
