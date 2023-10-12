import { Separator } from "@/components/ui/separator"
import { AccountForm } from "@/components/forms/account-form"

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your name, steam GUID, date of birth
          and etc.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  )
}
