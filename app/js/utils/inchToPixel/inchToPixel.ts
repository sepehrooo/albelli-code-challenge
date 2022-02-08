import { printPixelPerInchQuality } from '../../variables'

export default (inches: number): number => {
    return inches * printPixelPerInchQuality
}
