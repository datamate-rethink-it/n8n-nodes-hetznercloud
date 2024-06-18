import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const certificate = this.getNodeParameter('certificate', index) as object;
	const name = this.getNodeParameter('name', index) as object;
	const domain_names = this.getNodeParameter('domain_names', index) as object;
	const private_key = this.getNodeParameter('private_key', index) as object;
	const type = this.getNodeParameter('type', index) as object;

	const options: OptionsWithUri = {
		method: 'POST',
		qs: {},
		body: {
			certificate: certificate,
			name: name,
			domain_names: domain_names,
			private_key: private_key,
			type: type,
		},
		uri: 'https://api.hetzner.cloud/v1/certificates/',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'hetznercloud',
		options,
	);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
