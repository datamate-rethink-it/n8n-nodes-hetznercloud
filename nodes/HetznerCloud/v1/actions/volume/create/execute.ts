import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const automount = this.getNodeParameter('automount', index) as boolean;
	const format = this.getNodeParameter('format', index) as object;
	const labels = this.getNodeParameter('labels', index) as object;
	const location = this.getNodeParameter('location', index) as object;
	const server = this.getNodeParameter('server', index) as object;
	const size = this.getNodeParameter('size', index) as number;
	const name = this.getNodeParameter('name', index) as string;

	const options: OptionsWithUri = {
		method: 'POST',
		qs: {},
		body: {
			automount: automount,
			format: format,
			labels: labels,
			location: location,
			server: server,
			size: size,
			name: name,
		},
		uri: 'https://api.hetzner.cloud/v1/volumes/',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'hetznercloud',
		options,
	);
	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
