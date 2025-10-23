export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-bold">Schaakclub Kalken</h3>
          <div className="pt-4 text-sm text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} Schaakclub Kalken. Alle rechten
              voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
