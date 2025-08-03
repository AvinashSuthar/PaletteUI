'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Moon, Sun, Palette, Home, Heart, Command } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { GitHubStarButton } from '@/components/github-star-button';

export function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/palette', label: 'Palette', icon: Palette },
    { href: '/favorites', label: 'Favorites', icon: Heart },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-center w-full">
          <div className="flex items-center space-x-6  w-1/3 justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Palette className="h-6 w-6 " />
              <span className="font-bold text-xl">PaletteUI</span>
            </Link>


          </div>
          <div className="hidden md:flex items-center space-x-6 w-1/3 justify-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} prefetch={false} >
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      'flex items-center space-x-2',
                      isActive ? "border-b-2 border-primary rounded-none " : ""
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-2 w-1/3 justify-end">
            <GitHubStarButton />

            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex items-center space-x-2 text-muted-foreground"
              onClick={() => {
                const event = new KeyboardEvent('keydown', {
                  key: 'k',
                  metaKey: true,
                  ctrlKey: true,
                });
                document.dispatchEvent(event);
              }}
            >
              <Command className="h-4 w-4" />
              <span>K</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}