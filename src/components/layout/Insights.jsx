// Insights.jsx - Professional Blog Component
import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ChevronRight,
  TrendingUp,
  Code2,
  Briefcase,
  Users,
  Zap,
  Heart,
  BookOpen,
  MessageCircle,
  Share2,
  ThumbsUp,
  Eye,
  ArrowRight,
  Sparkles,
  Lightbulb,
  Rocket,
  Award,
  BarChart3,
  Globe,
  Search,
  Filter,
  X,
  Bookmark,
  Link2,
  CheckCircle,
  AlertCircle,
  PlayCircle,
  FileText,
  Layers,
  Grid,
  List,
  Filter as FilterIcon,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   DESIGN SYSTEM - CONFIGURATION
   ═══════════════════════════════════════════════════════════════════════════ */
const DESIGN_TOKENS = {
  colors: {
    primary: {
      50: "#EFF6FF",
      100: "#DBEAFE",
      200: "#BFDBFE",
      300: "#93C5FD",
      400: "#60A5FA",
      500: "#3B82F6",
      600: "#2563EB",
      700: "#1D4ED8",
      800: "#1E40AF",
      900: "#1E3A5F",
    },
    secondary: {
      50: "#F5F3FF",
      100: "#EDE9FE",
      200: "#DDD6FE",
      300: "#C4B5FD",
      400: "#A78BFA",
      500: "#8B5CF6",
      600: "#7C3AED",
    },
    accent: {
      50: "#FFFBEB",
      100: "#FEF3C7",
      200: "#FDE68A",
      300: "#FCD34D",
      400: "#FBBF24",
      500: "#F59E0B",
    },
    success: {
      50: "#ECFDF5",
      100: "#D1FAE5",
      500: "#10B981",
      600: "#059669",
    },
    neutral: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    surface: "#FFFFFF",
  },
  typography: {
    fontFamily: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      display: "'Syne', 'Inter', sans-serif",
    },
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.25rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    lg: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    xl: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    hover: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  animation: {
    fadeUp: "fadeUp 0.5s ease forwards",
    fadeIn: "fadeIn 0.3s ease forwards",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   SOCIAL ICONS COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */
const SocialIcon = ({ icon: Icon, color, size = 14, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} />
);

const Facebook = (props) => <SocialIcon icon="facebook" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></SocialIcon>;
const LinkedIn = (props) => <SocialIcon icon="linkedin" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></SocialIcon>;
const Twitter = (props) => <SocialIcon icon="twitter" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></SocialIcon>;

/* ═══════════════════════════════════════════════════════════════════════════
   BLOG DATA - CONSTANTS
   ═══════════════════════════════════════════════════════════════════════════ */
const BLOG_POSTS = [
  {
    id: 1,
    title: "Complete Guide to ATS-Friendly Resumes",
    excerpt: "Master resume optimization for Applicant Tracking Systems with proven strategies that increase interview calls by 3x.",
    category: "Career",
    categoryColor: DESIGN_TOKENS.colors.accent[500],
    categoryBg: DESIGN_TOKENS.colors.accent[50],
    author: { name: "Sarah Johnson", avatar: "SJ", role: "Career Coach" },
    date: "2024-12-15",
    readTime: "8 min",
    views: 12450,
    likes: 342,
    tags: ["Resume", "Job Search"],
    featured: true,
    trending: true,
    type: "guide",
  },
  {
    id: 2,
    title: "MERN Stack Best Practices for Scale",
    excerpt: "Production-ready patterns and practices for building scalable MERN applications that handle millions of users.",
    category: "Development",
    categoryColor: DESIGN_TOKENS.colors.primary[500],
    categoryBg: DESIGN_TOKENS.colors.primary[50],
    author: { name: "Michael Chen", avatar: "MC", role: "Senior Architect" },
    date: "2024-12-12",
    readTime: "12 min",
    views: 8920,
    likes: 267,
    tags: ["MERN", "React", "Node.js"],
    featured: false,
    trending: true,
    type: "tutorial",
  },
  {
    id: 3,
    title: "Portfolio That Gets You Hired",
    excerpt: "Real examples and templates for creating developer portfolios that stand out to recruiters.",
    category: "Portfolio",
    categoryColor: DESIGN_TOKENS.colors.secondary[500],
    categoryBg: DESIGN_TOKENS.colors.secondary[50],
    author: { name: "Emily Rodriguez", avatar: "ER", role: "UX Lead" },
    date: "2024-12-10",
    readTime: "6 min",
    views: 5670,
    likes: 189,
    tags: ["Portfolio", "Branding"],
    featured: false,
    trending: false,
    type: "article",
  },
  {
    id: 4,
    title: "Technical Interview Masterclass",
    excerpt: "Complete guide to cracking FAANG interviews - algorithms, system design, and behavioral questions.",
    category: "Interview",
    categoryColor: DESIGN_TOKENS.colors.success[500],
    categoryBg: DESIGN_TOKENS.colors.success[50],
    author: { name: "David Kim", avatar: "DK", role: "Interview Coach" },
    date: "2024-12-08",
    readTime: "15 min",
    views: 15320,
    likes: 567,
    tags: ["Interview", "Algorithms"],
    featured: true,
    trending: true,
    type: "masterclass",
  },
  {
    id: 5,
    title: "Freelancing vs Full-Time Analysis",
    excerpt: "Data-driven comparison of freelancing versus traditional employment for developers in 2024.",
    category: "Career",
    categoryColor: DESIGN_TOKENS.colors.accent[500],
    categoryBg: DESIGN_TOKENS.colors.accent[50],
    author: { name: "Lisa Wang", avatar: "LW", role: "Career Strategist" },
    date: "2024-12-05",
    readTime: "10 min",
    views: 7340,
    likes: 245,
    tags: ["Freelancing", "Remote"],
    featured: false,
    trending: false,
    type: "analysis",
  },
  {
    id: 6,
    title: "VS Code Extensions for React",
    excerpt: "Essential VS Code extensions that boost React development productivity by 2x.",
    category: "Tools",
    categoryColor: DESIGN_TOKENS.colors.primary[400],
    categoryBg: DESIGN_TOKENS.colors.primary[50],
    author: { name: "Alex Turner", avatar: "AT", role: "Dev Advocate" },
    date: "2024-12-03",
    readTime: "5 min",
    views: 4210,
    likes: 156,
    tags: ["Tools", "Productivity"],
    featured: false,
    trending: false,
    type: "list",
  },
  {
    id: 7,
    title: "Microservices vs Monolith Decision Guide",
    excerpt: "Strategic framework for choosing between microservices and monolithic architectures.",
    category: "Development",
    categoryColor: DESIGN_TOKENS.colors.primary[500],
    categoryBg: DESIGN_TOKENS.colors.primary[50],
    author: { name: "James Wilson", avatar: "JW", role: "Software Architect" },
    date: "2024-11-28",
    readTime: "18 min",
    views: 6120,
    likes: 234,
    tags: ["Architecture", "System Design"],
    featured: false,
    trending: true,
    type: "deep-dive",
  },
  {
    id: 8,
    title: "Building Accessible Web Apps",
    excerpt: "Practical guide to creating inclusive web experiences that comply with WCAG guidelines.",
    category: "Development",
    categoryColor: DESIGN_TOKENS.colors.primary[500],
    categoryBg: DESIGN_TOKENS.colors.primary[50],
    author: { name: "Maria Garcia", avatar: "MG", role: "A11y Specialist" },
    date: "2024-11-25",
    readTime: "9 min",
    views: 3890,
    likes: 145,
    tags: ["Accessibility", "WCAG"],
    featured: false,
    trending: false,
    type: "guide",
  },
];

const CATEGORIES = [
  { id: "all", name: "All", count: 8, icon: BookOpen, color: DESIGN_TOKENS.colors.primary[500] },
  { id: "development", name: "Development", count: 3, icon: Code2, color: DESIGN_TOKENS.colors.primary[500] },
  { id: "career", name: "Career", count: 2, icon: Briefcase, color: DESIGN_TOKENS.colors.accent[500] },
  { id: "portfolio", name: "Portfolio", count: 1, icon: Globe, color: DESIGN_TOKENS.colors.secondary[500] },
  { id: "interview", name: "Interview", count: 1, icon: Users, color: DESIGN_TOKENS.colors.success[500] },
  { id: "tools", name: "Tools", count: 1, icon: Layers, color: DESIGN_TOKENS.colors.primary[400] },
];

/* ═══════════════════════════════════════════════════════════════════════════
   UTILITY FUNCTIONS
   ═══════════════════════════════════════════════════════════════════════════ */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
};

const getShareUrl = (postId) => {
  if (typeof window === "undefined") return "";
  return `${window.location.origin}/insights/${postId}`;
};

/* ═══════════════════════════════════════════════════════════════════════════
   STYLES - CSS-IN-JS
   ═══════════════════════════════════════════════════════════════════════════ */
const GlobalStyles = () => (
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { 
        animation-duration: 0.01ms !important; 
        transition-duration: 0.01ms !important; 
      }
    }
  `}</style>
);

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS - SEARCH BAR
   ═══════════════════════════════════════════════════════════════════════════ */
const SearchBar = ({ onSearch, placeholder = "Search articles..." }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSearch(query);
  }, [query, onSearch]);
  
  const handleClear = useCallback(() => {
    setQuery("");
    onSearch("");
  }, [onSearch]);
  
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "320px" }}>
      <div style={{ position: "relative" }}>
        <Search 
          size={16} 
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            color: isFocused ? DESIGN_TOKENS.colors.primary[500] : DESIGN_TOKENS.colors.neutral[400],
            transition: "color 0.2s",
            pointerEvents: "none",
          }} 
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          aria-label="Search articles"
          style={{
            width: "100%",
            padding: "10px 12px 10px 38px",
            borderRadius: DESIGN_TOKENS.borderRadius.lg,
            border: `1px solid ${isFocused ? DESIGN_TOKENS.colors.primary[300] : DESIGN_TOKENS.colors.neutral[200]}`,
            background: DESIGN_TOKENS.colors.surface,
            fontSize: "14px",
            outline: "none",
            transition: "all 0.2s",
            boxShadow: isFocused ? `0 0 0 3px ${DESIGN_TOKENS.colors.primary[100]}` : "none",
          }}
        />
        {query && (
          <button 
            type="button" 
            onClick={handleClear}
            aria-label="Clear search"
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: DESIGN_TOKENS.colors.neutral[400],
              padding: "4px",
              borderRadius: DESIGN_TOKENS.borderRadius.sm,
            }}
          >
            <X size={14} />
          </button>
        )}
      </div>
    </form>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS - CATEGORY FILTER
   ═══════════════════════════════════════════════════════════════════════════ */
const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const handleCategorySelect = useCallback((category) => {
    onCategoryChange(category);
    setIsMobileOpen(false);
  }, [onCategoryChange]);
  
  return (
    <div style={{ position: "relative" }}>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(prev => !prev)}
        className="mobile-filter-toggle"
        aria-label="Toggle category filter"
        style={{
          display: "none",
          alignItems: "center",
          gap: "8px",
          padding: "8px 16px",
          borderRadius: DESIGN_TOKENS.borderRadius.lg,
          border: `1px solid ${DESIGN_TOKENS.colors.neutral[200]}`,
          background: DESIGN_TOKENS.colors.surface,
          fontSize: "13px",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        <FilterIcon size={14} />
        {activeCategory?.name || "Filter"}
      </button>
      
      {/* Category List */}
      <div
        className="category-list"
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category)}
            aria-pressed={activeCategory?.id === category.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              borderRadius: DESIGN_TOKENS.borderRadius.full,
              background: activeCategory?.id === category.id ? category.color : DESIGN_TOKENS.colors.surface,
              color: activeCategory?.id === category.id ? "#FFF" : DESIGN_TOKENS.colors.neutral[600],
              border: activeCategory?.id === category.id ? "none" : `1px solid ${DESIGN_TOKENS.colors.neutral[200]}`,
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              transition: DESIGN_TOKENS.transition,
            }}
          >
            <category.icon size={12} />
            {category.name}
            <span style={{ fontSize: "11px", opacity: 0.8 }}>({category.count})</span>
          </button>
        ))}
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .mobile-filter-toggle { display: flex !important; }
          .category-list { 
            display: ${isMobileOpen ? "flex" : "none"} !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: ${DESIGN_TOKENS.colors.surface};
            padding: 16px;
            border-radius: ${DESIGN_TOKENS.borderRadius.lg};
            box-shadow: ${DESIGN_TOKENS.shadows.xl};
            z-index: 50;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS - VIEW TOGGLE
   ═══════════════════════════════════════════════════════════════════════════ */
const ViewToggle = ({ viewMode, onViewModeChange }) => (
  <div style={{
    display: "flex",
    gap: "4px",
    padding: "4px",
    background: DESIGN_TOKENS.colors.neutral[100],
    borderRadius: DESIGN_TOKENS.borderRadius.lg,
  }}>
    <button
      onClick={() => onViewModeChange("grid")}
      aria-pressed={viewMode === "grid"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 14px",
        borderRadius: DESIGN_TOKENS.borderRadius.md,
        background: viewMode === "grid" ? DESIGN_TOKENS.colors.surface : "transparent",
        border: "none",
        fontSize: "12px",
        fontWeight: 500,
        color: viewMode === "grid" ? DESIGN_TOKENS.colors.primary[600] : DESIGN_TOKENS.colors.neutral[500],
        cursor: "pointer",
        transition: DESIGN_TOKENS.transition,
        boxShadow: viewMode === "grid" ? DESIGN_TOKENS.shadows.sm : "none",
      }}
    >
      <Grid size={14} /> Grid
    </button>
    <button
      onClick={() => onViewModeChange("list")}
      aria-pressed={viewMode === "list"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 14px",
        borderRadius: DESIGN_TOKENS.borderRadius.md,
        background: viewMode === "list" ? DESIGN_TOKENS.colors.surface : "transparent",
        border: "none",
        fontSize: "12px",
        fontWeight: 500,
        color: viewMode === "list" ? DESIGN_TOKENS.colors.primary[600] : DESIGN_TOKENS.colors.neutral[500],
        cursor: "pointer",
        transition: DESIGN_TOKENS.transition,
        boxShadow: viewMode === "list" ? DESIGN_TOKENS.shadows.sm : "none",
      }}
    >
      <List size={14} /> List
    </button>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS - SHARE MENU
   ═══════════════════════════════════════════════════════════════════════════ */
const ShareMenu = ({ postId, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef(null);
  
  const shareUrl = getShareUrl(postId);
  
  const shareOptions = [
    { icon: LinkedIn, label: "LinkedIn", url: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, color: "#0077B5" },
    { icon: Twitter, label: "Twitter", url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`, color: "#1DA1F2" },
    { icon: Facebook, label: "Facebook", url: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, color: "#4267B2" },
  ];
  
  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  }, [shareUrl]);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);
  
  return (
    <div ref={menuRef} style={{ position: "relative" }}>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Share article"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: DESIGN_TOKENS.colors.neutral[400],
          padding: "4px",
          borderRadius: DESIGN_TOKENS.borderRadius.sm,
        }}
      >
        <Share2 size={14} />
      </button>
      
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "100%",
            right: 0,
            marginBottom: "8px",
            background: DESIGN_TOKENS.colors.surface,
            borderRadius: DESIGN_TOKENS.borderRadius.lg,
            border: `1px solid ${DESIGN_TOKENS.colors.neutral[200]}`,
            boxShadow: DESIGN_TOKENS.shadows.lg,
            minWidth: "130px",
            overflow: "hidden",
            zIndex: 100,
          }}
        >
          {shareOptions.map(option => (
            <a
              key={option.label}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 14px",
                textDecoration: "none",
                color: DESIGN_TOKENS.colors.neutral[700],
                fontSize: "12px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = DESIGN_TOKENS.colors.neutral[50]}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <option.icon size={12} color={option.color} />
              {option.label}
            </a>
          ))}
          <button
            onClick={handleCopyLink}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              padding: "8px 14px",
              background: "none",
              border: "none",
              borderTop: `1px solid ${DESIGN_TOKENS.colors.neutral[100]}`,
              cursor: "pointer",
              color: DESIGN_TOKENS.colors.neutral[700],
              fontSize: "12px",
            }}
          >
            <Link2 size={12} />
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS - BLOG CARD
   ═══════════════════════════════════════════════════════════════════════════ */
