import pixelToInch from './pixelToInch'
import { printPixelPerInchQuality } from '../../variables'

test('3000 pixel to inches', () => {
    const res = pixelToInch(3000)
    expect(res).toBe(3000 / printPixelPerInchQuality)
})
