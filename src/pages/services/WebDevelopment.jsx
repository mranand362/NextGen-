// pages/services/WebDevelopment.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Code, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Briefcase,
  ChevronRight,
  MessageCircle,
  GraduationCap,
  Rocket,
  Sparkles,
  HeartHandshake,
  Clock,
  DollarSign,
  Zap,
  BarChart,
  Shield,
  TrendingUp,
  Globe,
  Layout,
  Database,
  Server
} from "lucide-react";

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  // Color mapping for Tailwind
  const colorMap = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-600",
    indigo: "bg-indigo-50 text-indigo-600",
    teal: "bg-teal-50 text-teal-600"
  };

  // Industry-Standard Stats
  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Briefcase, color: "blue" },
    { number: "100+", label: "Business Clients", icon: Users, color: "green" },
    { number: "4.8★", label: "Client Satisfaction", icon: Star, color: "orange" },
    { number: "99%", label: "Project Success Rate", icon: TrendingUp, color: "purple" }
  ];

  // Professional Services Data
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: Code,
      description: "Custom, scalable web applications built for performance and growth",
      price: "Starting from ₹15,000",
      features: ["Responsive UI", "SEO Optimized", "High Performance", "Modern Tech Stack"],
      popular: true,
      color: "blue"
    },
    {
      id: 2,
      title: "Career Branding",
      icon: Briefcase,
      description: "Professional resumes and LinkedIn profiles designed for impact",
      price: "Starting from ₹2,999",
      features: ["ATS Optimized", "Keyword Strategy", "Professional Design", "LinkedIn Enhancement"],
      popular: true,
      color: "green"
    },
    {
      id: 3,
      title: "Custom Software Solutions",
      icon: GraduationCap,
      description: "Tailored solutions for academic and business requirements",
      price: "Custom Pricing",
      features: ["Full Source Code", "Documentation", "Deployment Support", "Consultation"],
      popular: false,
      color: "purple"
    }
  ];

  // Portfolio Projects - Professional
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      client: "Retail Business",
      description: "Scalable online store with payment gateway integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=600&h=400&fit=crop",
      link: "/portfolio/ecommerce"
    },
    {
      id: 2,
      title: "Corporate Portal",
      category: "web",
      client: "Service Company",
      description: "Enterprise-grade internal management system",
      tech: ["Next.js", "PostgreSQL", "Tailwind", "Redis"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "/portfolio/corporate-portal"
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      category: "software",
      client: "Healthcare Provider",
      description: "Patient management and analytics platform",
      tech: ["React", "Express", "MySQL", "D3.js"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      link: "/portfolio/healthcare"
    },
    {
      id: 4,
      title: "Portfolio Platform",
      category: "web",
      client: "Creative Professional",
      description: "Modern portfolio showcasing creative work",
      tech: ["Next.js", "Framer Motion", "Tailwind"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      link: "/portfolio/portfolio"
    }
  ];

  // Professional Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Rohit Sharma",
      role: "Founder, TechStart Solutions",
      content: "The web application they delivered exceeded our expectations. Professional, scalable, and well-documented.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "HR Director, Global Corp",
      content: "Their resume optimization service helped us identify top talent faster. Highly professional approach.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "CTO, Innovate Labs",
      content: "Custom software solution that scaled perfectly with our growing business needs.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
  ];

  // Professional FAQ
  const faqs = [
    {
      q: "What is your development process?",
      a: "We follow agile methodology with regular sprint reviews, ensuring transparency and timely delivery."
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes, we offer comprehensive post-launch support and maintenance packages."
    },
    {
      q: "What technologies do you specialize in?",
      a: "React, Node.js, Python, MongoDB, PostgreSQL, and modern cloud architecture."
    },
    {
      q: "How do you ensure code quality?",
      a: "We implement rigorous testing, code reviews, and performance optimization standards."
    }
  ];

  const WHATSAPP_NUMBER = "919263066325";
  const filteredProjects = activeTab === "all" ? projects : projects.filter(p => p.category === activeTab);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Professional Agency Level */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              {/* Professional badge text */}
              <span className="text-sm font-semibold text-white">
                Trusted by Growing Businesses & Professionals
              </span>
            </div>
            
            {/* Professional Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Build Scalable
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block mt-2">
                Digital Products & Professional Brand Presence
              </span>
            </h1>
            
            {/* Professional Hero Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              We design and develop high-performance websites, professional resumes, 
              and digital solutions that help businesses and individuals stand out 
              in competitive markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start a Project 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I'm%20interested%20in%20your%20professional%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Schedule a Consultation
              </a>
            </div>

            {/* Professional Bottom Line */}
            <p className="text-sm text-gray-400 mt-6">
              ⚡ High Performance • 🚀 Scalable Solutions • 🎯 Results-Driven Approach
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Professional */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center group">
                  <div className={`inline-flex p-3 rounded-xl mb-3 ${colorMap[stat.color]} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Professional */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scalable, performance-driven solutions for modern business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all group border border-gray-100">
                  <div className={`w-12 h-12 ${colorMap[service.color]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                  {service.popular && (
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                      Most Requested
                    </span>
                  )}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Request Proposal <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Professional */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven solutions delivering measurable business impact
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 mb-10">
            {["all", "web", "software"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab === "all" ? "All Projects" : tab === "web" ? "Web Applications" : "Software Solutions"}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-blue-600 font-semibold mb-1">{project.client}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-xs mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 2).map((tech, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link to={project.link} className="inline-flex items-center gap-1 text-blue-600 text-xs font-semibold hover:gap-2 transition-all">
                    Case Study <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Professional */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Partner With Us
              </h2>
              {/* Professional intro text */}
              <p className="text-lg text-gray-600 mb-8">
                We focus on delivering scalable, high-quality solutions aligned with real-world business needs.
              </p>
              <div className="space-y-4">
                {/* Professional value propositions */}
                {[
                  { icon: Clock, title: "Timely Delivery", desc: "Structured workflow ensuring on-time project completion" },
                  { icon: DollarSign, title: "Value-Driven Pricing", desc: "Transparent pricing aligned with quality delivery" },
                  { icon: CheckCircle, title: "Quality Assurance", desc: "Thorough testing and performance optimization" },
                  { icon: HeartHandshake, title: "Dedicated Support", desc: "Reliable support throughout your project lifecycle" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-5xl mb-4">⭐ 4.8</div>
                <div className="text-lg mb-2">Client Satisfaction Rating</div>
                <div className="text-sm text-blue-100">Based on 100+ project reviews</div>
                <div className="mt-6 pt-6 border-t border-blue-400">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-xs text-blue-100">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">100+</div>
                      <div className="text-xs text-blue-100">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">99%</div>
                      <div className="text-xs text-blue-100">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Professional */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            {/* Professional testimonial subtitle */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by professionals, startups, and growing businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Professional */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Let's Discuss Your Project
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Schedule a consultation to explore how we can help achieve your business goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp Business</p>
                    <p className="font-semibold text-gray-900">+91 92630 66325</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Response Time</p>
                    <p className="font-semibold text-gray-900">Within 24 business hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Service</option>
                    <option value="web">Web Development</option>
                    <option value="resume">Career Branding</option>
                    <option value="software">Custom Software</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Project Requirements"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Professional */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about working with us
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Professional */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Rocket className="w-16 h-16 mx-auto mb-6 text-white/80" />
          {/* Professional CTA Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Build Something Impactful Together
          </h2>
          {/* Professional CTA Paragraph */}
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with us to create high-quality digital solutions that drive growth, 
            visibility, and long-term success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Inquiry
            </a>
          </div>
          {/* Professional Bottom Tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <span>⚡ Performance Focused</span>
            <span>🚀 Scalable Architecture</span>
            <span>🎯 Business-Oriented Approach</span>
            <span>📞 Dedicated Support</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;