import { Search, X } from 'lucide-react'
import { Input } from './ui/Input'
import { Button } from './ui/Button'

export function SearchBar({ value, onChange, onClear, results = [], onSelect }) {
  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search parts (e.g. piston, carburetor)..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-9 pr-9"
        />
        {value && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0.5 top-1/2 -translate-y-1/2 h-8 w-8"
            onClick={onClear}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {value && results.length > 0 && (
        <div className="absolute z-50 mt-1 w-full max-h-48 overflow-auto rounded-md border bg-card shadow-md custom-scrollbar">
          {results.map((part) => (
            <button
              key={part.id}
              className="w-full px-3 py-2 text-left text-sm hover:bg-accent transition-colors flex flex-col"
              onClick={() => onSelect(part)}
            >
              <span className="font-medium">{part.name}</span>
              <span className="text-xs text-muted-foreground">{part.system}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
