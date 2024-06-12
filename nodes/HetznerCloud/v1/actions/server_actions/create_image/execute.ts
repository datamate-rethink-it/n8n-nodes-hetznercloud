import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function create_image(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as object;
	const description = this.getNodeParameter('description', index) as object;
	const type = this.getNodeParameter('type', index) as object;

	const options: OptionsWithUri = {
		method: 'POST',
		qs: {
			description: description,
			type: type,
		},
		uri: 'https://api.hetzner.cloud/v1/servers/' + id + '/actions/create_image',
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
