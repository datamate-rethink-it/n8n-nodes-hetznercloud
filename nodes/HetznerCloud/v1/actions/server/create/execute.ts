import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const serverOptions = this.getNodeParameter('server', index) as object;

	const options: OptionsWithUri = {
		method: 'POST',
		qs: {},
		body: { serverOptions },
		uri: `https://api.hetzner.cloud/v1/servers`,
		json: true,
	};

	console.log(options);

	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'hetznercloud',
		options,
	);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
