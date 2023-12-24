export default function ItemPage() {
  return (
    <main>
      <div className="relative">
        <div className="relative h-[330px] bg-card bg-[url('https://media.nexusmods.com/7/4/7405da6c-4585-40e6-8066-a76c8381b63a.jpeg')] bg-cover">
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="ml-8 flex -translate-y-1/2 flex-row">
          <div className="w-[250px]">
            <div className="relative h-[375px] w-[250px] overflow-hidden rounded-md bg-card bg-[url('https://media.nexusmods.com/4/e/t/med/4e95cc06-589b-4cac-99d7-505e5272963f.png')] bg-cover" />
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="h-[2000px]"></div>
    </main>
  )
}
