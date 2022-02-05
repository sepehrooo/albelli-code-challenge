import pixelToInch from './pixelToInch'

test('3000 pixel with 300PPI quality should be 10 inches', () => {
    const res = pixelToInch(3000)
    expect(res).toBe(10)
})
