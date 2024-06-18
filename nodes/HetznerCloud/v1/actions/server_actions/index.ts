import type { INodeProperties } from 'n8n-workflow';
import * as create_image from './create_image';
import * as power_off from './power_off';
import * as power_on from './power_on';
import * as soft_reboot from './soft_reboot';
import * as shutdown from './shutdown';
import * as reset from './reset';
import * as change_server_type from './change_server_type';

export { create_image, power_off, power_on, soft_reboot, shutdown, reset, change_server_type };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['server_actions'],
			},
		},
		options: [
			{
				name: 'Create Image',
				value: 'create_image',
				description:
					'Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.',
				action: 'Create Image from a Server',
			},
			{
				name: 'Power Off',
				value: 'power_off',
				description:
					'Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.',
				action: 'Power off a server',
			},
			{
				name: 'Power on',
				value: 'power_on',
				description: 'Starts a Server by turning its power on.',
				action: 'Power on a Server',
			},
			{
				name: 'Soft Reboot',
				value: 'soft_reboot',
				description:
					'Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.',
				action: 'Soft-reboot a Server',
			},
			{
				name: 'Shutdown',
				value: 'shutdown',
				description:
					'Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI and react to the request, otherwise the Server will not shut down.',
				action: 'Shutdown a Server',
			},
			{
				name: 'Reset',
				value: 'reset',
				description:
					'Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.',
				action: 'Reset a Server',
			},
			{
				name: 'Change Server-type',
				value: 'change_server_type',
				description:
					'Changes the type (Cores, RAM and disk sizes) of a Server, Server must be powered off for this command to succeed.',
				action: 'Change a Servers Server-type',
			},
		],
		default: 'power_off',
	},
	...create_image.description,
	...power_off.description,
	...power_on.description,
	...soft_reboot.description,
	...shutdown.description,
	...reset.description,
	...change_server_type.description,
];
