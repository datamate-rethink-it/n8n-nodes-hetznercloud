import type {
	ICredentialTestRequest,
	ICredentialType,
	IAuthenticateGeneric,
	INodeProperties,
} from 'n8n-workflow';

export class HetznerCloudApi implements ICredentialType {
	name = 'hetznercloud';
	displayName = 'Hetzner Cloud API';
	documentationUrl = 'https://seatable.io/docs/n8n-integration/...';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'token',
			type: 'string',
			description:
				'The API-Token you received from Hetzner. Get more info at https://docs.hetzner.cloud/#authentication.',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.token}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.hetzner.cloud',
			url: '/v1/actions',
			headers: {
				Authorization: '=Bearer {{$credentials.token}}',
			},
		},
	};
}
