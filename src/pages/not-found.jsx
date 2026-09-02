export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
          404
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a 
          href="/"
          className="text-primary hover:text-primary/80 transition-colors border-b border-primary/30 hover:border-primary pb-1"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
