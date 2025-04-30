import { forwardRef, type HTMLAttributes } from "react"

export { Button } from "./button"

type CardProps = HTMLAttributes<HTMLDivElement>
const Card = forwardRef<HTMLDivElement, CardProps>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
))
Card.displayName = "Card"

type CardHeaderProps = HTMLAttributes<HTMLDivElement>
const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
))
CardHeader.displayName = "CardHeader"

type CardTitleProps = HTMLAttributes<HTMLHeadingElement>
const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(({ className = "", ...props }, ref) => (
  <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
))
CardTitle.displayName = "CardTitle"

type CardContentProps = HTMLAttributes<HTMLDivElement>
const CardContent = forwardRef<HTMLDivElement, CardContentProps>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardHeader, CardTitle, CardContent }
