import { TabsContent } from "@/components/ui/tabs"
import AddNews from "@/components/forms/add-news"
import { NewsListTable } from "@/components/tables/news-list-table"
import { getNews } from "@/app/_actions/server"

async function News() {
  const news = await getNews()

  return (
    <TabsContent value="news">
      <AddNews />
      <NewsListTable data={news} />
    </TabsContent>
  )
}

export default News
