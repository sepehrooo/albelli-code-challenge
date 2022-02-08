import readImage from '.'

type ImageConstructor = new (
    width?: number | undefined,
    height?: number | undefined
) => HTMLImageElement
describe('readImage', () => {
    test('Calling with a mock image', async () => {
        // Overriding Image object since jsdom can't handle images
        global.Image = class {
            onload: () => void

            naturalWidth: number

            naturalHeight: number

            constructor() {
                this.naturalWidth = 3000
                this.naturalHeight = 4500
                this.onload = jest.fn()
                setTimeout(() => {
                    this.onload()
                }, 50)
            }
        } as unknown as ImageConstructor

        const file = new File(['(⌐□_□)'], 'test-image.png', {
            type: 'image/png',
        })
        const expectedResponse = {
            src: 'data:image/png;base64,KOKMkOKWoV/ilqEp',
            x: 0,
            y: 0,
            width: 3000,
            height: 4500,
            scale: 1,
            ratio: 1.5,
        }
        return readImage(file).then((result) => {
            expect(result).toStrictEqual(expectedResponse)
        })
    })
    test('Calling with an html file', () => {
        const file = new File(['hi'], 'test.html', {
            type: 'text/html',
        })
        return readImage(file).catch((error) => {
            expect(error.name).toBe('Error')
        })
    })
})
