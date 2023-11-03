import { Separator } from "@/components/ui/separator"
import { AccountForm } from "@/components/forms/account-form"
import { Icons } from "@/components/icons"

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account information
        </p>
      </div>
      <Separator />
      <AccountForm />
      <div>Connected Accounts</div>
      <Separator />
      <div className="mx-4 flex gap-4">
        <div className="flex gap-2">
          <Icons.Discord className="h-5 w-5" />
          <span className=" text-sm">Discord</span>
        </div>
        <div className="flex gap-2">
          <Icons.MetaMask className="h-5 w-5" />
          <span className=" text-sm">Metamask</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium">Security</h3>
        <p className="text-sm text-muted-foreground">
          Manage your security preferences
        </p>
      </div>
      <Separator />
      <div>Active Devices</div>
      <div className="flex gap-4 px-3">
        <Icons.Windows className="h-8 w-8 text-muted-foreground" />
        <div className="">
          <div className="pb-1 font-semibold">
            Windows{" "}
            <span className="rounded bg-red-300/20 p-0.5 px-1 text-xs font-semibold text-red-500">
              Current Device
            </span>
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div>Edge 118.0.2088.69</div>
            <div>Singapore, SG</div>
            <div>10/27/2023 @ 7:52:11 PM</div>
          </div>
        </div>
      </div>
    </div>
  )
}
