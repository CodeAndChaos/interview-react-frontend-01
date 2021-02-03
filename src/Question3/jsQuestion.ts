const transformNumber = (num: number) => {
    return num + 1;
}

const transformString = (str: string) => {
    return `${str} AE`
}

const transformObject = (obj: Object) => {
    const transformedObject: { [x: string]: unknown } = {}
    Object.entries(obj).forEach(([key, val]) => {
        transformedObject[key] = transformValue(val)
    })
    return transformedObject;
}

export const transformValue = (val: unknown): unknown => {
    if (Array.isArray(val)) {
        return val.map(transformValue)
    }
    if (typeof val === "object" && val !== null){
        return transformObject(val)
    }
    if (typeof val === "string") {
        return transformString(val);
    }
    if (typeof val === "number") {
        return transformNumber(val)
    }
    return val;
}


