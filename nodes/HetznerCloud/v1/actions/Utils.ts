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
