'use client';

import { useState } from 'react';
import { Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function GitHubStarButton() {
    const [isStarred, setIsStarred] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleStarClick = async () => {
        setIsLoading(true);

        try {
            // Open GitHub repository in new tab
            window.open('https://github.com/AvinashSuthar/PaletteUI', '_blank');

            // Simulate star action (since we can't actually star via API without authentication)
            setIsStarred(true);

            toast({
                title: "Repository opened!",
                description: "Please star the repository on GitHub if you like this project!",
                duration: 3000,
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
            variant="outline"
            size="sm"
            onClick={handleStarClick}
            disabled={isLoading}
            className="flex items-center space-x-2"
        >
            <Github className="mr-2 h-5 w-5" />
            <span className="hidden sm:inline">Star</span>
        </Button>
    );
} 