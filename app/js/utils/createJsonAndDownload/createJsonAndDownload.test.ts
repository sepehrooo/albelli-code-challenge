import createJsonAndDownload from './createJsonAndDownload'

describe('create json file and download', () => {
    let link: HTMLAnchorElement
    let createElement: typeof document.createElement
    beforeEach(() => {
        createElement = document.createElement
        global.URL.createObjectURL = jest.fn()
        const data = {
            width: 15,
            height: 10,
            image: {
                src: 'src',
                width: 10,
                height: 12,
                x: 0,
                y: 0,
                scale: 1.1,
                ratio: 1.9,
            },
            message: '',
        }
        link = document.createElement('a')
        link.click = jest.fn()
        jest.spyOn(document, 'createElement').mockImplementation(() => link)
        createJsonAndDownload(data)
    })
    afterEach(() => {
        jest.restoreAllMocks()
        document.createElement = createElement
    })
    test('download file name has albelli and .json in it', () => {
        expect(link.download).toContain('albelli')
        expect(link.download).toContain('.json')
    })
    test(`link click should be called once for 
        the file to be downloaded`, () => {
        expect(link.click).toHaveBeenCalledTimes(1)
    })
})
