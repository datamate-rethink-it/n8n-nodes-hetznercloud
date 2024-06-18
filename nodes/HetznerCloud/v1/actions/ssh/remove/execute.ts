import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function remove(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as object;
	const options: OptionsWithUri = {
		method: 'DELETE',
		qs: {},
		uri: 'https://api.hetzner.cloud/v1/ssh_keys/' + id,
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'hetznercloud',
		options,
	);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
