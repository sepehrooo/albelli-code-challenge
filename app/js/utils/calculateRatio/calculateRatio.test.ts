import calculateRatio from './calculateRatio'

test(`called with props`, () => {
    const result = calculateRatio({
        canvasWidth: 4500,
        canvasHeight: 3000,
        imageWidth: 2800,
        imageHeight: 2000,
    })

    expect(result).toBe(1.6071428571428572)
})
