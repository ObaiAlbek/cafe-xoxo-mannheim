import { Clock, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-primary/20 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Brand Name */}
        <div className="text-center mb-12">
          <h3 
            className="text-foreground mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', fontWeight: '600', letterSpacing: '-0.01em' }}
          >
            Café XOXO
          </h3>
          <p 
            className="text-primary"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.75rem' }}
          >
            Hugs & Kisses
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Opening Hours */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h4 
                className="text-foreground"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.125rem', fontWeight: '600' }}
              >
                Öffnungszeiten
              </h4>
            </div>
            <div 
              className="text-muted-foreground space-y-2"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1rem', lineHeight: '1.6' }}
            >
              <p>Montag - Samstag</p>
              <p className="text-foreground">9:00 - 15:00 Uhr</p>
              <p className="mt-3">Sonntag</p>
              <p className="text-foreground">10:00 - 15:00 Uhr</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h4 
                className="text-foreground"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.125rem', fontWeight: '600' }}
              >
                Besuche Uns
              </h4>
            </div>
            <div 
              className="text-muted-foreground space-y-2"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1rem', lineHeight: '1.6' }}
            >
              <p>N5, 15</p>
              <p>68161 Mannheim</p>
              
              <p>Deutschland</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Instagram className="w-5 h-5 text-primary" />
              <h4 
                className="text-foreground"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.125rem', fontWeight: '600' }}
              >
                Folge Uns
              </h4>
            </div>
            <div 
              className="text-muted-foreground"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1rem', lineHeight: '1.6' }}
            >
              <a 
                href="https://www.instagram.com/cafe_xoxo_hugsandkisses?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors inline-block font-medium"
              >
                @cafexoxo
              </a>
              <p className="mt-3 text-sm">
                Markiere uns in deinen Fotos! #CafeXOXO
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 my-12">
          <div className="h-px w-24 bg-primary/30"></div>
          <p 
            className="text-accent"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.75rem' }}
          >
            xoxo
          </p>
          <div className="h-px w-24 bg-primary/30"></div>
        </div>

        {/* Copyright */}
        <div 
          className="text-center text-muted-foreground"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.875rem' }}
        >
          <p>© 2026 Café XOXO Hugs & Kisses. Made With Love ✨</p>
        </div>
      </div>
    </footer>
  );
}