import type { IExecuteFunctions, ILoadOptionsFunctions } from 'n8n-workflow';
import { OptionsWithUri } from 'request';
/*
// takes in an array of {key:string,value:any} objects and converts them to
someObject:{
    key1:value1,
    key2:value2,
    ...
}
mainly for creating the labels
*/
export function createDynamicObject(objects: { key: string; value: any }[]): {
	[key: string]: any;
} {
	const dynamicObject: { [key: string]: any } = {};
	for (const e of objects) {
		dynamicObject[e.key] = e.value;
	}
	return dynamicObject;
}

/* 
This Function recursively calls itself incrementing page till last_page reached and then returns an Array of all the received data

data is the actual data returned by the api from options, the data gets recursively appended
arraymergekey specifies which key is array that should be appended to data 
	example: when calling firewalls api {"firewalls":[...]} is returned, arraymergekey would be "firewalls"
credentialsType is just the credentials name in n8

instance can be  ILoadOptions for loadOptions.ts
instance can also be IExecuteFunctions for the normal actions like: list firewall
*/

//const timeout = 2000; // 2 seconds timeout
export async function helpPaginate(
	instance: ILoadOptionsFunctions | IExecuteFunctions,
	credentialsType: string,
	options: OptionsWithUri,
	data: any[],
	arraymergekey: string,
): Promise<any[]> {
	try {
		let result = await instance.helpers.requestWithAuthentication.call(
			instance,
			credentialsType,
			options,
		);
		console.log(result);
		if (options.qs.page === null) {
			options.qs.page = 1;
		}
		//console.log(options.qs.page);
		if (!result[arraymergekey]) {
			//console.log(arraymergekey + 'does not exist on result');
			return Promise.resolve(data);
		}
		if (!result.meta.pagination) {
			//	console.log('no Pagination');
			return Promise.resolve(data);
		}

		if (
			result.meta.pagination.page >= result.meta.pagination.last_page ||
			result.meta.pagination.next_page === null
		) {
			//	console.log('last page', result.meta.pagination.last_page);
			data = data.concat(result[arraymergekey]);
			return Promise.resolve(data);
		} else {
			data = data.concat(result[arraymergekey]);
			options.qs.page = result.meta.pagination.next_page;
			return helpPaginate(instance, credentialsType, options, data, arraymergekey);
		}
	} catch (error) {
		console.log(error);
		return Promise.resolve(data);
	}
}
