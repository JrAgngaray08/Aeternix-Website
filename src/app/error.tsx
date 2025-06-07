'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-background">
      <div className="bg-card p-8 rounded-lg shadow-xl max-w-md w-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-6 lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
        <h1 className="text-3xl font-bold mb-4 font-headline text-destructive">Oops! Something Went Wrong</h1>
        <p className="mb-6 text-muted-foreground">
          We're sorry, but an unexpected error occurred. Our team has been notified.
        </p>
        {error?.message && (
          <p className="mb-6 text-sm text-muted-foreground bg-muted p-3 rounded-md">
            <span className="font-semibold">Error details:</span> {error.message}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => reset()}
            variant="outline"
            className="w-full sm:w-auto"
          >
            Try Again
          </Button>
          <Button asChild className="w-full sm:w-auto">
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
