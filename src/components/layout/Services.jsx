import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import {
  Monitor,
  FileText,
  Globe,
  Zap,
  Layers,
  Terminal,
  ArrowRight,
  Code2,
  ArrowUpRight,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   DESIGN SYSTEM TOKENS
   ═══════════════════════════════════════════════════════════════════════════ */

const DESIGN_TOKENS = {
  colors: {
    background: "#FAFBFF",
    surface: "#FFFFFF",
    text: {
      primary: "#0B1120",
      secondary: "#1E293B",
      tertiary: "#475569",
      muted: "#94A3B8",
      inverse: "#FFFFFF",
    },
    blue: {
      50: "#EFF6FF", 100: "#DBEAFE", 200: "#BFDBFE",
      300: "#93C5FD", 400: "#60A5FA", 500: "#3B82F6",
      600: "#2563EB", 700: "#1D4ED8", 800: "#1E40AF", 900: "#1E3A5F",
    },
    accent: {
      indigo: "#6366F1",
      amber: "#F59E0B",
      emerald: "#10B981",
      rose: "#FB7185",
      sky: "#38BDF8",
    },
  },
  borderRadius: {
    xs: "6px", sm: "8px", md: "12px", lg: "16px",
    xl: "20px", "2xl": "24px", "3xl": "32px", full: "9999px",
  },
  shadows: {
    xs: "0 1px 2px rgba(0,0,0,0.03)",
    sm: "0 2px 8px rgba(0,0,0,0.04)",
    md: "0 4px 16px rgba(0,0,0,0.06)",
    lg: "0 8px 32px rgba(0,0,0,0.07)",
    xl: "0 16px 48px rgba(0,0,0,0.08)",
  },
  animation: {
    duration: {
      fast: "0.2s",
      medium: "0.4s",
      slow: "0.7s",
    },
    easing: {
      smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICES DATA (Immutable)
   ═══════════════════════════════════════════════════════════════════════════ */

const SERVICES = [
  {
    icon: Monitor,
    title: "MERN Stack Development",
    description: "End-to-end scalable web applications built with the most in-demand JavaScript ecosystem.",
    tags: ["React.js", "Node.js", "MongoDB", "Express"],
    color: DESIGN_TOKENS.colors.blue[500],
    background: DESIGN_TOKENS.colors.blue[50],
  },
  {
    icon: FileText,
    title: "ATS-Optimized Resumes",
    description: "Data-driven resumes engineered to bypass automated screening software and land interviews.",
    tags: ["Keyword Parsing", "Modern Layout", "ATS Compliant"],
    color: DESIGN_TOKENS.colors.accent.amber,
    background: "#FFFBEB",
  },
  {
    icon: Globe,
    title: "Portfolio Websites",
    description: "High-performance, visually striking portfolios that establish undeniable digital authority.",
    tags: ["Next.js", "Framer Motion", "SEO Ready"],
    color: DESIGN_TOKENS.colors.accent.indigo,
    background: "#EEF2FF",
  },
  {
    icon: Zap,
    title: "College Mini-Projects",
    description: "Industry-grade academic projects with clean architecture, complete documentation.",
    tags: ["Full Source Code", "Documentation", "Video Guides"],
    color: DESIGN_TOKENS.colors.accent.emerald,
    background: "#ECFDF5",
  },
  {
    icon: Layers,
    title: "UI/UX & Prototyping",
    description: "User-centric design systems and interactive Figma prototypes that bridge vision and development.",
    tags: ["Figma", "Design Systems", "User Flows"],
    color: DESIGN_TOKENS.colors.accent.rose,
    background: "#FFF1F2",
  },
  {
    icon: Terminal,
    title: "Backend Architecture",
    description: "Secure, high-throughput server infrastructures and complex database schema modeling.",
    tags: ["Python", "REST/GraphQL", "PostgreSQL"],
    color: DESIGN_TOKENS.colors.accent.sky,
    background: "#F0F9FF",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   CUSTOM HOOKS
   ═══════════════════════════════════════════════════════════════════════════ */

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
   }, [options.threshold, options.rootMargin]);

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { elementRef, isVisible };
};

/* ═══════════════════════════════════════════════════════════════════════════
   KEYFRAMES & GLOBAL STYLES
   ═══════════════════════════════════════════════════════════════════════════ */

let stylesInjected = false;

const injectGlobalStyles = () => {
  if (stylesInjected || typeof document === "undefined") return;
  stylesInjected = true;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes servicesFadeUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes servicesFadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive Grid */
    @media (min-width: 768px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 28px !important;
      }
    }

    @media (min-width: 1024px) {
      .services-grid {
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 32px !important;
      }
    }

    @media (min-width: 1280px) {
      .services-grid {
        gap: 36px !important;
      }
      .services-cta {
        padding: 16px 40px !important;
        font-size: 15px !important;
      }
    }

    @media (max-width: 479px) {
      .services-grid {
        gap: 18px !important;
      }
    }

    /* Reduced Motion Support */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;
  document.head.appendChild(styleSheet);
};

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICE CARD COMPONENT (Memoized)
   ═══════════════════════════════════════════════════════════════════════════ */

const ServiceCard = memo(({ service, index, isVisible }) => {
  const Icon = service.icon;
  const [isHovered, setIsHovered] = useState(false);
  const animationDelay = `${index * 100}ms`;

  const cardStyles = {
    position: "relative",
    background: DESIGN_TOKENS.colors.surface,
    borderRadius: DESIGN_TOKENS.borderRadius["2xl"],
    border: `1px solid ${isHovered ? `${service.color}20` : `${DESIGN_TOKENS.colors.blue[100]}35`}`,
    borderTop: `3px solid ${isHovered ? service.color : "transparent"}`,
    padding: "clamp(24px, 2vw, 32px)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    boxShadow: isHovered ? DESIGN_TOKENS.shadows.xl : DESIGN_TOKENS.shadows.sm,
    overflow: "hidden",
    cursor: "pointer",
    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
    opacity: isVisible ? 1 : 0,
    transition: `all ${DESIGN_TOKENS.animation.duration.medium} ${DESIGN_TOKENS.animation.easing.smooth}`,
    animation: isVisible
      ? `servicesFadeUp ${DESIGN_TOKENS.animation.duration.slow} ${DESIGN_TOKENS.animation.easing.smooth} ${animationDelay} both`
      : "none",
  };

  return (
    <div
      style={cardStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Service: ${service.title}`}
    >
      {/* Icon Wrapper */}
      <div
        style={{
          width: "54px",
          height: "54px",
          borderRadius: DESIGN_TOKENS.borderRadius.xl,
          background: `${service.color}10`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: `transform ${DESIGN_TOKENS.animation.duration.medium} ${DESIGN_TOKENS.animation.easing.bounce}`,
          transform: isHovered ? "scale(1.1) rotate(-3deg)" : "scale(1) rotate(0deg)",
        }}
      >
        <Icon size={24} color={service.color} strokeWidth={1.8} aria-hidden="true" />
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: "clamp(17px, 1.5vw, 19px)",
            fontWeight: 700,
            color: DESIGN_TOKENS.colors.text.primary,
            marginBottom: "10px",
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontSize: "13.5px",
            lineHeight: 1.75,
            color: DESIGN_TOKENS.colors.text.tertiary,
            margin: 0,
          }}
        >
          {service.description}
        </p>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
        {service.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: service.color,
              background: `${service.color}0D`,
              padding: "5px 12px",
              borderRadius: DESIGN_TOKENS.borderRadius.full,
              letterSpacing: "0.02em",
              border: `1px solid ${service.color}15`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom Link */}
      <div
        style={{
          marginTop: "4px",
          paddingTop: "16px",
          borderTop: `1px solid ${DESIGN_TOKENS.colors.blue[100]}25`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span 
          style={{ 
            fontSize: "13.5px", 
            fontWeight: 600, 
            color: DESIGN_TOKENS.colors.text.secondary,
            transition: `color ${DESIGN_TOKENS.animation.duration.fast} ${DESIGN_TOKENS.animation.easing.smooth}`,
          }}
        >
          Learn More
        </span>
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: DESIGN_TOKENS.borderRadius.full,
            background: isHovered ? service.color : `${DESIGN_TOKENS.colors.blue[500]}08`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: `transform ${DESIGN_TOKENS.animation.duration.medium} ${DESIGN_TOKENS.animation.easing.smooth}`,
            transform: isHovered ? "translate(3px, -3px)" : "translate(0, 0)",
          }}
        >
          <ArrowUpRight
            size={15}
            color={isHovered ? DESIGN_TOKENS.colors.text.inverse : DESIGN_TOKENS.colors.text.tertiary}
            style={{
              transition: `color ${DESIGN_TOKENS.animation.duration.fast} ${DESIGN_TOKENS.animation.easing.smooth}`,
            }}
          />
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN SERVICES COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

const Services = () => {
  const { elementRef: sectionRef, isVisible: isSectionVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px",
  });

  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  // Inject global styles once on mount
  useEffect(() => {
    injectGlobalStyles();
  }, []);

  // Handle visibility animations
const hasAnimatedRef = useRef(false);

useEffect(() => {
  if (!isSectionVisible) return;
  if (hasAnimatedRef.current) return;

  hasAnimatedRef.current = true;

  requestAnimationFrame(() => {
    setHeaderVisible(true);

    setTimeout(() => {
      setCardsVisible(true);
    }, 250);
  });

}, [isSectionVisible]);

  const handleContactClick = useCallback((event) => {
    event.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-label="Our Services"
      style={{
        position: "relative",
        background: `linear-gradient(180deg, ${DESIGN_TOKENS.colors.surface} 0%, ${DESIGN_TOKENS.colors.background} 10%, ${DESIGN_TOKENS.colors.background} 90%, ${DESIGN_TOKENS.colors.surface} 100%)`,
        padding: "clamp(80px, 10vw, 120px) 0",
        overflow: "hidden",
      }}
    >
      {/* Background Ornaments */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "-8%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${DESIGN_TOKENS.colors.blue[400]}05 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "-8%",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${DESIGN_TOKENS.colors.accent.indigo}05 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 1.5rem)",
        }}
      >
        {/* Section Header */}
        <header
          style={{
            textAlign: "center",
            maxWidth: "650px",
            margin: `0 auto clamp(48px, 6vw, 72px)`,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: `all ${DESIGN_TOKENS.animation.duration.slow} ${DESIGN_TOKENS.animation.easing.smooth}`,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 18px 7px 8px",
              borderRadius: DESIGN_TOKENS.borderRadius.full,
              border: `1px solid ${DESIGN_TOKENS.colors.blue[200]}60`,
              background: `linear-gradient(135deg, ${DESIGN_TOKENS.colors.blue[50]}, ${DESIGN_TOKENS.colors.surface})`,
              marginBottom: "24px",
              boxShadow: DESIGN_TOKENS.shadows.xs,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${DESIGN_TOKENS.colors.blue[500]}, ${DESIGN_TOKENS.colors.blue[600]})`,
              }}
            >
              <Code2 size={11} color="#FFFFFF" strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span
              style={{
                color: DESIGN_TOKENS.colors.blue[700],
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Premium Services
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.1rem, 4.5vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              color: DESIGN_TOKENS.colors.text.primary,
              marginBottom: "18px",
            }}
          >
            Enterprise-Grade{" "}
            <span
              style={{
                backgroundImage: `linear-gradient(135deg, ${DESIGN_TOKENS.colors.blue[500]} 0%, ${DESIGN_TOKENS.colors.accent.indigo} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Solutions
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 1.25vw, 16px)",
              lineHeight: 1.8,
              color: DESIGN_TOKENS.colors.text.tertiary,
              margin: 0,
            }}
          >
            Combining technical excellence with modern design principles to deliver
            scalable solutions that perform exceptionally under pressure.
          </p>
        </header>

        {/* Services Grid */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "24px",
          }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={cardsVisible}
            />
          ))}
        </div>

        {/* Call to Action - UPDATED BUTTON COLOR TO BLUE */}
        <div
          style={{
            textAlign: "center",
            marginTop: "clamp(56px, 7vw, 80px)",
            opacity: cardsVisible ? 1 : 0,
            transform: cardsVisible ? "translateY(0)" : "translateY(20px)",
            transition: `all ${DESIGN_TOKENS.animation.duration.slow} ${DESIGN_TOKENS.animation.easing.smooth} 0.8s`,
          }}
        >
          <p
            style={{
              fontSize: "14.5px",
              color: DESIGN_TOKENS.colors.text.muted,
              marginBottom: "20px",
              fontWeight: 500,
            }}
          >
            Need a custom solution? We handle enterprise-scale projects too.
          </p>
          <a
            href="#contact"
            onClick={handleContactClick}
            className="services-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "15px 34px",
              borderRadius: DESIGN_TOKENS.borderRadius.full,
              background: `linear-gradient(135deg, ${DESIGN_TOKENS.colors.blue[500]} 0%, ${DESIGN_TOKENS.colors.blue[600]} 100%)`,
              color: DESIGN_TOKENS.colors.text.inverse,
              fontSize: "14.5px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: `0 4px 20px ${DESIGN_TOKENS.colors.blue[500]}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
              transition: `all ${DESIGN_TOKENS.animation.duration.medium} ${DESIGN_TOKENS.animation.easing.smooth}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.background = `linear-gradient(135deg, ${DESIGN_TOKENS.colors.blue[600]} 0%, ${DESIGN_TOKENS.colors.blue[700]} 100%)`;
              e.currentTarget.style.boxShadow = `0 14px 40px ${DESIGN_TOKENS.colors.blue[500]}60, inset 0 1px 0 rgba(255,255,255,0.2)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = `linear-gradient(135deg, ${DESIGN_TOKENS.colors.blue[500]} 0%, ${DESIGN_TOKENS.colors.blue[600]} 100%)`;
              e.currentTarget.style.boxShadow = `0 4px 20px ${DESIGN_TOKENS.colors.blue[500]}40, inset 0 1px 0 rgba(255,255,255,0.2)`;
            }}
          >
            Start Your Project <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;