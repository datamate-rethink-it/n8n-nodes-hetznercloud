import type { SnapshotProperties } from '../../Interfaces';

export const snapshotListDescription: SnapshotProperties = [
	{
		displayName: 'Table Name',
		name: 'tableName',
		type: 'string',
		placeholder: 'Select a table',
		required: true,
		displayOptions: {
			show: {
				resource: ['snapshot'],
				operation: ['list'],
			},
		},
		default: '',
		description: '...',
	},
];
