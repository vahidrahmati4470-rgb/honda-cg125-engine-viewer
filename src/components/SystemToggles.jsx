import { ENGINE_SYSTEMS } from '../data/engineSystems'
import { cn } from '../utils/cn'

export function SystemToggles({ visibleSystems, onToggle, onToggleAll }) {
  const allVisible = Object.values(visibleSystems).every(Boolean)

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Systems</h3>
        <button
          onClick={() => onToggleAll(!allVisible)}
          className="text-xs text-primary hover:underline"
        >
          {allVisible ? 'Hide all' : 'Show all'}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-1.5 max-h-64 overflow-y-auto custom-scrollbar pr-1">
        {Object.values(ENGINE_SYSTEMS).map((system) => {
          const isVisible = visibleSystems[system.id]
          return (
            <button
              key={system.id}
              onClick={() => onToggle(system.id)}
              className={cn(
                'flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-left text-sm transition-colors',
                isVisible
                  ? 'bg-secondary/80 hover:bg-secondary'
                  : 'opacity-50 hover:opacity-70 hover:bg-secondary/40'
              )}
            >
              <span
                className="h-3 w-3 rounded-full shrink-0 border border-black/10"
                style={{ backgroundColor: isVisible ? system.color : '#d1d5db' }}
              />
              <span className="truncate flex-1">{system.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
