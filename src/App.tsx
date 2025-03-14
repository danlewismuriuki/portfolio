import React from 'react';
import { Github, Mail, Linkedin, ExternalLink, Code2, Server, Database, Cloud, Terminal, Globe, Lock, Cpu, LineChart, Shield, Workflow, BookOpen, Zap, GitBranch, Layers } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "Vitabu Vitabu Marketplace",
      description: "Founded and developed a second-hand book marketplace platform that revolutionized educational accessibility in Kenya, implementing secure payment systems and optimized user experience",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",
      link: "#",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Payment Integration"],
      metrics: ["Affordable Education Access", "Secure Transactions", "Optimized UX"]
    },
    {
      title: "GODAN Data Platform",
      description: "Engineered scalable backend infrastructure for agricultural data processing, enabling global stakeholder collaboration and data-driven decision making",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      link: "#",
      tech: ["FastAPI", "PostgreSQL", "AWS", "Docker"],
      metrics: ["Global Data Access", "Stakeholder Collaboration", "Sustainable Agriculture"]
    },
    {
      title: "Supply Chain Management System",
      description: "Led development of microservices-based supply chain platform at Witz Africa, improving food security and vendor-supplier connections",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800",
      link: "#",
      tech: ["NestJS", "MongoDB", "Docker", "Azure"],
      metrics: ["Enhanced Food Security", "Mobile Ordering", "Streamlined Operations"]
    }
  ];

  const achievements = [
    {
      metric: "50TB+",
      description: "Agricultural data processed and made accessible through GODAN platform",
      icon: <Database className="text-emerald-600" size={32} />
    },
    {
      metric: "99.9%",
      description: "System uptime achieved across distributed microservices architecture",
      icon: <Shield className="text-blue-600" size={32} />
    },
    {
      metric: "40%",
      description: "Reduction in operational costs through cloud optimization",
      icon: <LineChart className="text-purple-600" size={32} />
    }
  ];

  const skills = [
    {
      category: "Languages & Core",
      items: ["Python", "JavaScript", "TypeScript", "SQL"],
      icon: <Code2 className="text-emerald-600" size={20} />
    },
    {
      category: "Frameworks",
      items: ["FastAPI", "Flask", "Next.js", "NestJS", "Node.js"],
      icon: <Layers className="text-blue-600" size={20} />
    },
    {
      category: "Database & Storage",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      icon: <Database className="text-purple-600" size={20} />
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Azure", "Docker", "CI/CD"],
      icon: <Cloud className="text-indigo-600" size={20} />
    },
    {
      category: "Tools & Practices",
      items: ["Git", "Postman", "Agile", "RESTful APIs"],
      icon: <Workflow className="text-red-600" size={20} />
    },
    {
      category: "Monitoring & Security",
      items: ["Datadog", "Auth Systems", "API Security", "Encryption"],
      icon: <Lock className="text-yellow-600" size={20} />
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-blue-50/30 to-purple-50/30 backdrop-blur-xl" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-emerald-600 rounded-lg">
              <Server size={32} className="text-white" />
            </div>
            <div className="p-3 bg-blue-600 rounded-lg">
              <Globe size={32} className="text-white" />
            </div>
            <div className="p-3 bg-purple-600 rounded-lg">
              <Database size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Full Stack Engineer
            <span className="block text-4xl mt-2 text-emerald-600">Backend Expert • Cloud Architecture • Web3</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Specialized in building scalable backend systems and distributed architectures. 
            Experienced in cloud platforms, microservices, and data-intensive applications.
          </p>
          <div className="flex gap-6">
            <a href="#" className="px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all flex items-center gap-2">
              <Mail size={20} />
              Get in Touch
            </a>
            <div className="flex gap-4">
              <a href="#" className="p-4 bg-white rounded-lg text-gray-700 hover:text-emerald-600 hover:shadow-lg transition-all">
                <Github size={24} />
              </a>
              <a href="#" className="p-4 bg-white rounded-lg text-gray-700 hover:text-emerald-600 hover:shadow-lg transition-all">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  {achievement.icon}
                  <h3 className="text-4xl font-bold text-gray-900">{achievement.metric}</h3>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 bg-emerald-100 rounded-xl">
                  <Server className="text-emerald-600" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Backend Engineer</h3>
                  <p className="text-emerald-600 font-semibold">GODAN • Jan 2025 - Present</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-emerald-600" />
                  <p>Developed backend systems supporting open data initiatives in agriculture and nutrition</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-emerald-600" />
                  <p>Designed APIs facilitating data sharing among global stakeholders</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-emerald-600" />
                  <p>Led capacity-building efforts to improve data-driven decision-making</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 bg-blue-100 rounded-xl">
                  <Layers className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Backend Lead</h3>
                  <p className="text-blue-600 font-semibold">Witz Africa • Jan 2025 - Present</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-600" />
                  <p>Led backend team in building scalable supply chain logistics solutions</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-600" />
                  <p>Designed microservices architecture for vendor-supplier connections</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-600" />
                  <p>Implemented mobile-based ordering systems for enhanced accessibility</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 bg-purple-100 rounded-xl">
                  <Code2 className="text-purple-600" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Backend Developer</h3>
                  <p className="text-purple-600 font-semibold">LogicSoft • Aug 2024 - Present</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-600" />
                  <p>Developed RESTful APIs and optimized database queries for performance</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-600" />
                  <p>Implemented security best practices for authentication and data encryption</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-600" />
                  <p>Participated in Agile sprints and iterative development cycles</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 bg-yellow-100 rounded-xl">
                  <BookOpen className="text-yellow-600" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Founder</h3>
                  <p className="text-yellow-600 font-semibold">Vitabu Vitabu</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-yellow-600" />
                  <p>Built a second-hand book marketplace to make education more affordable in Kenya</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-yellow-600" />
                  <p>Created platform for parents to sell & buy school books at lower costs</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-yellow-600" />
                  <p>Integrated secure payment gateways and seamless user experience</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-white/20 text-white text-sm rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        {metric}
                      </div>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    View Details <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <div key={index} className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-white rounded-lg text-gray-700 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Cloud className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AWS Certified Cloud Practitioner</h3>
                  <p className="text-gray-600 mt-2">Expert in AWS core services including Lambda, API Gateway, and EC2</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Database className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">IBM Data Science Professional</h3>
                  <p className="text-gray-600 mt-2">Advanced data processing, visualization, and analytical modeling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} • Full Stack Engineer & System Architect</p>
        </div>
      </footer>
    </div>
  );
}

export default App;