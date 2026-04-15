import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Server,
  Database,
  Shield,
  Zap,
  Smartphone,
  Globe,
  Cloud,
  Users,
  Star,
  Clock,
  ChevronRight,
  Award,
  TrendingUp,
  Layout,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════════
// DATA & CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const STATS = [
  { value: "200+", label: "Projects Delivered", icon: Code, color: "text-blue-500" },
  { value: "150+", label: "Happy Clients", icon: Users, color: "text-emerald-500" },
  { value: "99%", label: "Client Satisfaction", icon: Star, color: "text-amber-500" },
  { value: "24/7", label: "Support Available", icon: Clock, color: "text-purple-500" },
];

const SERVICE_DATA = {
  title: "Web Development",
  subtitle: "MERN Stack Excellence",
  tagline: "Since 2020",
  description:
    "Build powerful, scalable, and modern web applications using the MERN stack. We deliver production-grade solutions that drive business growth with cutting-edge technology and best practices.",
  gradient: "bg-gradient-to-br from-blue-500 via-blue-700 to-slate-900",
  
  features: [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized loading times and smooth user experiences with modern web technologies and caching strategies.",
      stat: "99.9% Uptime",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, secure authentication, and protected data storage for peace of mind.",
      stat: "256-bit SSL",
    },
    {
      icon: Smartphone,
      title: "Fully Responsive Design",
      description: "Perfect user experience on all devices - mobile, tablet, and desktop with fluid layouts.",
      stat: "100% Responsive",
    },
    {
      icon: Cloud,
      title: "Cloud-Ready Architecture",
      description: "Seamless deployment to AWS, Azure, or Google Cloud with auto-scaling capabilities.",
      stat: "Auto-scaling",
    },
    {
      icon: Globe,
      title: "Global CDN Integration",
      description: "Lightning-fast content delivery to users worldwide with built-in CDN support.",
      stat: "Global Network",
    },
    {
      icon: Users,
      title: "User-Centric Approach",
      description: "Intuitive interfaces designed around real user needs and behavior patterns.",
      stat: "User First",
    },
  ],

  technologies: [
    { name: "React.js", icon: Code, color: "#61DAFB", proficiency: 95 },
    { name: "Node.js", icon: Server, color: "#339933", proficiency: 92 },
    { name: "MongoDB", icon: Database, color: "#47A248", proficiency: 90 },
    { name: "Express.js", icon: Server, color: "#000000", proficiency: 93 },
    { name: "Tailwind CSS", icon: Layout, color: "#06B6D4", proficiency: 88 },
    { name: "GraphQL", icon: Database, color: "#E10098", proficiency: 85 },
    { name: "TypeScript", icon: Code, color: "#3178C6", proficiency: 87 },
    { name: "Next.js", icon: Globe, color: "#000000", proficiency: 84 },
    { name: "PostgreSQL", icon: Database, color: "#336791", proficiency: 86 },
    { name: "Docker", icon: Cloud, color: "#2496ED", proficiency: 82 },
    { name: "AWS", icon: Cloud, color: "#FF9900", proficiency: 85 },
  ],

  process: [
    {
      step: "01",
      title: "Discovery & Research",
      description: "We dive deep into your requirements, analyze competitors, and define clear project goals.",
      duration: "1-2 weeks",
      deliverables: ["Project Scope", "Technical Specs", "Timeline"],
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces with user-centered design principles.",
      duration: "2-3 weeks",
      deliverables: ["Wireframes", "Prototypes", "Design System"],
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular updates and continuous integration.",
      duration: "4-8 weeks",
      deliverables: ["Frontend", "Backend API", "Database"],
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Rigorous testing across all devices and browsers.",
      duration: "1-2 weeks",
      deliverables: ["Test Reports", "Bug Fixes", "Performance Report"],
    },
    {
      step: "05",
      title: "Deployment",
      description: "Smooth launch with zero downtime and rollback plans.",
      duration: "1 week",
      deliverables: ["Live Site", "SSL Certificate", "Backup System"],
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing monitoring, updates, and technical support.",
      duration: "Ongoing",
      deliverables: ["24/7 Monitoring", "Security Updates", "Analytics"],
    },
  ],

  benefits: [
    { icon: TrendingUp, title: "50% Faster Load Times", description: "Optimized code and assets", impact: "+40% Conversion" },
    { icon: Users, title: "Increased Engagement", description: "User-friendly interfaces", impact: "+60% Retention" },
    { icon: Award, title: "Higher Conversion Rates", description: "Strategic UX design", impact: "+35% Sales" },
    { icon: Shield, title: "Reduced Security Risks", description: "Best security practices", impact: "99.9% Secure" },
  ],

  testimonials: [
    {
      name: "Rahul Sharma",
      role: "Founder, TechStart",
      content: "NextGen IT delivered an exceptional web application that exceeded our expectations. Their technical expertise and attention to detail are remarkable.",
      rating: 5,
      company: "TechStart",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Priya Patel",
      role: "CTO, InnovateCorp",
      content: "The team's MERN stack expertise transformed our business. The application is fast, secure, and scalable.",
      rating: 5,
      company: "InnovateCorp",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Amit Kumar",
      role: "Product Manager, GrowthLabs",
      content: "Professional, timely, and high-quality delivery. Highly recommended for any web development project.",
      rating: 5,
      company: "GrowthLabs",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ],

  faqs: [
    {
      question: "What is the typical timeline for web development?",
      answer: "A typical MERN stack application takes 4-8 weeks depending on complexity. Simple websites can be completed in 2-3 weeks. We'll provide a detailed timeline during the discovery phase.",
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer 3 months of free support and maintenance after launch, including bug fixes, security updates, and technical assistance. Extended support packages are also available.",
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely! We specialize in modernizing legacy applications with the latest MERN stack technologies while preserving your existing data and SEO rankings.",
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing based on project scope - fixed price for defined projects, hourly for ongoing work, or monthly retainer for long-term partnerships. Contact us for a custom quote.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════════
// UI COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

// --- Navbar ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Technologies", href: "#technologies" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              N
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">NextGen</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className="hidden md:block px-6 py-2.5 bg-slate-900 text-white rounded-full font-medium hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Get Started
          </button>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-600 hover:text-blue-600 font-medium text-lg"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg font-medium">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

// --- Hero Section ---
const HeroSection = ({ data, stats }) => {
  const [typedText, setTypedText] = useState("");
  const fullText = "MERN Stack Excellence";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Code size={16} className="text-white" />
              </div>
              <span className="text-sm font-semibold text-blue-700">{data.subtitle}</span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                {data.tagline}
              </span>
            </div>

            {/* Headings */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight font-syne">
              {data.title}
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Solutions
              </span>
              <span className="block text-2xl lg:text-3xl mt-4 text-blue-600 font-mono h-10">
                {typedText}<span className="animate-pulse">|</span>
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              {data.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Start Your Project <ArrowRight size={18} />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all"
              >
                View Process <ChevronRight size={18} />
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-slate-200/60">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/15 transition-colors" />
              <div className="relative z-10">
                <Code size={64} className="mb-6 text-blue-400" />
                <h3 className="text-3xl font-bold mb-4 font-syne">MERN Stack Excellence</h3>
                <p className="text-blue-100/80 text-lg mb-8">Full-stack JavaScript development for modern enterprises.</p>
                <div className="flex flex-wrap gap-3">
                  {["React", "Node.js", "MongoDB", "Express"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Decorative grid */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-20" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-200 rounded-3xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Features Section ---
const FeaturesSection = ({ features }) => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-xs">Why Choose Us</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6 font-syne">Key Features</h2>
          <p className="text-lg text-slate-600">What makes our web development services stand out from the competition.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                    {feature.stat}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Technologies Section ---
const TechnologiesSection = ({ technologies }) => {
  return (
    <section className="py-20 bg-slate-50" id="technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-xs">Tech Stack</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6 font-syne">Technologies We Use</h2>
          <p className="text-lg text-slate-600">Cutting-edge tools and frameworks for modern web development.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={24} style={{ color: tech.color }} />
                  <span className="font-bold text-slate-800">{tech.name}</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.proficiency}%`, backgroundColor: tech.color }}
                  />
                </div>
                <div className="text-right text-xs text-slate-500 mt-2 font-medium">
                  {tech.proficiency}% Expertise
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Benefits Section ---
const BenefitsSection = ({ benefits }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-xs">Business Impact</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6 font-syne">Tangible Benefits</h2>
          <p className="text-lg text-slate-600">Real results that drive your business forward.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="text-center p-8 bg-slate-50 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                    {benefit.impact}
                  </span>
                </div>
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Process Section ---
const ProcessSection = ({ process }) => {
  return (
    <section className="py-20 bg-slate-900 text-white relative" id="process">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold tracking-wide uppercase text-xs">Our Process</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6 font-syne">How We Work</h2>
          <p className="text-lg text-slate-400">A transparent, agile development process that delivers results.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, idx) => (
            <div key={idx} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
              <div className="text-6xl font-black text-slate-700/50 absolute top-4 right-6 font-syne select-none">
                {step.step}
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold mb-6 text-lg shadow-lg shadow-blue-900/50">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-3 font-syne">{step.title}</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">{step.description}</p>
              
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-4 pb-4 border-b border-slate-700">
                <Clock size={16} /> {step.duration}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {step.deliverables.map((item, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 rounded bg-slate-700 text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Section ---
const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="py-20 bg-slate-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-xs">Client Love</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6 font-syne">What Our Clients Say</h2>
          <p className="text-lg text-slate-600">Trusted by businesses worldwide.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-amber-400">
                  {[...Array(item.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-full uppercase tracking-wide">
                  {item.company}
                </span>
              </div>
              <p className="text-slate-600 italic mb-8 flex-grow leading-relaxed">"{item.content}"</p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FAQ Section ---
const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-xs">FAQ</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6 font-syne">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 bg-white hover:bg-slate-50 transition-colors text-left"
              >
                <span className="font-semibold text-slate-900 text-lg">{faq.question}</span>
                <ChevronRight
                  size={20}
                  className={`text-blue-600 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CTA Section ---
const CTASection = ({ gradient }) => {
  return (
    <section className={`py-24 relative overflow-hidden ${gradient}`} id="contact">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-syne">Ready to Build Your Web Application?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Let's discuss your project and create something amazing together.</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="px-8 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:scale-105">
            Get Free Consultation
          </button>
          <a href="tel:+911234567890" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            <Phone size={20} /> Call Us Now
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-blue-100/80 text-sm">
          <div className="flex items-center gap-2"><Mail size={16} /> hello@nextgenitsolution.com</div>
          <div className="flex items-center gap-2"><MapPin size={16} /> India</div>
          <div className="flex items-center gap-2"><Clock size={16} /> Mon - Sat, 9AM - 7PM</div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">N</div>
          <span className="text-lg font-bold text-white">NextGen IT Solution</span>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} NextGen IT Solution. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

const WebDevelopment = () => {
  return (
    <div className="font-sans text-slate-900 bg-slate-50 selection:bg-blue-200 selection:text-blue-900">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;600;700&family=Syne:wght@400;600;700;800&display=swap');
          .font-syne { font-family: 'Syne', sans-serif; }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        `}
      </style>
      
      <Navbar />
      <main>
        <HeroSection data={SERVICE_DATA} stats={STATS} />
        <FeaturesSection features={SERVICE_DATA.features} />
        <TechnologiesSection technologies={SERVICE_DATA.technologies} />
        <BenefitsSection benefits={SERVICE_DATA.benefits} />
        <ProcessSection process={SERVICE_DATA.process} />
        <TestimonialsSection testimonials={SERVICE_DATA.testimonials} />
        <FAQSection faqs={SERVICE_DATA.faqs} />
        <CTASection gradient={SERVICE_DATA.gradient} />
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;