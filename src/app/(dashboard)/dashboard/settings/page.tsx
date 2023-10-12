import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard | Settings",
  description: "Admin dashbord for managing fiveM server and players.",
}

function page() {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        </div>
        <div>settings...</div>
      </div>
    </>
  )
}

export default page
