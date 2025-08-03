'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Palette, Heart } from 'lucide-react';
import Link from 'next/link';
import { HeroGitHubStar } from '@/components/hero-github-star';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const colorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial state
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set(colorsRef.current?.children || [], {
        opacity: 0,
        scale: 0,
        rotation: 180
      });

      // Animation sequence
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.5')
        .to(buttonsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.3')
        .to(colorsRef.current?.children || [], {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        }, '-=0.4');

      // Floating animation for color blocks
      gsap.to(colorsRef.current?.children || [], {
        y: -40,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power4.inOut',
        stagger: 0.2
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-black dark:via-purple-900/20 dark:to-black">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="text-5xl tracking-wide md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
          >
            Beautiful Color Palettes
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl font-mono md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Discover, copy, and organize Tailwind CSS colors with a modern, intuitive interface.
            Perfect for designers and developers.
          </p>

          <div className="flex relative z-10 flex-col sm:flex-row gap-4 justify-center items-center mb-16" ref={buttonsRef}>
            <Link href="/palette">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold">
                <Palette className="mr-2 h-5 w-5" />
                Explore Palette
              </Button>
            </Link>

            <Link href="/favorites">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold">
                <Heart className="mr-2 h-5 w-5" />
                View Favorites
              </Button>
            </Link>

            <HeroGitHubStar />
          </div>

          {/* Floating Color Blocks */}
          <div ref={colorsRef} className="flex justify-center items-center space-x-4 flex-wrap gap-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"></div>
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg"></div>
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 shadow-lg"></div>
            <div className="h-18 w-18 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 shadow-lg"></div>
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg"></div>
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/30 to-red-400/30 rounded-full blur-3xl"></div>
    </section>
  );
}