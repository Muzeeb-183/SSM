import { cn } from "@/lib/utils"
import { InputHTMLAttributes, forwardRef } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, helperText, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          className={cn(
            "flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-error focus:ring-error",
            className
          )}
          ref={ref}
          {...props}
        />
        {helperText && (
          <p className={cn(
            "mt-1 text-xs",
            error ? "text-error" : "text-text-muted"
          )}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input } 