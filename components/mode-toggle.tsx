'use client'

import { useTheme } from 'next-themes'
import { Button } from './ui/button'

const Sun = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
)

const Moon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
)

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant={'ghost'}
      size={'sm'}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex h-8 w-8 items-center justify-center rounded-full md:h-12 md:w-12 "
    >
      <span className="sr-only">Toggle mode</span>
      <Sun className="rotate-0 scale-0 transition-all duration-500 dark:-rotate-90 dark:scale-[1.75] md:h-12 md:w-12 md:dark:scale-110" />
      <Moon className="absolute rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 md:h-4 md:w-4" />
    </Button>
  )
}
