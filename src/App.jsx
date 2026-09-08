import { useState, useCallback, useMemo } from 'react'
import { EngineViewer } from './components/EngineViewer'
import { ControlsPanel } from './components/ControlsPanel'
import { ENGINE_SYSTEMS, SYSTEM_IDS } from './data/engineSystems'
import { useExplode } from './hooks/useExplode'

export default function App() {
  const { explodeFactor, setExplode } = useExplode(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPart, setSelectedPart] = useState(null)
  const [resetCameraSignal, setResetCameraSignal] = useState(0)

  // All systems visible by default
  const [visibleSystems, setVisibleSystems] = useState(() => {
    const initial = {}
    SYSTEM_IDS.forEach((id) => {
      initial[id] = true
    })
    return initial
  })

  const handleToggleSystem = useCallback((systemId) => {
    setVisibleSystems((prev) => ({
      ...prev,
      [systemId]: !prev[systemId],
    }))
  }, [])

  const handleToggleAllSystems = useCallback((show) => {
    setVisibleSystems((prev) => {
      const next = {}
      Object.keys(prev).forEach((id) => {
        next[id] = show
      })
      return next
    })
  }, [])

  const handlePartClick = useCallback((partMeta) => {
    setSelectedPart(partMeta)
  }, [])

  const handleClearSelection = useCallback(() => {
    setSelectedPart(null)
  }, [])

  const handleResetCamera = useCallback(() => {
    setResetCameraSignal((s) => s + 1)
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <EngineViewer
        explodeFactor={explodeFactor}
        visibleSystems={visibleSystems}
        selectedPart={selectedPart}
        onPartClick={handlePartClick}
        onMissClick={handleClearSelection}
        resetCameraSignal={resetCameraSignal}
      />

      <ControlsPanel
        explodeFactor={explodeFactor}
        onExplodeChange={setExplode}
        visibleSystems={visibleSystems}
        onToggleSystem={handleToggleSystem}
        onToggleAllSystems={handleToggleAllSystems}
        selectedPart={selectedPart}
        onSelectPart={setSelectedPart}
        onClearSelection={handleClearSelection}
        onResetCamera={handleResetCamera}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Mobile-friendly bottom safe area hint */}
      <div className="absolute bottom-2 left-2 z-10 text-[10px] text-muted-foreground/60 pointer-events-none hidden sm:block">
        Drag to orbit · Scroll to zoom · Click part to inspect
      </div>
    </div>
  )
}
