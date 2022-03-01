import isObject from '.'

describe('isObject', () => {
    test('an object', () => {
        const a = {}
        const b = { c: 1, d: 2, e: { f: 'hi' } }
        expect(isObject(a)).toBeTruthy()
        expect(isObject(b)).toBeTruthy()
    })
    test('array', () => {
        expect(isObject([1, 2, 3])).toBeTruthy()
    })
    test('null', () => {
        expect(isObject(null)).toBeFalsy()
    })
    test('number', () => {
        expect(isObject(1)).toBeFalsy()
    })
    test('string', () => {
        expect(isObject('hi')).toBeFalsy()
    })

    test('undefined', () => {
        expect(isObject(undefined)).toBeFalsy()
    })
})
