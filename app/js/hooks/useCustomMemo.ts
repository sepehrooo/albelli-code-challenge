import { useState } from 'react'
import isEqual from '../utils/isEqual'

export default function useCustomMemo<T>(
    func: () => T,
    dependencies: Array<unknown> | void | null
): T {
    const [prevDependencies, setPrevDependencies] =
        useState<Array<unknown> | void | null>(null)
    const [values, setValues] = useState<T | null>(null)
    if (prevDependencies && isEqual(prevDependencies, dependencies) && values) {
        return values
    }
    setPrevDependencies(dependencies)
    const vals = func()
    setValues(vals)
    return vals
}
