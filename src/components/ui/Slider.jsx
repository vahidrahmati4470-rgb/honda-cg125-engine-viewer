import { cn } from '../../utils/cn'

export function Slider({
  value = 0,
  min = 0,
  max = 1,
  step = 0.01,
  onChange,
  className,
  label,
  ...props
}) {
  return (
    <div className={cn('w-full space-y-1.5', className)}>
      {label && (
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{label}</span>
          <span className="font-mono">{Math.round(value * 100)}%</span>
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange?.(parseFloat(e.target.value))}
        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
        {...props}
      />
    </div>
  )
}
