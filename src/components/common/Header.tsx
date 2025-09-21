import Button from './Button'
import Logo from './Logo'
import Navigation from './Navigation'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 h-16">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 h-full">
        <Logo />
        <Navigation />
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button size='md' variant='primary'>
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  )
}