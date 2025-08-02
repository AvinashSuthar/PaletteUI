'use client';

import { useState } from 'react';
import { Copy, Check, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { addToFavorites, removeFromFavorites, isFavorite } from '@/lib/favorites';
import { useEffect } from 'react';

interface ColorBlockProps {
  name: string;
  hex: string;
  value: string;
  type?: 'color' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
  className?: string;
  css: string;
}

export function ColorBlock({
  name,
  hex,
  value,
  type = 'color',
  size = 'md',
  showDetails = true,
  className,
  css
}: ColorBlockProps) {
  const [copied, setCopied] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(name));
  }, [name]);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFavorite = () => {
    if (favorite) {
      removeFromFavorites(name);
      setFavorite(false);
    } else {
      addToFavorites({ name, hex, value, type });
      setFavorite(true);
    }
  };

  const sizeClasses = {
    sm: 'h-16',
    md: 'h-24',
    lg: 'h-32'
  };

  // const textColor = ''; // You can implement dynamic text color if needed

  return (
    <div
      className={cn(
        'group relative rounded-lg  overflow-hidden border border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-lg',
        className
      )}
      style={
        type === 'color'
          ? { background: hex }
          : { background: css }
      }
    >
      <div
        className={cn(
          'relative w-full transition-all duration-300',
          sizeClasses[size]
        )}
      >
        <div className="absolute inset-0  bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="default"
            className={cn(
              'h-8 w-8 p-0  ',
              'bg-black/50 hover:bg-black/90 text-white'
            )}
            onClick={handleFavorite}
          >
            {favorite ? (
              <Heart className="h-4 w-4 fill-current" />
            ) : (
              <Heart className="h-4 w-4" />
            )}
          </Button>

          <Button
            size="sm"
            variant="secondary"
            className={cn(
              'h-8 w-8 p-0 backdrop-blur-sm',
              'bg-black/50 hover:bg-black/90 text-white'
            )}
            onClick={() => handleCopy(hex)}
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {showDetails && (
        <div className="p-1 bg-card w-full">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-xs text-foreground">{name}</p>
              <p className="text-xs text-muted-foreground">{hex}</p>
            </div>
            {/* <Button
              size="sm"
              variant="ghost"
              className="h-8 px-2 text-xs"
              onClick={() => handleCopy(type === 'color' ? hex : value)}
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button> */}
          </div>
        </div>
      )}
    </div>
  );
}