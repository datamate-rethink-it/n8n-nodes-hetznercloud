import type { ServerProperties } from '../../Interfaces';

export const metricsDescription: ServerProperties = [
	{
		displayName: 'Server Id',
		name: 'id',
		type: 'options',
		required: true,
		placeholder: '3918671',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['metrics'],
			},
		},
		typeOptions: {
			loadOptionsMethod: 'getServers',
		},
		default: '1',
		description: 'The Id Of the Server in the project',
	},
	{
		displayName: 'Metric-type',
		name: 'type',
		type: 'string',
		required: true,
		placeholder: 'cpu',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['metrics'],
			},
		},
		default: 'cpu',
		description: 'The metric-type that should be given back',
	},
	{
		displayName: 'Start Time-Date',
		name: 'start_date',
		type: 'dateTime',
		required: true,
		placeholder: '2017-01-01T00:00:00+00:00',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['metrics'],
			},
		},
		default: '',
		description: 'Start of period to get Metrics for (in ISO-8601 format)',
	},
	{
		displayName: 'End Time-Date',
		name: 'end_date',
		type: 'dateTime',
		required: true,
		placeholder: '2017-01-01T00:00:00+00:00',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['metrics'],
			},
		},
		default: '',
		description: 'End of period to get Metrics for (in ISO-8601 format)',
	},
	{
		displayName: 'Time Step',
		name: 'time_step',
		type: 'string',
		required: false,
		placeholder: '',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['metrics'],
			},
		},
		default: '',
		description: 'Resolution of results in seconds',
	},
];
