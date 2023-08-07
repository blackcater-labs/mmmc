import * as Avatar from '@radix-ui/react-avatar'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { useCallback } from 'react'

export const NavBar: React.FC = function () {
  const navClsx = useCallback(({ isActive }: { isActive: boolean }) => {
    return clsx(
      'inline-block text-0 p-2 my-2',
      isActive
        ? 'btn-primary rounded'
        : 'border-base border-transparent hover:text-black',
    )
  }, [])

  return (
    <nav className="absolute top-0 left-0 bottom-0 w-20 bg-white text-truegray-500 flex flex-col justify-center">
      <div className="hidden">
        <Avatar.Root>
          <Avatar.Image className="w-12 h-12" src="/logo.png" alt="Mmmc" />
          <Avatar.Fallback>Mm</Avatar.Fallback>
        </Avatar.Root>
      </div>

      <ul className="relative flex flex-col text-center">
        <span className="absolute top-0 left-30% right-30% h-1px bg-truegray-200"></span>
        <li>
          <NavLink to="/" className={navClsx} title="Home">
            <span className="inline-block w-6 h-6 i-uil-home-alt"></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/comics" className={navClsx} title="Comics">
            <span className="inline-block w-6 h-6 i-uil-book-alt"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/collections"
            className={navClsx}
            title="Collections"
          >
            <span className="inline-block w-6 h-6 i-uil-heart"></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/history" className={navClsx} title="History">
            <span className="inline-block w-6 h-6 i-uil-clock"></span>
          </NavLink>
        </li>
      </ul>

      <div className="absolute bottom-6 left-50% translate-x--50% p-1 text-0 rounded hover:bg-gray-200 hover:text-black">
        {/* i-uil-exit */}
        <button className="i-uil-user w-6 h-6" title="Login"></button>
      </div>
    </nav>
  )
}
