import { X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { ENGINE_SYSTEMS } from '../data/engineSystems'

export function PartInfo({ part, onClose }) {
  if (!part) return null

  const system = ENGINE_SYSTEMS[part.system]

  return (
    <Card className="w-full max-w-sm shadow-lg border-primary/20">
      <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
        <div className="space-y-1">
          <CardTitle className="text-base">{part.name}</CardTitle>
          {system && (
            <Badge
              className="text-xs"
              style={{ backgroundColor: system.color, color: '#fff' }}
            >
              {system.name}
            </Badge>
          )}
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7 -mt-1 -mr-1" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {part.description}
        </p>
        {system && (
          <p className="text-xs text-muted-foreground/80 border-t pt-2">
            <span className="font-medium">System:</span> {system.description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
