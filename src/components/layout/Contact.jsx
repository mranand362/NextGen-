import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Phone,
  Globe,
  Calendar,
  Shield,
  Users,
  Award,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   ENTERPRISE DESIGN SYSTEM TOKENS
   ═══════════════════════════════════════════════════════════════════════════ */

const DESIGN_SYSTEM = {
  colors: {
    brand: {
      50: "#F0F9FF",
      100: "#E0F2FE",
      200: "#BAE6FD",
      300: "#7DD3FC",
      400: "#38BDF8",
      500: "#0EA5E9",
      600: "#0284C7",
      700: "#0369A1",
      800: "#075985",
      900: "#0C4A6E",
    },
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
    neutral: {
      0: "#FFFFFF",
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
    },
    semantic: {
      success: { light: "#D1FAE5", base: "#10B981", dark: "#047857" },
      warning: { light: "#FEF3C7", base: "#F59E0B", dark: "#B45309" },
      error: { light: "#FEE2E2", base: "#EF4444", dark: "#B91C1C" },
      info: { light: "#DBEAFE", base: "#3B82F6", dark: "#1E40AF" },
    },
    background: {
      primary: "#FAFBFF",
      secondary: "#FFFFFF",
      tertiary: "#F8FAFC",
      overlay: "rgba(0, 0, 0, 0.5)",
      gradient: {
        light: "linear-gradient(135deg, #667EEA 0%, #764BA2 100%)",
        dark: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
      },
    },
  },
  typography: {
    fontFamily: {
      sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", "Helvetica Neue", Arial, sans-serif`,
      mono: `"SF Mono", Monaco, "Cascadia Code", monospace`,
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.01em" }],
      sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.01em" }],
      base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.01em" }],
      lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0.01em" }],
      xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0.01em" }],
      "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.01em" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "-0.02em" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em" }],
      "5xl": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  spacing: {
    0: "0px",
    1: "clamp(0.25rem, 0.5vw, 0.5rem)",
    2: "clamp(0.5rem, 1vw, 0.75rem)",
    3: "clamp(0.75rem, 1.5vw, 1rem)",
    4: "clamp(1rem, 2vw, 1.25rem)",
    5: "clamp(1.25rem, 2.5vw, 1.5rem)",
    6: "clamp(1.5rem, 3vw, 2rem)",
    8: "clamp(2rem, 4vw, 2.5rem)",
    10: "clamp(2.5rem, 5vw, 3rem)",
    12: "clamp(3rem, 6vw, 4rem)",
    16: "clamp(4rem, 8vw, 6rem)",
    20: "clamp(5rem, 10vw, 8rem)",
    24: "clamp(6rem, 12vw, 10rem)",
  },
  borderRadius: {
    sm: "clamp(0.375rem, 0.75vw, 0.5rem)",
    md: "clamp(0.5rem, 1vw, 0.75rem)",
    lg: "clamp(0.75rem, 1.5vw, 1rem)",
    xl: "clamp(1rem, 2vw, 1.25rem)",
    "2xl": "clamp(1.25rem, 2.5vw, 1.5rem)",
    "3xl": "clamp(1.5rem, 3vw, 2rem)",
    full: "9999px",
  },
  shadows: {
    xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  },
  animation: {
    durations: {
      fastest: "150ms",
      fast: "200ms",
      normal: "300ms",
      slow: "400ms",
      slowest: "500ms",
    },
    easings: {
      linear: "cubic-bezier(0, 0, 1, 1)",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
  },
  breakpoints: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
  transitions: {
    default: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    smooth: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
    bounce: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   CUSTOM ICONS
   ═══════════════════════════════════════════════════════════════════════════ */

const IconGithub = ({ size = 20, color = "currentColor", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconLinkedin = ({ size = 20, color = "currentColor", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconTwitter = ({ size = 20, color = "currentColor", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════════════
   CONFIGURATION
   ═══════════════════════════════════════════════════════════════════════════ */

const CONTACT_METHODS = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "hello@enterprise.com",
    href: "mailto:hello@enterprise.com",
    color: DESIGN_SYSTEM.colors.primary[500],
    backgroundColor: DESIGN_SYSTEM.colors.primary[50],
    description: "Our average response time is 4 hours",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: DESIGN_SYSTEM.colors.semantic.info.base,
    backgroundColor: DESIGN_SYSTEM.colors.semantic.info.light,
    description: "Mon-Fri, 9AM-6PM PST",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Office",
    value: "San Francisco, CA",
    href: "https://maps.google.com",
    color: DESIGN_SYSTEM.colors.semantic.warning.base,
    backgroundColor: DESIGN_SYSTEM.colors.semantic.warning.light,
    description: "Global remote team",
  },
];

const SOCIAL_LINKS = [
  {
    id: "github",
    icon: IconGithub,
    label: "GitHub",
    href: "https://github.com/enterprise",
    ariaLabel: "Visit our GitHub organization",
  },
  {
    id: "linkedin",
    icon: IconLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/enterprise",
    ariaLabel: "Connect with us on LinkedIn",
  },
  {
    id: "twitter",
    icon: IconTwitter,
    label: "Twitter",
    href: "https://twitter.com/enterprise",
    ariaLabel: "Follow us on Twitter",
  },
];

const FORM_FIELDS = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    required: true,
    autoComplete: "name",
    placeholder: "John Doe",
    validation: (value) => {
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      if (value.trim().length > 50) return "Name must not exceed 50 characters";
      return null;
    },
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    required: true,
    autoComplete: "email",
    placeholder: "john@company.com",
    validation: (value) => {
      if (!value.trim()) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
      return null;
    },
  },
  {
    id: "phone",
    label: "Phone Number (Optional)",
    type: "tel",
    required: false,
    autoComplete: "tel",
    placeholder: "+1 (555) 000-0000",
    validation: (value) => {
      if (value && value.trim().length < 10) return "Please enter a valid phone number";
      return null;
    },
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    required: true,
    autoComplete: "off",
    placeholder: "Project inquiry",
    validation: (value) => {
      if (!value.trim()) return "Subject is required";
      if (value.trim().length < 3) return "Subject must be at least 3 characters";
      if (value.trim().length > 100) return "Subject must not exceed 100 characters";
      return null;
    },
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    required: true,
    autoComplete: "off",
    placeholder: "Tell us about your project...",
    rows: 6,
    validation: (value) => {
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 20) return "Message must be at least 20 characters";
      if (value.trim().length > 2000) return "Message must not exceed 2000 characters";
      return null;
    },
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   CUSTOM HOOKS
   ═══════════════════════════════════════════════════════════════════════════ */

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { elementRef, isIntersecting };
};

const useFormSubmission = () => {
  const [state, setState] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const submitForm = useCallback(async (formData) => {
    setState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      // Simulate API call - Replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setState({
        isSubmitting: false,
        isSuccess: true,
        error: null,
      });

      setTimeout(() => {
        setState(prev => ({ ...prev, isSuccess: false }));
      }, 5000);

      return true;
    } catch (error) {
      setState({
        isSubmitting: false,
        isSuccess: false,
        error: error instanceof Error ? error.message : "An unexpected error occurred",
      });
      return false;
    }
  }, []);

  return { submissionState: state, submitForm };
};

const useFormValidation = (initialData) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(new Set());

  const validateField = useCallback((fieldId, value) => {
    const field = FORM_FIELDS.find(f => f.id === fieldId);
    if (field?.validation) {
      return field.validation(value);
    }
    return null;
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    FORM_FIELDS.forEach(field => {
      const value = formData[field.id];
      const error = validateField(field.id, value);
      if (error && field.required) {
        newErrors[field.id] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validateField]);

  const handleChange = useCallback((fieldId, value) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
    
    if (touched.has(fieldId)) {
      const error = validateField(fieldId, value);
      setErrors(prev => ({ ...prev, [fieldId]: error || undefined }));
    }
  }, [validateField, touched]);

  const handleBlur = useCallback((fieldId) => {
    setTouched(prev => new Set(prev).add(fieldId));
    const error = validateField(fieldId, formData[fieldId]);
    setErrors(prev => ({ ...prev, [fieldId]: error || undefined }));
  }, [validateField, formData]);

  const resetForm = useCallback(() => {
    setFormData(initialData);
    setErrors({});
    setTouched(new Set());
  }, [initialData]);

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
  };
};

const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: windowSize.width < 768,
    isTablet: windowSize.width >= 768 && windowSize.width < 1024,
    isDesktop: windowSize.width >= 1024,
    windowSize,
  };
};

/* ═══════════════════════════════════════════════════════════════════════════
   STYLESHEET INJECTION
   ═══════════════════════════════════════════════════════════════════════════ */

let globalStylesInjected = false;

const injectGlobalStyles = () => {
  if (globalStylesInjected || typeof document === "undefined") return;
  globalStylesInjected = true;

  const styleElement = document.createElement("style");
  styleElement.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-40px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(40px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    .contact-grid {
      display: grid;
      gap: ${DESIGN_SYSTEM.spacing[8]};
    }

    @media (min-width: ${DESIGN_SYSTEM.breakpoints.md}) {
      .contact-grid {
        grid-template-columns: 1fr 1.3fr;
        gap: ${DESIGN_SYSTEM.spacing[12]};
      }
    }

    @media (min-width: ${DESIGN_SYSTEM.breakpoints.lg}) {
      .contact-grid {
        gap: ${DESIGN_SYSTEM.spacing[16]};
      }
    }

    /* Smooth scrolling */
    html {
      scroll-behavior: smooth;
    }

    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      background: ${DESIGN_SYSTEM.colors.neutral[100]};
      border-radius: ${DESIGN_SYSTEM.borderRadius.full};
    }

    ::-webkit-scrollbar-thumb {
      background: ${DESIGN_SYSTEM.colors.neutral[400]};
      border-radius: ${DESIGN_SYSTEM.borderRadius.full};
      transition: ${DESIGN_SYSTEM.transitions.default};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${DESIGN_SYSTEM.colors.neutral[500]};
    }

    /* Focus styles for accessibility */
    *:focus-visible {
      outline: 2px solid ${DESIGN_SYSTEM.colors.primary[500]};
      outline-offset: 2px;
      border-radius: ${DESIGN_SYSTEM.borderRadius.sm};
    }

    /* Reduced Motion Support */
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    /* Loading skeleton animation */
    .skeleton {
      background: linear-gradient(
        90deg,
        ${DESIGN_SYSTEM.colors.neutral[100]} 25%,
        ${DESIGN_SYSTEM.colors.neutral[200]} 50%,
        ${DESIGN_SYSTEM.colors.neutral[100]} 75%
      );
      background-size: 1000px 100%;
      animation: shimmer 2s infinite;
    }
  `;
  document.head.appendChild(styleElement);
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

const FormField = memo(({ field, value, error, touched, onChange, onBlur }) => {
  const [isFocused, setIsFocused] = useState(false);
  const isTextarea = field.type === "textarea";
  const Component = isTextarea ? "textarea" : "input";
  const showError = touched && error;

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: DESIGN_SYSTEM.spacing[2],
      width: "100%",
    },
    label: {
      fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
      fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium,
      color: DESIGN_SYSTEM.colors.neutral[700],
      letterSpacing: DESIGN_SYSTEM.typography.fontSize.sm[2],
    },
    wrapper: {
      position: "relative",
      borderRadius: DESIGN_SYSTEM.borderRadius.lg,
      backgroundColor: DESIGN_SYSTEM.colors.background.tertiary,
      border: `1.5px solid ${
        isFocused
          ? DESIGN_SYSTEM.colors.primary[400]
          : showError
          ? DESIGN_SYSTEM.colors.semantic.error.base
          : DESIGN_SYSTEM.colors.neutral[200]
      }`,
      boxShadow: isFocused ? `0 0 0 3px ${DESIGN_SYSTEM.colors.primary[500]}20` : "none",
      transition: DESIGN_SYSTEM.transitions.default,
    },
    input: {
      width: "100%",
      padding: `${DESIGN_SYSTEM.spacing[3]} ${DESIGN_SYSTEM.spacing[4]}`,
      fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
      color: DESIGN_SYSTEM.colors.neutral[900],
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      fontFamily: "inherit",
      resize: isTextarea ? "vertical" : "none",
      minHeight: isTextarea ? "120px" : "auto",
      transition: DESIGN_SYSTEM.transitions.default,
    },
    error: {
      fontSize: DESIGN_SYSTEM.typography.fontSize.xs[0],
      color: DESIGN_SYSTEM.colors.semantic.error.base,
      marginTop: DESIGN_SYSTEM.spacing[1],
      display: "flex",
      alignItems: "center",
      gap: DESIGN_SYSTEM.spacing[1],
    },
  };

  return (
    <div style={styles.container}>
      <label htmlFor={field.id} style={styles.label}>
        {field.label}
        {field.required && (
          <span style={{ color: DESIGN_SYSTEM.colors.semantic.error.base }}> *</span>
        )}
      </label>
      <div style={styles.wrapper}>
        <Component
          id={field.id}
          type={isTextarea ? undefined : field.type}
          value={value}
          placeholder={field.placeholder}
          required={field.required}
          autoComplete={field.autoComplete}
          rows={field.rows}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            onBlur();
          }}
          onChange={(e) => onChange(e.target.value)}
          style={styles.input}
          aria-invalid={showError}
          aria-describedby={showError ? `${field.id}-error` : undefined}
        />
      </div>
      {showError && (
        <div id={`${field.id}-error`} style={styles.error} role="alert">
          <AlertCircle size={12} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
});

FormField.displayName = "FormField";

const ContactMethodCard = memo(({ method, index, isVisible }) => {
  const Icon = method.icon;
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    wrapper: {
      display: "flex",
      alignItems: "center",
      gap: DESIGN_SYSTEM.spacing[4],
      textDecoration: "none",
      transition: DESIGN_SYSTEM.transitions.default,
      transform: isHovered ? "translateX(4px)" : "translateX(0)",
      cursor: method.href ? "pointer" : "default",
      opacity: isVisible ? 1 : 0,
      animation: isVisible ? `fadeInLeft 0.5s ${DESIGN_SYSTEM.animation.easings.out} ${index * 100}ms both` : "none",
    },
    iconContainer: {
      width: "clamp(48px, 5vw, 52px)",
      height: "clamp(48px, 5vw, 52px)",
      borderRadius: DESIGN_SYSTEM.borderRadius.xl,
      backgroundColor: method.backgroundColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transform: isHovered ? "scale(1.05) rotate(-3deg)" : "scale(1) rotate(0deg)",
      transition: DESIGN_SYSTEM.transitions.bounce,
    },
    content: { 
      flex: 1,
      minWidth: 0,
    },
    label: {
      margin: 0,
      fontSize: DESIGN_SYSTEM.typography.fontSize.xs[0],
      fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
      color: DESIGN_SYSTEM.colors.neutral[500],
      marginBottom: DESIGN_SYSTEM.spacing[1],
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    value: {
      margin: 0,
      fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
      fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
      color: DESIGN_SYSTEM.colors.neutral[800],
      marginBottom: DESIGN_SYSTEM.spacing[1],
      wordBreak: "break-word",
    },
    description: {
      margin: 0,
      fontSize: DESIGN_SYSTEM.typography.fontSize.xs[0],
      color: DESIGN_SYSTEM.colors.neutral[500],
    },
  };

  const Wrapper = method.href ? "a" : "div";
  const wrapperProps = method.href
    ? { href: method.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      style={styles.wrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.iconContainer}>
        <Icon size={22} color={method.color} aria-hidden="true" />
      </div>
      <div style={styles.content}>
        <p style={styles.label}>{method.label}</p>
        <p style={styles.value}>{method.value}</p>
        {method.description && <p style={styles.description}>{method.description}</p>}
      </div>
    </Wrapper>
  );
});

ContactMethodCard.displayName = "ContactMethodCard";

const SocialLink = memo(({ link, index, isVisible }) => {
  const Icon = link.icon;
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    link: {
      width: "clamp(40px, 4vw, 44px)",
      height: "clamp(40px, 4vw, 44px)",
      borderRadius: DESIGN_SYSTEM.borderRadius.lg,
      border: `1px solid ${isHovered ? DESIGN_SYSTEM.colors.primary[200] : DESIGN_SYSTEM.colors.neutral[200]}`,
      backgroundColor: isHovered ? DESIGN_SYSTEM.colors.primary[50] : DESIGN_SYSTEM.colors.background.secondary,
      color: isHovered ? DESIGN_SYSTEM.colors.primary[600] : DESIGN_SYSTEM.colors.neutral[500],
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: DESIGN_SYSTEM.transitions.default,
      cursor: "pointer",
      transform: isHovered ? "translateY(-2px) scale(1.05)" : "translateY(0) scale(1)",
      opacity: isVisible ? 1 : 0,
      animation: isVisible ? `fadeInUp 0.5s ${DESIGN_SYSTEM.animation.easings.out} ${index * 100}ms both` : "none",
    },
  };

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.ariaLabel}
      style={styles.link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon size={20} />
    </a>
  );
});

SocialLink.displayName = "SocialLink";

const ToastNotification = memo(({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    container: {
      position: "fixed",
      bottom: DESIGN_SYSTEM.spacing[6],
      right: DESIGN_SYSTEM.spacing[6],
      zIndex: DESIGN_SYSTEM.zIndex.tooltip,
      animation: `slideInRight ${DESIGN_SYSTEM.animation.durations.normal} ${DESIGN_SYSTEM.animation.easings.out}`,
      maxWidth: "90vw",
      width: "auto",
      "@media (min-width: 640px)": {
        maxWidth: "400px",
      },
    },
    toast: {
      display: "flex",
      alignItems: "center",
      gap: DESIGN_SYSTEM.spacing[3],
      padding: `${DESIGN_SYSTEM.spacing[3]} ${DESIGN_SYSTEM.spacing[4]}`,
      backgroundColor: type === "success" ? DESIGN_SYSTEM.colors.semantic.success.base : DESIGN_SYSTEM.colors.semantic.error.base,
      color: DESIGN_SYSTEM.colors.neutral[0],
      borderRadius: DESIGN_SYSTEM.borderRadius.lg,
      boxShadow: DESIGN_SYSTEM.shadows.lg,
      fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
    },
  };

  return (
    <div style={styles.container} role="alert">
      <div style={styles.toast}>
        {type === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
        <span>{message}</span>
      </div>
    </div>
  );
});

ToastNotification.displayName = "ToastNotification";

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN CONTACT COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

const Contact = () => {
  const { elementRef: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px",
  });
  
  const { submissionState, submitForm } = useFormSubmission();
  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
  } = useFormValidation({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    injectGlobalStyles();
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      setHeaderVisible(true);
      const timer = setTimeout(() => setContentVisible(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting]);

  useEffect(() => {
    if (submissionState.isSuccess) {
      resetForm();
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionState.isSuccess, resetForm]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    await submitForm(formData);
  }, [formData, submitForm, validateForm]);

  const headerAnimation = {
    textAlign: "center",
    maxWidth: "700px",
    margin: `0 auto ${DESIGN_SYSTEM.spacing[12]}`,
    opacity: headerVisible ? 1 : 0,
    transform: headerVisible ? "translateY(0)" : "translateY(30px)",
    transition: `all ${DESIGN_SYSTEM.animation.durations.slowest} ${DESIGN_SYSTEM.animation.easings.out}`,
  };

  const contentAnimation = (delay = "0s") => ({
    opacity: contentVisible ? 1 : 0,
    transform: contentVisible ? "translateY(0)" : "translateY(40px)",
    transition: `all ${DESIGN_SYSTEM.animation.durations.slow} ${DESIGN_SYSTEM.animation.easings.out} ${delay}`,
  });

  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        aria-label="Contact section"
        style={{
          position: "relative",
          backgroundColor: DESIGN_SYSTEM.colors.background.primary,
          padding: `${DESIGN_SYSTEM.spacing[20]} 0`,
          overflow: "hidden",
        }}
      >
        {/* Decorative Background Elements */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: "min(600px, 50vw)",
            height: "min(600px, 50vw)",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${DESIGN_SYSTEM.colors.primary[400]}06 0%, transparent 70%)`,
            filter: "blur(80px)",
          }} />
          <div style={{
            position: "absolute",
            bottom: "5%",
            left: "-5%",
            width: "min(500px, 40vw)",
            height: "min(500px, 40vw)",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${DESIGN_SYSTEM.colors.primary[600]}04 0%, transparent 70%)`,
            filter: "blur(70px)",
          }} />
        </div>

        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: `0 ${DESIGN_SYSTEM.spacing[4]}`,
          "@media (min-width: 640px)": {
            padding: `0 ${DESIGN_SYSTEM.spacing[6]}`,
          },
        }}>
          
          {/* Header Section */}
          <header style={headerAnimation}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: DESIGN_SYSTEM.spacing[2],
              padding: `${DESIGN_SYSTEM.spacing[1]} ${DESIGN_SYSTEM.spacing[5]} ${DESIGN_SYSTEM.spacing[1]} ${DESIGN_SYSTEM.spacing[3]}`,
              borderRadius: DESIGN_SYSTEM.borderRadius.full,
              border: `1px solid ${DESIGN_SYSTEM.colors.primary[200]}40`,
              backgroundColor: DESIGN_SYSTEM.colors.background.secondary,
              marginBottom: DESIGN_SYSTEM.spacing[6],
              boxShadow: DESIGN_SYSTEM.shadows.sm,
            }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${DESIGN_SYSTEM.colors.primary[500]}, ${DESIGN_SYSTEM.colors.primary[600]})`,
              }}>
                <MessageSquare size={14} color="#FFFFFF" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span style={{
                fontSize: DESIGN_SYSTEM.typography.fontSize.xs[0],
                fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: DESIGN_SYSTEM.colors.primary[700],
              }}>
                Get In Touch
              </span>
            </div>

            <h2 style={{
              fontSize: `clamp(${DESIGN_SYSTEM.typography.fontSize["3xl"][0]}, 5vw, ${DESIGN_SYSTEM.typography.fontSize["5xl"][0]})`,
              fontWeight: DESIGN_SYSTEM.typography.fontWeight.extrabold,
              lineHeight: DESIGN_SYSTEM.typography.fontSize["5xl"][1],
              letterSpacing: DESIGN_SYSTEM.typography.fontSize["5xl"][2],
              color: DESIGN_SYSTEM.colors.neutral[900],
              marginBottom: DESIGN_SYSTEM.spacing[4],
            }}>
              Let's Build Something{" "}
              <span style={{
                background: `linear-gradient(135deg, ${DESIGN_SYSTEM.colors.primary[500]} 0%, ${DESIGN_SYSTEM.colors.primary[700]} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Exceptional
              </span>
            </h2>
            
            <p style={{
              fontSize: `clamp(${DESIGN_SYSTEM.typography.fontSize.base[0]}, 1.25vw, ${DESIGN_SYSTEM.typography.fontSize.lg[0]})`,
              lineHeight: DESIGN_SYSTEM.typography.fontSize.lg[1],
              color: DESIGN_SYSTEM.colors.neutral[600],
              maxWidth: "600px",
              margin: "0 auto",
            }}>
              Have a project in mind? We'd love to hear about it. 
              Our team is ready to help you bring your ideas to life.
            </p>
          </header>

          {/* Main Content Grid */}
          <div className="contact-grid">
            
            {/* Left Column - Contact Information */}
            <div style={{ ...contentAnimation("0.1s"), display: "flex", flexDirection: "column", gap: DESIGN_SYSTEM.spacing[8] }}>
              <div style={{
                backgroundColor: DESIGN_SYSTEM.colors.background.secondary,
                borderRadius: DESIGN_SYSTEM.borderRadius["3xl"],
                border: `1px solid ${DESIGN_SYSTEM.colors.neutral[200]}`,
                padding: `clamp(${DESIGN_SYSTEM.spacing[6]}, 4vw, ${DESIGN_SYSTEM.spacing[8]})`,
                boxShadow: DESIGN_SYSTEM.shadows.md,
                display: "flex",
                flexDirection: "column",
                gap: DESIGN_SYSTEM.spacing[6],
              }}>
                {CONTACT_METHODS.map((method, index) => (
                  <ContactMethodCard 
                    key={method.id} 
                    method={method} 
                    index={index}
                    isVisible={contentVisible}
                  />
                ))}
              </div>

              {/* Social Links */}
              <div style={{
                padding: `0 ${DESIGN_SYSTEM.spacing[2]}`,
                display: "flex",
                gap: DESIGN_SYSTEM.spacing[3],
                alignItems: "center",
                flexWrap: "wrap",
              }}>
                <span style={{
                  fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                  fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium,
                  color: DESIGN_SYSTEM.colors.neutral[500],
                  marginRight: DESIGN_SYSTEM.spacing[2],
                }}>
                  Connect with us
                </span>
                {SOCIAL_LINKS.map((link, index) => (
                  <SocialLink 
                    key={link.id} 
                    link={link} 
                    index={index}
                    isVisible={contentVisible}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div style={{ ...contentAnimation("0.25s") }}>
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{
                  backgroundColor: DESIGN_SYSTEM.colors.background.secondary,
                  borderRadius: DESIGN_SYSTEM.borderRadius["3xl"],
                  border: `1px solid ${DESIGN_SYSTEM.colors.neutral[200]}`,
                  padding: `clamp(${DESIGN_SYSTEM.spacing[6]}, 4vw, ${DESIGN_SYSTEM.spacing[10]})`,
                  boxShadow: DESIGN_SYSTEM.shadows.md,
                  display: "flex",
                  flexDirection: "column",
                  gap: DESIGN_SYSTEM.spacing[6],
                }}
              >
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: DESIGN_SYSTEM.spacing[5],
                }}>
                  {FORM_FIELDS.map((field) => (
                    <FormField
                      key={field.id}
                      field={field}
                      value={formData[field.id]}
                      error={errors[field.id]}
                      touched={touched.has(field.id)}
                      onChange={(value) => handleChange(field.id, value)}
                      onBlur={() => handleBlur(field.id)}
                    />
                  ))}
                </div>

                {submissionState.error && (
                  <div style={{
                    padding: DESIGN_SYSTEM.spacing[3],
                    borderRadius: DESIGN_SYSTEM.borderRadius.md,
                    backgroundColor: DESIGN_SYSTEM.colors.semantic.error.light,
                    color: DESIGN_SYSTEM.colors.semantic.error.dark,
                    fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: DESIGN_SYSTEM.spacing[2],
                  }} role="alert">
                    <AlertCircle size={16} />
                    <span>{submissionState.error}</span>
                  </div>
                )}

                {/* Professional Submit Button */}
                <button
                  type="submit"
                  disabled={submissionState.isSubmitting || submissionState.isSuccess}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: DESIGN_SYSTEM.spacing[2],
                    padding: `${DESIGN_SYSTEM.spacing[4]} ${DESIGN_SYSTEM.spacing[8]}`,
                    borderRadius: DESIGN_SYSTEM.borderRadius.full,
                    border: "none",
                    cursor: submissionState.isSubmitting ? "wait" : "pointer",
                    background: submissionState.isSuccess
                      ? DESIGN_SYSTEM.colors.semantic.success.base
                      : `linear-gradient(135deg, ${DESIGN_SYSTEM.colors.primary[500]} 0%, ${DESIGN_SYSTEM.colors.primary[600]} 100%)`,
                    color: DESIGN_SYSTEM.colors.neutral[0],
                    fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
                    fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
                    fontFamily: "inherit",
                    boxShadow: `0 4px 20px ${DESIGN_SYSTEM.colors.primary[500]}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
                    transition: DESIGN_SYSTEM.transitions.default,
                    opacity: submissionState.isSubmitting ? 0.8 : 1,
                    transform: "translateY(0)",
                    width: "100%",
                    "@media (min-width: 640px)": {
                      width: "auto",
                      minWidth: "200px",
                    },
                  }}
                  onMouseEnter={(e) => {
                    if (!submissionState.isSubmitting && !submissionState.isSuccess) {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.background = `linear-gradient(135deg, ${DESIGN_SYSTEM.colors.primary[600]} 0%, ${DESIGN_SYSTEM.colors.primary[700]} 100%)`;
                      e.currentTarget.style.boxShadow = `0 14px 40px ${DESIGN_SYSTEM.colors.primary[500]}60, inset 0 1px 0 rgba(255,255,255,0.2)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = submissionState.isSuccess
                      ? DESIGN_SYSTEM.colors.semantic.success.base
                      : `linear-gradient(135deg, ${DESIGN_SYSTEM.colors.primary[500]} 0%, ${DESIGN_SYSTEM.colors.primary[600]} 100%)`;
                    e.currentTarget.style.boxShadow = `0 4px 20px ${DESIGN_SYSTEM.colors.primary[500]}40, inset 0 1px 0 rgba(255,255,255,0.2)`;
                  }}
                >
                  {submissionState.isSubmitting ? (
                    <>
                      <div style={{
                        width: "18px",
                        height: "18px",
                        border: `2px solid ${DESIGN_SYSTEM.colors.neutral[0]}`,
                        borderTopColor: "transparent",
                        borderRadius: "50%",
                        animation: "spin 0.6s linear infinite",
                      }} />
                      <span>Sending...</span>
                    </>
                  ) : submissionState.isSuccess ? (
                    <>
                      <CheckCircle size={18} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} aria-hidden="true" />
                    </>
                  )}
                </button>

                <p style={{
                  fontSize: DESIGN_SYSTEM.typography.fontSize.xs[0],
                  color: DESIGN_SYSTEM.colors.neutral[500],
                  textAlign: "center",
                  margin: 0,
                }}>
                  We'll get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && submissionState.isSuccess && (
        <ToastNotification
          message="Your message has been sent successfully! We'll be in touch soon."
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default Contact;