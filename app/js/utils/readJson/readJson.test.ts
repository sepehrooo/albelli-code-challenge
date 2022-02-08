import readJson from '.'

describe('readJson', () => {
    test('Calling with a supported JSON file', () => {
        const json = {
            canvas: {
                width: 15,
                height: 10,
                photo: {
                    src: 'data:image/png;base64,KOKMkOKWoV/ilqEp',
                    width: 10,
                    height: 15,
                    x: 0,
                    y: 0,
                    scale: 1.1,
                    ratio: 1.5,
                },
            },
        }

        const file = new File([JSON.stringify(json)], 'test.json', {
            type: 'application/json',
        })
        const expectedResponse = {
            src: 'data:image/png;base64,KOKMkOKWoV/ilqEp',
            x: 0,
            y: 0,
            width: 3000,
            height: 4500,
            scale: 1.1,
            ratio: 1.5,
        }
        return readJson(file).then((result) => {
            expect(result).toStrictEqual(expectedResponse)
        })
    })
    test('Calling with unsupported JSON file', () => {
        // unsupported JSON file missing image src
        const json = {
            canvas: {
                width: 15,
                height: 10,
                photo: {
                    width: 10,
                    height: 15,
                    x: 0,
                    y: 0,
                    scale: 1.1,
                    ratio: 1.5,
                },
            },
        }

        const file = new File([JSON.stringify(json)], 'test.json', {
            type: 'application/json',
        })
        return readJson(file).catch((error) => {
            expect(error.name).toBe('Error')
        })
    })

    test('Calling with an html file', () => {
        const file = new File(['hi'], 'test.html', {
            type: 'text/html',
        })
        return readJson(file).catch((error) => {
            expect(error.name).toBe('Error')
        })
    })
})
