// pages/services/WebDevelopment.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Code, 
  Globe, 
  Smartphone, 
  Zap, 
  Shield, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Rocket,
  Layout,
  Database,
  Server,
  Cloud,
  Lock,
  BarChart
} from "lucide-react";

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex p-4 bg-white/10 backdrop-blur rounded-2xl mb-6">
            <Code className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Web Development
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
            Build modern, scalable web applications that drive business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Delivered", icon: Code },
              { number: "98%", label: "Client Satisfaction", icon: Star },
              { number: "50+", label: "Expert Developers", icon: Users },
              { number: "24/7", label: "Technical Support", icon: Clock },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Web Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end web development services tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Frontend Development",
                desc: "Modern, responsive interfaces using React, Next.js, Vue.js, and Angular"
              },
              {
                icon: Server,
                title: "Backend Development",
                desc: "Robust server-side solutions with Node.js, Python, Java, and PHP"
              },
              {
                icon: Database,
                title: "Database Architecture",
                desc: "Optimized data management with MongoDB, PostgreSQL, and MySQL"
              },
              {
                icon: Shield,
                title: "Security Implementation",
                desc: "Enterprise-grade security with SSL, encryption, and authentication"
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                desc: "Lightning-fast load times and Core Web Vitals optimization"
              },
              {
                icon: Smartphone,
                title: "Responsive Design",
                desc: "Flawless experience across all devices and screen sizes"
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group p-6 bg-white border border-slate-100 rounded-xl hover:shadow-lg transition-all hover:border-blue-200">
                  <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-4 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Industry Leaders Choose Us
            </h2>
            <p className="text-lg text-slate-600">
              Delivering excellence through expertise and dedication
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                "15+ years of industry experience",
                "Agile development methodology",
                "Free technical consultation",
                "Post-launch support & maintenance",
                "SEO-optimized code structure",
                "Latest technology stack"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "100% client satisfaction guarantee",
                "On-time delivery commitment",
                "Transparent communication",
                "Competitive pricing structure",
                "Scalable solutions",
                "Dedicated project manager"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-slate-600">
              A streamlined approach to deliver quality software
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                step: "01", 
                title: "Discovery", 
                desc: "Requirements gathering & project planning",
                icon: Users
              },
              { 
                step: "02", 
                title: "Design", 
                desc: "Wireframes, prototypes & UI/UX design",
                icon: Layout
              },
              { 
                step: "03", 
                title: "Development", 
                desc: "Agile sprints & continuous development",
                icon: Code
              },
              { 
                step: "04", 
                title: "Launch", 
                desc: "Testing, deployment & ongoing support",
                icon: Rocket
              }
            ].map((process, index) => {
              const Icon = process.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-slate-600">{process.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-lg text-slate-600">
              We use the latest technologies to build future-proof applications
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "React", "Next.js", "Node.js", "Python", "Django",
              "Laravel", "Vue.js", "Angular", "MongoDB", "PostgreSQL",
              "MySQL", "Tailwind CSS", "TypeScript", "GraphQL", "AWS",
              "Docker", "Kubernetes", "Redis", "Elasticsearch", "Firebase"
            ].map((tech, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-3 text-center hover:border-blue-400 hover:shadow-md transition-all">
                <span className="text-slate-700 text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-lg text-slate-600">
              Specialized web solutions for various industries
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart,
                title: "E-commerce",
                desc: "Scalable online stores with payment integration",
                industries: ["Retail", "Fashion", "Electronics"]
              },
              {
                icon: Users,
                title: "Healthcare",
                desc: "HIPAA compliant patient portals & telemedicine",
                industries: ["Hospitals", "Clinics", "Pharmacies"]
              },
              {
                icon: Globe,
                title: "Education",
                desc: "LMS platforms & online learning systems",
                industries: ["Universities", "Schools", "EdTech"]
              },
              {
                icon: Cloud,
                title: "FinTech",
                desc: "Secure financial dashboards & payment systems",
                industries: ["Banks", "Insurance", "Investment"]
              },
              {
                icon: Lock,
                title: "Real Estate",
                desc: "Property listing platforms with VR tours",
                industries: ["Agencies", "Builders", "Property Management"]
              },
              {
                icon: TrendingUp,
                title: "SaaS",
                desc: "Subscription-based software platforms",
                industries: ["Startups", "Enterprise", "B2B"]
              }
            ].map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-white border border-slate-100 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-slate-600 mb-3">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-slate-600">
              Trusted by businesses worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "The team delivered an exceptional web platform that transformed our business operations.",
                author: "Rahul Sharma",
                position: "CEO, TechStart India",
                rating: 5
              },
              {
                quote: "Professional, responsive, and technically excellent. Highly recommended for web development.",
                author: "Priya Patel",
                position: "CTO, Innovate Solutions",
                rating: 5
              },
              {
                quote: "Outstanding work ethic and technical expertise. They exceeded our expectations.",
                author: "Amit Kumar",
                position: "Director, DigitalEdge",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about our web development services
            </p>
          </div>
          <div className="space-y-4">
            {[
              { 
                q: "How long does it take to build a website?", 
                a: "Development time typically ranges from 4-12 weeks depending on project complexity, features, and requirements. We'll provide a detailed timeline during consultation." 
              },
              { 
                q: "Do you provide ongoing maintenance?", 
                a: "Yes, we offer flexible maintenance packages including security updates, performance monitoring, bug fixes, and technical support." 
              },
              { 
                q: "Will my website be mobile-friendly?", 
                a: "Absolutely! All our websites are built with a mobile-first approach and are fully responsive across all devices and screen sizes." 
              },
              { 
                q: "Do you help with website hosting?", 
                a: "Yes, we can help you choose the best hosting provider and handle the setup. We also offer managed hosting services." 
              },
              { 
                q: "What about SEO and performance?", 
                a: "We build SEO-optimized websites following best practices for speed, Core Web Vitals, and search engine visibility." 
              },
              { 
                q: "Do you offer custom features and integrations?", 
                a: "Yes, we specialize in custom development including third-party integrations, APIs, and unique functionality tailored to your needs." 
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-slate-100 rounded-xl p-6 hover:shadow-md transition-all">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Next Web Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation with our technical experts. No obligation, just honest advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-400 transition-all"
            >
              View Case Studies
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            Free consultation • No hidden costs • 30-minute discovery call
          </p>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;