import { useState, useCallback } from 'react'

/**
 * Simple hook to manage explode factor (0 = assembled, 1 = fully exploded)
 */
export function useExplode(initial = 0) {
  const [explodeFactor, setExplodeFactor] = useState(initial)

  const setExplode = useCallback((value) => {
    setExplodeFactor(Math.max(0, Math.min(1, value)))
  }, [])

  const toggleExplode = useCallback(() => {
    setExplodeFactor((prev) => (prev > 0.5 ? 0 : 1))
  }, [])

  return {
    explodeFactor,
    setExplode,
    toggleExplode,
    isExploded: explodeFactor > 0.05,
  }
}
