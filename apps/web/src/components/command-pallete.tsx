"use client"

import { Command } from 'cmdk'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  LayoutDashboard, 
  Activity, 
  BrainCircuit, 
  Settings, 
  Plus,
  Search
} from 'lucide-react'

export const CommandMenu = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const pages = [
    {
      name: 'Dashboard',
      path: '/',
      icon: LayoutDashboard,
      description: 'View uptime dashboard and overview'
    },
    {
      name: 'Monitors',
      path: '/monitor',
      icon: Activity,
      description: 'Manage all your website monitors'
    },
    {
      name: 'AI Insights',
      path: '/ai-insights',
      icon: BrainCircuit,
      description: 'View AI-powered recommendations'
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: Settings,
      description: 'Configure your account settings'
    },
    {
      name: 'Add Monitor',
      path: '/add-website',
      icon: Plus,
      description: 'Add a new website monitor'
    },
  ]

  const handleSelect = (path: string) => {
    setOpen(false)
    router.push(path)
  }

  return (
    <>

      <button
        onClick={() => setOpen(true)}
        className="inline-flex w-[300px]  border border-gray-700 px-8 py-4 items-center justify-between gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        > 
            <div className='flex gap-x-4' >

        <Search className="h-4 w-4" />
        <span className="hidden sm:inline text-sm">Search</span>
            </div>
        <div className='flex gap-x-1' >

        <kbd className="hidden sm:inline-flex pointer-events-none h-5 select-none items-end justify-start gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">Ctrl</span>
        </kbd>
        <kbd className="hidden sm:inline-flex pointer-events-none h-5 select-none items-end justify-start gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">K</span>
        </kbd>
        </div>
      </button>

      <Command.Dialog 
        open={open} 
        onOpenChange={setOpen} 
        label="Global Command Menu"
        className="fixed inset-0 z-50"
      >
        <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />
        <div className="fixed left-[50%] top-[50%] z-50 w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] rounded-lg border bg-white dark:bg-gray-950 shadow-lg">
          <Command.Input 
            placeholder="Search for pages and actions..." 
            className="w-full border-b px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
          />
          <Command.List className="max-h-[400px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group heading="Pages" className="px-2 py-2">
              <div className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Pages
              </div>
              {pages.map((page) => {
                const Icon = page.icon
                return (
                  <Command.Item
                    key={page.path}
                    value={`${page.name} ${page.description}`}
                    onSelect={() => handleSelect(page.path)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-50 dark:bg-blue-950">
                      <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{page.name}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {page.description}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {page.path}
                    </div>
                  </Command.Item>
                )
              })}
            </Command.Group>
          </Command.List>
          <div className="border-t px-4 py-2 text-xs text-muted-foreground flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                  ↑↓
                </kbd>
                to navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                  ↵
                </kbd>
                to select
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                ESC
              </kbd>
              to close
            </span>
          </div>
        </div>
      </Command.Dialog>
    </>
  )
}