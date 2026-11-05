import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the type for a single offer item
export interface Offer {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  brandLogoSrc: string;
  brandName: string;
  promoCode?: string;
  href: string;
}

interface OfferCardProps {
  offer: Offer;
}

// Named group (group/card) so hovering the carousel doesn't animate every card at once.
const OfferCard = React.forwardRef<HTMLAnchorElement, OfferCardProps>(({ offer }, ref) => (
  <motion.a
    ref={ref}
    href={offer.href}
    className="relative flex-shrink-0 w-[300px] h-[380px] rounded-2xl overflow-hidden group/card snap-start border border-border"
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    style={{ perspective: "1000px" }}
  >
    {/* Background Image */}
    <img
      src={offer.imageSrc}
      alt={offer.imageAlt}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-2/4 object-cover transition-transform duration-500 group-hover/card:scale-110"
    />
    {/* Card Content */}
    <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-card p-5 flex flex-col justify-between">
      <div className="space-y-2">
        <div className="flex items-center text-xs text-muted-foreground">
          <Tag className="w-4 h-4 mr-2 text-primary" />
          <span>{offer.tag}</span>
        </div>
        <h3 className="text-lg font-bold text-card-foreground leading-tight line-clamp-2">{offer.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-1">{offer.description}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-3">
          <img src={offer.brandLogoSrc} alt={`${offer.brandName} logo`} className="w-8 h-8 rounded-full bg-muted" />
          <div>
            <p className="text-xs font-semibold text-card-foreground">{offer.brandName}</p>
            {offer.promoCode && (
              <p className="text-xs text-muted-foreground">{offer.promoCode}</p>
            )}
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground transform transition-transform duration-300 group-hover/card:rotate-[-45deg] group-hover/card:bg-primary group-hover/card:text-primary-foreground">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  </motion.a>
));
OfferCard.displayName = "OfferCard";

export interface OfferCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  offers: Offer[];
}

const OfferCarousel = React.forwardRef<HTMLDivElement, OfferCarouselProps>(
  ({ offers, className, ...props }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
      const current = scrollContainerRef.current;
      if (!current) return;
      current.scrollBy({
        left: (direction === "left" ? -1 : 1) * current.clientWidth * 0.8,
        behavior: "smooth",
      });
    };

    return (
      <div ref={ref} className={cn("relative w-full group", className)} {...props}>
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300 hover:bg-background/80"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* pt-3 leaves room for the -8px hover lift so it isn't clipped by overflow */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pt-3 pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-10 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300 hover:bg-background/80"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    );
  }
);
OfferCarousel.displayName = "OfferCarousel";

export { OfferCarousel, OfferCard };