const BlogCard = ({ post, viewMode = "grid", onLike, onSave }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [isSaved, setIsSaved] = useState(false);
  
  const handleLike = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    setLikesCount(prev => newLikedState ? prev + 1 : prev - 1);
    onLike?.(post.id, newLikedState);
  }, [isLiked, post.id, onLike]);
  
  const handleSave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);
    onSave?.(post.id, newSavedState);
  }, [isSaved, post.id, onSave]);
  
  if (viewMode === "list") {
    return (
      <article
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: "flex",
          gap: "20px",
          background: DESIGN_TOKENS.colors.surface,
          borderRadius: DESIGN_TOKENS.borderRadius.xl,
          border: `1px solid ${isHovered ? DESIGN_TOKENS.colors.primary[200] : DESIGN_TOKENS.colors.neutral[200]}`,
          transition: DESIGN_TOKENS.transition,
          cursor: "pointer",
          overflow: "hidden",
          boxShadow: isHovered ? DESIGN_TOKENS.shadows.hover : DESIGN_TOKENS.shadows.sm,
        }}
      >
        <div style={{
          flexShrink: 0,
          width: "200px",
          background: `linear-gradient(135deg, ${post.categoryBg}, ${DESIGN_TOKENS.colors.neutral[100]})`,
          position: "relative",
          overflow: "hidden",
        }}>
          <span style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            padding: "2px 8px",
            borderRadius: DESIGN_TOKENS.borderRadius.full,
            background: post.categoryBg,
            color: post.categoryColor,
            fontSize: "10px",
            fontWeight: 600,
          }}>
            {post.category}
          </span>
          {post.trending && (
            <span style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              padding: "2px 8px",
              borderRadius: DESIGN_TOKENS.borderRadius.full,
              background: "#FEE2E2",
              color: "#DC2626",
              fontSize: "9px",
              fontWeight: 600,
            }}>
              🔥 Trending
            </span>
          )}
        </div>
        
        <div style={{ flex: 1, padding: "16px 16px 16px 0", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", fontSize: "11px", color: DESIGN_TOKENS.colors.neutral[500] }}>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Calendar size={10} />
              {formatDate(post.date)}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={10} />
              {post.readTime}
            </span>
          </div>
          
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: DESIGN_TOKENS.colors.neutral[900], marginBottom: "8px" }}>
            {post.title}
          </h3>
          
          <p style={{
            fontSize: "13px",
            lineHeight: 1.5,
            color: DESIGN_TOKENS.colors.neutral[600],
            marginBottom: "12px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {post.excerpt}
          </p>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${post.categoryColor}, ${post.categoryColor}80)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFF",
                fontSize: "10px",
                fontWeight: 600,
              }}>
                {post.author.avatar}
              </div>
              <div>
                <div style={{ fontSize: "11px", fontWeight: 600 }}>{post.author.name}</div>
                <div style={{ fontSize: "9px", color: DESIGN_TOKENS.colors.neutral[500] }}>{post.author.role}</div>
              </div>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                onClick={handleLike}
                aria-label="Like article"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: isLiked ? "#EF4444" : DESIGN_TOKENS.colors.neutral[400],
                  fontSize: "10px",
                }}
              >
                <ThumbsUp size={10} fill={isLiked ? "#EF4444" : "none"} />
                <span>{likesCount}</span>
              </button>
              
              <ShareMenu postId={post.id} title={post.title} />
              
              <button
                onClick={handleSave}
                aria-label="Save article"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: isSaved ? DESIGN_TOKENS.colors.secondary[500] : DESIGN_TOKENS.colors.neutral[400],
                }}
              >
                <Bookmark size={12} fill={isSaved ? DESIGN_TOKENS.colors.secondary[500] : "none"} />
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }
  
  // Grid view
  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: DESIGN_TOKENS.colors.surface,
        borderRadius: DESIGN_TOKENS.borderRadius.xl,
        border: `1px solid ${isHovered ? DESIGN_TOKENS.colors.primary[200] : DESIGN_TOKENS.colors.neutral[200]}`,
        transition: DESIGN_TOKENS.transition,
        cursor: "pointer",
        overflow: "hidden",
        boxShadow: isHovered ? DESIGN_TOKENS.shadows.hover : DESIGN_TOKENS.shadows.sm,
        transform: isHovered ? "translateY(-2px)" : "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{
        height: "140px",
        background: `linear-gradient(135deg, ${post.categoryBg}, ${DESIGN_TOKENS.colors.neutral[100]})`,
        position: "relative",
        overflow: "hidden",
      }}>
        <span style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          padding: "2px 8px",
          borderRadius: DESIGN_TOKENS.borderRadius.full,
          background: post.categoryBg,
          color: post.categoryColor,
          fontSize: "10px",
          fontWeight: 600,
        }}>
          {post.category}
        </span>
        {post.trending && (
          <span style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "2px 8px",
            borderRadius: DESIGN_TOKENS.borderRadius.full,
            background: "#FEE2E2",
            color: "#DC2626",
            fontSize: "9px",
            fontWeight: 600,
          }}>
            🔥 Trending
          </span>
        )}
        {isHovered && (
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
            backgroundSize: "200% 100%",
            animation: "shimmer 0.6s ease-in-out",
            pointerEvents: "none",
          }} />
        )}
      </div>
      
      <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", fontSize: "10px", color: DESIGN_TOKENS.colors.neutral[500] }}>
          <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <Calendar size={9} />
            {formatDate(post.date)}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <Clock size={9} />
            {post.readTime}
          </span>
        </div>
        
        <h3 style={{
          fontSize: "15px",
          fontWeight: 700,
          lineHeight: 1.4,
          color: DESIGN_TOKENS.colors.neutral[900],
          marginBottom: "8px",
          fontFamily: DESIGN_TOKENS.typography.fontFamily.display,
        }}>
          {post.title}
        </h3>
        
        <p style={{
          fontSize: "12px",
          lineHeight: 1.5,
          color: DESIGN_TOKENS.colors.neutral[600],
          marginBottom: "14px",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {post.excerpt}
        </p>
        
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "auto",
          paddingTop: "12px",
          borderTop: `1px solid ${DESIGN_TOKENS.colors.neutral[100]}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${post.categoryColor}, ${post.categoryColor}80)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF",
              fontSize: "9px",
              fontWeight: 600,
            }}>
              {post.author.avatar}
            </div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 600 }}>{post.author.name}</div>
            </div>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              onClick={handleLike}
              aria-label="Like article"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: isLiked ? "#EF4444" : DESIGN_TOKENS.colors.neutral[400],
                fontSize: "9px",
              }}
            >
              <ThumbsUp size={9} fill={isLiked ? "#EF4444" : "none"} />
              <span>{likesCount}</span>
            </button>
            
            <ShareMenu postId={post.id} title={post.title} />
            
            <button
              onClick={handleSave}
              aria-label="Save article"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: isSaved ? DESIGN_TOKENS.colors.secondary[500] : DESIGN_TOKENS.colors.neutral[400],
              }}
            >
              <Bookmark size={10} fill={isSaved ? DESIGN_TOKENS.colors.secondary[500] : "none"} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS - FEATURED POST
   ═══════════════════════════════════════════════════════════════════════════ */
const FeaturedPost = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: `linear-gradient(135deg, ${DESIGN_TOKENS.colors.surface}, ${DESIGN_TOKENS.colors.neutral[50]})`,
        borderRadius: DESIGN_TOKENS.borderRadius["2xl"],
        border: `1px solid ${DESIGN_TOKENS.colors.neutral[200]}`,
        overflow: "hidden",
        transition: DESIGN_TOKENS.transition,
        boxShadow: isHovered ? DESIGN_TOKENS.shadows.hover : DESIGN_TOKENS.shadows.md,
        transform: isHovered ? "translateY(-2px)" : "none",
        marginBottom: "32px",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", padding: "24px" }}>
        <div style={{ flex: 1, minWidth: "240px" }}>
          <div style={{ marginBottom: "12px" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 12px",
              borderRadius: DESIGN_TOKENS.borderRadius.full,
              background: DESIGN_TOKENS.colors.accent[100],
              color: DESIGN_TOKENS.colors.accent[700],
              fontSize: "11px",
              fontWeight: 700,
            }}>
              <Rocket size={12} /> Featured
            </span>
          </div>
          
          <h2 style={{
            fontSize: "clamp(20px, 3vw, 26px)",
            fontWeight: 800,
            lineHeight: 1.3,
            color: DESIGN_TOKENS.colors.neutral[900],
            marginBottom: "12px",
            fontFamily: DESIGN_TOKENS.typography.fontFamily.display,
          }}>
            {post.title}
          </h2>
          
          <p style={{
            fontSize: "14px",
            lineHeight: 1.6,
            color: DESIGN_TOKENS.colors.neutral[600],
            marginBottom: "16px",
          }}>
            {post.excerpt}
          </p>
          
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${post.categoryColor}, ${post.categoryColor}80)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFF",
                fontWeight: 600,
                fontSize: "12px",
              }}>
                {post.author.avatar}
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700 }}>{post.author.name}</div>
                <div style={{ fontSize: "11px", color: DESIGN_TOKENS.colors.neutral[500] }}>{post.author.role}</div>
              </div>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "11px", color: DESIGN_TOKENS.colors.neutral[500] }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Calendar size={11} />
                {formatDate(post.date)}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Clock size={11} />
                {post.readTime}
              </span>
            </div>
          </div>
          
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: DESIGN_TOKENS.borderRadius.lg,
              background: DESIGN_TOKENS.colors.primary[600],
              color: "#FFF",
              border: "none",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: DESIGN_TOKENS.transition,
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = DESIGN_TOKENS.colors.primary[700]}
            onMouseLeave={(e) => e.currentTarget.style.background = DESIGN_TOKENS.colors.primary[600]}
          >
            Read Article <ArrowRight size={12} />
          </button>
        </div>
        
        <div style={{
          width: "200px",
          height: "160px",
          background: `linear-gradient(135deg, ${post.categoryBg}, ${DESIGN_TOKENS.colors.neutral[100]})`,
          borderRadius: DESIGN_TOKENS.borderRadius.xl,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}>
          <Lightbulb size={48} color={post.categoryColor} opacity={0.3} />
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN INSIGHTS COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
const Insights = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [visibleCount, setVisibleCount] = useState(9);
  const [isMounted, setIsMounted] = useState(false);
  const [posts, setPosts] = useState(BLOG_POSTS);
  
  // Mount animation
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    let filtered = [...posts];
    
    // Apply category filter
    if (activeCategory.id !== "all") {
      const categoryMap = {
        development: "Development",
        career: "Career",
        portfolio: "Portfolio",
        interview: "Interview",
        tools: "Tools",
      };
      filtered = filtered.filter(post => post.category === categoryMap[activeCategory.id]);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [posts, activeCategory, searchQuery]);
  
  // Paginated posts
  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;
  
  // Featured post
  const featuredPost = posts.find(post => post.featured);
  
  // Event handlers
  const handleSave = useCallback((postId, isSaved) => {
    setPosts(prev => prev.map(post =>
      post.id === postId ? { ...post, saved: isSaved } : post
    ));
  }, []);
  
  const handleLike = useCallback((postId, isLiked) => {
    setPosts(prev => prev.map(post =>
      post.id === postId
        ? { ...post, likes: isLiked ? post.likes + 1 : post.likes - 1 }
        : post
    ));
  }, []);
  
  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => prev + 6);
  }, []);
  
  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);
  
  const getAnimationDelay = (index) => `${index * 80 + 200}ms`;
  
  return (
    <>
      <GlobalStyles />
      
      <section
        id="insights"
        aria-labelledby="insights-title"
        style={{
          padding: "60px 1.5rem 80px",
          background: DESIGN_TOKENS.colors.neutral[50],
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Background Elements */}
        <div aria-hidden="true" style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none",
        }}>
          <div style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${DESIGN_TOKENS.colors.primary[100]}30, transparent 70%)`,
            filter: "blur(60px)",
          }} />
          <div style={{
            position: "absolute",
            bottom: "-10%",
            left: "-5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${DESIGN_TOKENS.colors.secondary[100]}20, transparent 70%)`,
            filter: "blur(60px)",
          }} />
        </div>
        
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          {/* Header Section */}
          <div style={{
            textAlign: "center",
            marginBottom: "40px",
            opacity: isMounted ? 1 : 0,
            animation: isMounted ? DESIGN_TOKENS.animation.fadeUp : "none",
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: DESIGN_TOKENS.borderRadius.full,
              background: `${DESIGN_TOKENS.colors.primary[100]}80`,
              marginBottom: "16px",
            }}>
              <BookOpen size={14} color={DESIGN_TOKENS.colors.primary[600]} />
              <span style={{
                fontSize: "12px",
                fontWeight: 700,
                color: DESIGN_TOKENS.colors.primary[700],
                letterSpacing: "0.05em",
              }}>
                INSIGHTS
              </span>
            </div>
            
            <h1 id="insights-title" style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: DESIGN_TOKENS.colors.neutral[900],
              marginBottom: "12px",
              fontFamily: DESIGN_TOKENS.typography.fontFamily.display,
            }}>
              Latest <span style={{ color: DESIGN_TOKENS.colors.primary[600] }}>Insights</span>
            </h1>
            
            <p style={{
              fontSize: "clamp(14px, 1.1vw, 16px)",
              color: DESIGN_TOKENS.colors.neutral[600],
              maxWidth: "560px",
              margin: "0 auto",
            }}>
              Expert articles, tutorials, and guides to level up your tech career
            </p>
          </div>
          
          {/* Controls Bar */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            marginBottom: "28px",
            padding: "12px 16px",
            background: DESIGN_TOKENS.colors.surface,
            borderRadius: DESIGN_TOKENS.borderRadius.xl,
            border: `1px solid ${DESIGN_TOKENS.colors.neutral[200]}`,
            opacity: isMounted ? 1 : 0,
            animation: isMounted ? DESIGN_TOKENS.animation.fadeUp : "none",
          }}>
            <SearchBar onSearch={setSearchQuery} />
            
            <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
              <CategoryFilter
                categories={CATEGORIES}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
              <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
            </div>
          </div>
          
          {/* Featured Post */}
          {featuredPost && activeCategory.id === "all" && !searchQuery && (
            <div style={{
              opacity: isMounted ? 1 : 0,
              animation: isMounted ? DESIGN_TOKENS.animation.fadeUp : "none",
            }}>
              <FeaturedPost post={featuredPost} />
            </div>
          )}
          
          {/* Results Info */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
            flexWrap: "wrap",
            gap: "10px",
          }}>
            <p style={{ fontSize: "13px", color: DESIGN_TOKENS.colors.neutral[500] }}>
              Showing <strong>{displayedPosts.length}</strong> of <strong>{filteredPosts.length}</strong> articles
            </p>
            
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 10px",
                  borderRadius: DESIGN_TOKENS.borderRadius.md,
                  background: DESIGN_TOKENS.colors.neutral[100],
                  border: "none",
                  fontSize: "11px",
                  color: DESIGN_TOKENS.colors.neutral[600],
                  cursor: "pointer",
                }}
              >
                Clear <X size={10} />
              </button>
            )}
          </div>
          
          {/* Posts Grid/List */}
          {displayedPosts.length === 0 ? (
            <div style={{
              textAlign: "center",
              padding: "60px 20px",
              background: DESIGN_TOKENS.colors.surface,
              borderRadius: DESIGN_TOKENS.borderRadius["2xl"],
              border: `1px solid ${DESIGN_TOKENS.colors.neutral[200]}`,
            }}>
              <Search size={40} color={DESIGN_TOKENS.colors.neutral[300]} />
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: DESIGN_TOKENS.colors.neutral[800], marginTop: "12px" }}>
                No results found
              </h3>
              <p style={{ fontSize: "13px", color: DESIGN_TOKENS.colors.neutral[500] }}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div style={{
              display: viewMode === "grid" ? "grid" : "flex",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              flexDirection: viewMode === "list" ? "column" : "row",
              gap: viewMode === "grid" ? "20px" : "16px",
            }}>
              {displayedPosts.map((post, index) => (
                <div
                  key={post.id}
                  style={{
                    opacity: isMounted ? 1 : 0,
                    animation: isMounted ? `fadeUp 0.4s ease ${getAnimationDelay(index)} forwards` : "none",
                  }}
                >
                  <BlogCard
                    post={post}
                    viewMode={viewMode}
                    onLike={handleLike}
                    onSave={handleSave}
                  />
                </div>
              ))}
            </div>
          )}
          
          {/* Load More Button */}
          {hasMore && (
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <button
                onClick={handleLoadMore}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 28px",
                  borderRadius: DESIGN_TOKENS.borderRadius.lg,
                  background: DESIGN_TOKENS.colors.surface,
                  border: `1px solid ${DESIGN_TOKENS.colors.neutral[200]}`,
                  color: DESIGN_TOKENS.colors.primary[600],
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: DESIGN_TOKENS.transition,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = DESIGN_TOKENS.colors.primary[50];
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = DESIGN_TOKENS.colors.surface;
                  e.currentTarget.style.transform = "none";
                }}
              >
                Load More <ArrowRight size={12} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Insights;