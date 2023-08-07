import { SearchBar } from './SearchBar'

export const Header: React.FC = function () {
  return (
    <header className="absolute inset-x-0 top-0 h-20 p-4 flex flex-row justify-between items-center">
      <h1 className="font-600 text-3xl">Good Morning, blackcater</h1>
      <SearchBar className="order-last" />
    </header>
  )
}
