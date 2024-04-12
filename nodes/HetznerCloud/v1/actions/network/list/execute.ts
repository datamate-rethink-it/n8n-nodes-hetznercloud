import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function list(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const filters = this.getNodeParameter('filters', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: filters,
		uri: 'https://api.hetzner.cloud/v1/networks/',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'hetznercloud',
		options,
	);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
