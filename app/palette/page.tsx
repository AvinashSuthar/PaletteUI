'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ColorBlock } from '@/components/color-block';
import { tailwindColors, tailwindGradients } from '@/lib/tailwind-colors';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Palette, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PalettePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('colors');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate color blocks on scroll
      // Kill previous ScrollTriggers and animations to avoid stacking
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf('.color-block');

      gsap.utils.toArray('.color-block').forEach((block: any, index) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 50, scale: 0.9 },
          {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 90%',
          toggleActions: 'play reverse play reverse',
          once: false,
        },
        delay: 0.04,
          }
        );
      });
        }, containerRef);

    return () => ctx.revert();
  }, [searchTerm, activeTab]);

  const filteredColors = tailwindColors.filter(palette =>
    palette.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    palette.shades.some(shade => 
      shade.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const filteredGradients = tailwindGradients.filter(gradient =>
    gradient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gradient.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Color Palette
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Explore all Tailwind CSS colors and gradients
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search colors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="colors" className="flex items-center space-x-2">
              <Palette className="h-4 w-4" />
              <span>Colors</span>
            </TabsTrigger>
            <TabsTrigger value="gradients" className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4" />
              <span>Gradients</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="colors">
            <div className="space-y-12">
              {filteredColors.map((palette) => (
                <div key={palette.name} className="space-y-2">
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4">
                    {palette.shades.map((shade) => (
                      <div key={shade.name} className="color-block">
                        <ColorBlock
                          name={shade.name}
                          hex={shade.hex}
                          value={shade.value}
                          type="color"
                          css=''
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))} 
            </div>
          </TabsContent>

          <TabsContent value="gradients">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGradients.map((gradient, index) => (
                <div key={gradient.name} className="color-block">
                  <ColorBlock
                    name={gradient.name}
                    hex={gradient.description}
                    className={cn(
                      'bg-gradient-to-r',
                      gradient.class
                    )}
                    value={gradient.class}
                    type="gradient"
                    size="lg"
                    css={gradient.css}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}