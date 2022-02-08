import inchToPixel from './inchToPixel'
import { printPixelPerInchQuality } from '../../variables'

test('12 inches to pixels', () => {
    const res = inchToPixel(12)
    expect(res).toBe(12 * printPixelPerInchQuality)
})
