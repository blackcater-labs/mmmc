import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default function SpacePage() {
  return (
    <main>
      <section className="mb-8 px-[32px]">
        <h2 className="my-4 text-xl font-semibold">Continue Reading</h2>
        <ScrollArea className="h-[400px] w-[calc(100vw-330px)]">
          <div className="flex flex-row flex-nowrap space-x-8">
            <div className="flex w-[200px] flex-col">
              <div className="group relative h-[300px] w-[200px] overflow-hidden rounded-md bg-card bg-[url('https://i0.hdslb.com/bfs/manga-static/ac575cdf576bd5eb7775a5371d44e0809235bf20.jpg@310w.jpg')] bg-cover hover:cursor-pointer hover:border-4 hover:border-yellow-500">
                <div className="mask absolute inset-0 hidden bg-black opacity-50 group-hover:block" />
              </div>
              <a href="#" className="my-2 line-clamp-1 font-bold hover:underline">航海王</a>
              <span className="text-muted-foreground">2022</span>
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </main>
  )
}
