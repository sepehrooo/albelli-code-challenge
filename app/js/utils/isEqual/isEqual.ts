import isObject from '../isObject'

export default function isEqual(value1: unknown, value2: unknown): boolean {
    if (
        !value1 ||
        !value2 ||
        (typeof value1 !== 'object' && typeof value2 !== 'object')
    ) {
        return value1 === value2
    }
    const keys1 = Object.keys(value1 as any)
    const keys2 = Object.keys(value2 as any)
    if (keys1.length !== keys2.length) {
        return false
    }
    keys1.map((key) => {
        const val1 = (value1 as any)[key]
        const val2 = (value2 as any)[key]
        const areObjects = isObject(val1) && isObject(val2)
        if (
            (areObjects && !isEqual(val1, val2)) ||
            (!areObjects && val1 !== val2)
        ) {
            return false
        }
        return true
    })

    return true
}
