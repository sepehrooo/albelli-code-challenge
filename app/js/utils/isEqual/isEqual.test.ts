import isEqual from '.'

describe('isEqual', () => {
    describe('number', () => {
        test('equal numbers', () => {
            expect(isEqual(1, 1)).toBeTruthy()
        })
        test('not equal numbers', () => {
            expect(isEqual(1, 2)).toBeFalsy()
        })
    })
    describe('string', () => {
        test('equal strings', () => {
            expect(isEqual('a', 'a')).toBeTruthy()
        })

        test('not equal strings', () => {
            expect(isEqual('a', 'b')).toBeFalsy()
        })
    })
    describe('null', () => {
        test('equal nulls', () => {
            expect(isEqual(null, null)).toBeTruthy()
        })

        test('not equal nulls', () => {
            expect(isEqual(null, false)).toBeFalsy()
            expect(isEqual(null, {})).toBeFalsy()
            expect(isEqual(null, undefined)).toBeFalsy()
            expect(isEqual(null, 'hi')).toBeFalsy()
        })
    })
    describe('undefined', () => {
        test('equal undefineds', () => {
            expect(isEqual(undefined, undefined)).toBeTruthy()
        })

        test('not equal undefineds', () => {
            expect(isEqual(undefined, false)).toBeFalsy()
            expect(isEqual(undefined, {})).toBeFalsy()
            expect(isEqual(undefined, null)).toBeFalsy()
            expect(isEqual(undefined, 'hi')).toBeFalsy()
        })
    })
    describe('object', () => {
        test('equal objects', () => {
            const a = {
                b: { key1: 1 },
                c: 'hi',
                d: {
                    key2: 'test',
                    key3: true,
                    key4: 1234,
                    key5: { key6: 'hi', key7: 'bye', key8: false },
                },
            }
            const b = {
                b: { key1: 1 },
                c: 'hi',
                d: {
                    key2: 'test',
                    key3: true,
                    key4: 1234,
                    key5: { key6: 'hi', key7: 'bye', key8: false },
                },
            }
            expect(isEqual(a, b)).toBeTruthy()
        })
        test('notequal objects', () => {
            const a = {
                b: { key1: 1 },
                c: 'hi',
                d: {
                    key2: 'test',
                    key3: true,
                    key4: 1234,
                    key5: { key6: 'hi', key7: 'hi', key8: false },
                },
            }
            const b = {
                b: { key1: 1 },
                c: 'hi',
                d: {
                    key2: 'test',
                    key3: true,
                    key4: 1234,
                    key5: { key6: 'hi', key7: 'bye', key8: false },
                },
            }
            expect(isEqual(a, b)).toBeFalsy()
            expect(isEqual(a, 'hi')).toBeFalsy()
            expect(isEqual(a, {})).toBeFalsy()
            expect(isEqual(a, null)).toBeFalsy()
            expect(isEqual(a, undefined)).toBeFalsy()
        })
    })
    describe('Array', () => {
        test('equal arrays', () => {
            const a = [1, 2, 3, 'hi', true]
            const b = [1, 2, 3, 'hi', true]
            expect(isEqual(a, b)).toBeTruthy()
        })
        test('not equal arrays', () => {
            const a = [1, 1, 3, 'hi', true]
            const b = [1, 2, 3, 'hi', true]
            expect(isEqual(a, b)).toBeFalsy()
            expect(isEqual(a, [])).toBeFalsy()
            expect(isEqual(a, undefined)).toBeFalsy()
            expect(isEqual(a, {})).toBeFalsy()
        })
    })
})
