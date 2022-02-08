import { printPixelPerInchQuality } from '../../variables'

export default (pixels: number): number => {
    return parseFloat((pixels / printPixelPerInchQuality).toFixed(3))
}
