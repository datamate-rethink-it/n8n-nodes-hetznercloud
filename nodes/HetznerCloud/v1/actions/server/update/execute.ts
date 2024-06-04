import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { createDynamicObject } from '../../../Utils';

export async function update(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', index) as number;
	const name = this.getNodeParameter('name', index) as string;
	const labels = this.getNodeParameter('labels', index) as any;

	const uri: string = `https://api.hetzner.cloud/v1/servers/` + id;

	const options: OptionsWithUri = {
		method: 'PUT',
		qs: {},
		body: {},
		uri: uri,
		json: true,
	};
	if (labels.labelsValues !== undefined && labels.labelValues.length > 0) {
		const label_object = createDynamicObject(labels.labelsValues);
		options.body.labels = label_object;
	}

	if (name !== '') {
		options.body.name = name;
	}

	const responseData = await this.helpers.requestWithAuthentication.call(
		this,
		'hetznercloud',
		options,
	);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
