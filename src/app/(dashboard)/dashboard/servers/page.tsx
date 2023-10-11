import { ServerListTable } from "@/components/tables/server-list-table"

function page() {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Servers</h2>
        </div>
        <div>
          <ServerListTable />
        </div>
      </div>
    </>
  )
}

export default page
