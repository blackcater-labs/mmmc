import clsx from 'clsx'
import { Form } from 'react-router-dom'

interface SearchBarProps {
  className?: string
}

export const SearchBar = function ({ className }: SearchBarProps) {
  return (
    <div className={clsx(className, '')}>
      <Form>
        <span className="inline-block align-mid i-uil-search"></span>
        <input type="text" />
      </Form>
    </div>
  )
}
