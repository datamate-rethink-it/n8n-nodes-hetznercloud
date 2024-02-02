import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
/*import {
	seaTableApiRequest,
	getTableColumns,
	split,
	rowExport,
	updateAble,
	splitStringColumnsToArrays,
} from '../../../GenericFunctions';*/
//import type { IRowObject } from '../../Interfaces';
//import type { TColumnValue, TColumnsUiValues } from '../../../types';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	//const tableName = this.getNodeParameter('tableName', index) as string;

	/*const responseData = await HetzerRe.call(
		this,
		{},
		'POST',
		'/dtable-db/api/v1/insert-rows/{{dtable_uuid}}/',
		body,
	);*/

	const responseData = {};
	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
