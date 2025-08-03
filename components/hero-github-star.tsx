'use client';

import { useState } from 'react';
import { Star, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function HeroGitHubStar() {
    const [isStarred, setIsStarred] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleStarClick = async () => {
        setIsLoading(true);

        try {
            // Open GitHub repository in new tab
            window.open('https://github.com/AvinashSuthar/PaletteUI', '_blank');

            // Simulate star action
            setIsStarred(true);

            toast({
                title: "⭐ Thank you!",
                description: "Please star the repository on GitHub if you like this project!",
                duration: 4000,
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to open repository",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button
            size="lg"
            variant="outline"
            onClick={handleStarClick}
            disabled={isLoading}
            className="px-8 py-6 text-lg font-semibold border-2  flex justify-center items-center hover:border-yellow-400 hover:text-yellow-600 transition-all duration-300"
        >
            <Github className="mr-2 h-5 w-5" />
            
            Star on GitHub
        </Button>
    );
} 