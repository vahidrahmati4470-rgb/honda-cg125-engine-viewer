import { SAMPLE_PARTS, ENGINE_SYSTEMS } from '../data/engineSystems'

/**
 * Get part metadata by id or name (case-insensitive partial match)
 */
export function findPartMeta(idOrName) {
  if (!idOrName) return null
  const lower = idOrName.toLowerCase()
  return SAMPLE_PARTS.find(
    (p) =>
      p.id.toLowerCase() === lower ||
      p.name.toLowerCase() === lower ||
      p.id.toLowerCase().includes(lower) ||
      p.name.toLowerCase().includes(lower)
  )
}

/**
 * Get system info for a part
 */
export function getSystemForPart(partIdOrName) {
  const meta = findPartMeta(partIdOrName)
  if (!meta) return null
  return ENGINE_SYSTEMS[meta.system] || null
}

/**
 * Calculate explode offset for a part based on its index and system
 * Creates a clean, organized radial + vertical layout
 */
export function calculateExplodeOffset(index, total, systemId, explodeFactor) {
  if (explodeFactor <= 0) return [0, 0, 0]

  // Different systems explode in different preferred directions
  const systemDirections = {
    block: [0, -1, 0],
    cylinderHead: [0, 1.2, 0],
    piston: [0, 0.6, 0.4],
    crankshaft: [0.8, -0.3, 0],
    fuel: [-1.2, 0.5, 0.3],
    ignition: [0.9, 0.8, 0.5],
    clutch: [1.1, 0, -0.2],
    lubrication: [-0.6, -0.5, 0.4],
    exhaust: [-0.4, -0.8, -1.0],
    covers: [0, 0, 1.3],
  }

  const baseDir = systemDirections[systemId] || [0, 1, 0]
  
  // Add some variation based on index so parts don't stack
  const angle = (index / Math.max(total, 1)) * Math.PI * 2
  const spread = 0.35
  
  const offsetX = (baseDir[0] + Math.cos(angle) * spread) * explodeFactor * 2.8
  const offsetY = (baseDir[1] + Math.sin(angle * 0.7) * spread * 0.6) * explodeFactor * 2.8
  const offsetZ = (baseDir[2] + Math.sin(angle) * spread) * explodeFactor * 2.8

  return [offsetX, offsetY, offsetZ]
}
