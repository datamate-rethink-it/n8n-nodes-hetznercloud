import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';
import { rules } from '../../Interfaces';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', index) as object;
	const labels = this.getNodeParameter('labels', index) as object;
	const rules = this.getNodeParameter('rules', index) as rules;

	// DEBUG:
	console.log(rules.rulesValues);
	console.log(labels);
	console.log(name); // name...
	//const responseData = [] as IDataObject[];
	//return this.helpers.returnJsonArray(responseData);

	/*
    {
        rulesValues: {
          protocol: 'tcp',
          direction: 'in',
          port: '555',
          destination_ips: '',
          source_ips: '',
          description: ''
        }
      }
      {
        labelsValues: [ { key: 'key', value: 'name' }, { key: 'key2', value: 'value2' } ]
      }
      name
      */

	const options: OptionsWithUri = {
		method: 'POST',
		body: {
			name: name,
			labels: { environment: 'development' },
			rules: [rules.rulesValues],
			apply_to: [],
		},
		uri: 'https://api.hetzner.cloud/v1/firewalls/',
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
