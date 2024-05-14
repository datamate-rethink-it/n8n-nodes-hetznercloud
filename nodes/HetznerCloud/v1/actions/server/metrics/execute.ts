import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function metrics(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as number;
	const metric = this.getNodeParameter('type', index) as string;
	const start = this.getNodeParameter('start_date', index) as string;
	const end = this.getNodeParameter('end_date', index) as string;
	const step = this.getNodeParameter('time_step', index) as string;
	const uri: string = `https://api.hetzner.cloud/v1/servers/` + id + `/metrics`;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: { type: metric, start: start, end: end, step: step },
		uri: uri,
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
