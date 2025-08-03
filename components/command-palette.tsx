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
import { useToast } from '@/hooks/use-toast';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

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
  const allColors = tailwindColors.map((p) => p.name)

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
          {allColors.slice(0, 10).map((name) => (
            <CommandItem
              key={name}
              onSelect={() => runCommand(() => {
                try {
                  navigator.clipboard.writeText(name);
                  toast({
                    title: "Copied to clipboard!",
                    description: `${name} has been copied to your clipboard.`,
                    duration: 3000,
                  });
                  router.push('/palette');
                } catch (error) {
                  toast({
                    title: "Copy failed",
                    description: "Unable to copy to clipboard. Please try again.",
                    variant: "destructive",
                    duration: 3000,
                  });
                }
              })}
            >
              <div
                className={`mr-2 h-4 w-4 rounded-sm `}
              />
              <span>{name}</span>
              <span className="ml-auto text-xs text-muted-foreground">
                {name}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}