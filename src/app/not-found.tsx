import { ErrorCard } from "@/components/cards/error-card"
import { Shell } from "@/components/shells/shell"

export default function EmailPreferencesNotFound() {
  return (
    <Shell variant="centered" className="max-w-md">
      <ErrorCard
        title="Page Not found"
        description="We're sorry, but it seems like the page you're looking for isn't here."
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </Shell>
  )
}
