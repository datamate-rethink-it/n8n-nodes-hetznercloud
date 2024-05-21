import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function shutdown(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as object;

	const options: OptionsWithUri = {
		method: 'POST',
		uri: `https://api.hetzner.cloud/v1/servers/` + id + '/actions/shutdown',
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
