'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  Home,
  Palette,
  Heart,
  Sun,
  Moon,

} from 'lucide-react';
import { tailwindColors } from '@/lib/tailwind-colors';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  // Flatten all colors for search
  const allColors = tailwindColors.flatMap(palette =>
    palette.shades.map(shade => ({
      ...shade,
      palette: palette.name
    }))
  );

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search colors, navigate, or change theme..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          <CommandItem
            onSelect={() => runCommand(() => router.push('/'))}
          >
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push('/palette'))}
          >
            <Palette className="mr-2 h-4 w-4" />
            <span>Color Palette</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push('/favorites'))}
          >
            <Heart className="mr-2 h-4 w-4" />
            <span>Favorites</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Theme">
          <CommandItem
            onSelect={() => runCommand(() => setTheme('light'))}
          >
            <Sun className="mr-2 h-4 w-4" />
            <span>Light Theme</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => setTheme('dark'))}
          >
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark Theme</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Colors">
          {allColors.slice(0, 10).map((color) => (
            <CommandItem
              key={color.name}
              onSelect={() => runCommand(() => {
                navigator.clipboard.writeText(color.hex);
                router.push('/palette');
              })}
            >
              <div
                className={`mr-2 h-4 w-4 rounded-sm ${color.value}`}
              />
              <span>{color.name}</span>
              <span className="ml-auto text-xs text-muted-foreground">
                {color.hex}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}