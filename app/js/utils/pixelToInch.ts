const pixelToInch = (pixels: number): number => {
    return parseFloat((pixels / 300).toFixed(3))
}
export default pixelToInch
