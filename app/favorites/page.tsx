'use client';

import { useEffect, useState } from 'react';
import { ColorBlock } from '@/components/color-block';
import { getFavorites, type FavoriteColor } from '@/lib/favorites';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteColor[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setFavorites(getFavorites());
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setFavorites(getFavorites());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!mounted) {
    return null;
  }

  const colorFavorites = favorites.filter(f => f.type === 'color');
  const gradientFavorites = favorites.filter(f => f.type === 'gradient');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Favorites

          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Colors and gradients you've saved for later

          </p>

        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
            <p className="text-muted-foreground mb-6">
              Start exploring colors and click the heart icon to save your favorites
            </p>
            <Link href="/palette">
              <Button>
                <Sparkles className="mr-2 h-4 w-4" />
                Explore Palette
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-12">
            {colorFavorites.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <Heart className="mr-2 h-6 w-6" />
                  Favorite Colors ({colorFavorites.length})
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {colorFavorites.map((color) => (
                    <ColorBlock
                      key={color.name}
                      name={color.name}
                      hex={color.hex}
                      value={color.value}
                      type={color.type}
                    />
                  ))}
                </div>
              </div>
            )}

            {gradientFavorites.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <Sparkles className="mr-2 h-6 w-6" />
                  Favorite Gradients ({gradientFavorites.length})
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {gradientFavorites.map((gradient) => (
                    <ColorBlock
                      key={gradient.name}
                      name={gradient.name}
                      hex={gradient.hex}
                      value={gradient.value}
                      type={gradient.type}
                      size="lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}