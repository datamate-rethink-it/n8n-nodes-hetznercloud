import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const expose_routes_to_vswitch = this.getNodeParameter(
		'expose_routes_to_vswitch',
		index,
	) as object;
	const ip_range = this.getNodeParameter('ip_range', index) as object;
	const name = this.getNodeParameter('name', index) as object;
	const labels = this.getNodeParameter('labels', index) as object;
	const routes = this.getNodeParameter('routes', index) as object;
	const subnets = this.getNodeParameter('subnets', index) as object;

	const options: OptionsWithUri = {
		method: 'POST',
		qs: {},
		body: {
			expose_routes_to_vswitch: expose_routes_to_vswitch,
			ip_range: ip_range,
			labels: labels,
			routes: routes,
			subnets: subnets,
			name: name,
		},
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
