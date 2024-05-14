import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function update(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as object;
	const labels = this.getNodeParameter('labels', index) as object;
	const name = this.getNodeParameter('name', index) as string;

	const options: OptionsWithUri = {
		method: 'PUT',
		qs: {},
		body: { labels: labels, name: name },
		uri: 'https://api.hetzner.cloud/v1/firewalls/' + id,
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'hetznercloud',
		options,
	);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
