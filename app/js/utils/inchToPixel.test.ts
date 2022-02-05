import inchToPixel from './inchToPixel'

test('12 inches with 300PPI quality should be 3600 pixels', () => {
    const res = inchToPixel(12)
    expect(res).toBe(3600)
})
