import type { SnapshotProperties } from '../../Interfaces';

export const snapshotCreateDescription: SnapshotProperties = [
	{
		displayName: 'Table Name',
		name: 'tableName',
		type: 'string',
		placeholder: 'Select a table',
		required: true,
		displayOptions: {
			show: {
				resource: ['snapshot'],
				operation: ['create'],
			},
		},
		default: '',
		description: '...',
	},
];
