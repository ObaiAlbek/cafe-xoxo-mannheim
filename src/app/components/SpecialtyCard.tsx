interface Specialty {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface SpecialtyCardProps {
  specialty: Specialty;
}

export function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Image with shadow and hover effect */}
      <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
        <img
          src={specialty.image}
          alt={specialty.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle overlay for marble effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="text-center px-4">
        <h3 
          className="text-foreground mb-2"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: '600', letterSpacing: '-0.01em' }}
        >
          {specialty.name}
        </h3>
        <p 
          className="text-muted-foreground mb-3"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', lineHeight: '1.6' }}
        >
          {specialty.description}
        </p>
        <p 
          className="text-accent"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: '600' }}
        >
          {specialty.price}
        </p>
      </div>
    </div>
  );
}
