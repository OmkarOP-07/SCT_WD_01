import { Star, Users, Zap, Shield, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-pulse mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-8">
              <Zap size={40} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Navigator
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Just a simple landing page with responsive design and attractive UI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2">
              - By Onkar
            </div>
            <div className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:scale-105">
              Learn More
              about me 
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Some Features about this website.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap size={32} />, title: 'Lightning Fast', desc: 'Optimized performance for navigation' },
              { icon: <Shield size={32} />, title: 'Attractive UI', desc: 'Ultimate User experience' },
              { icon: <Users size={32} />, title: 'Navigation', desc: 'Easy Navigation with a Navbar' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Navigator
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're passionate about creating solutions that make a difference. Our team combines creativity with technical expertise to deliver exceptional results.
              </p>
              <div className="space-y-4">
                {['Innovation-driven approach', 'Customer-first mentality', 'Continuous improvement'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 backdrop-blur-lg border border-white/10">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">99%</div>
                  <div className="text-gray-300 mb-6">Customer Satisfaction</div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-400">500+</div>
                      <div className="text-sm text-gray-300">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-pink-400">50+</div>
                      <div className="text-sm text-gray-300">Team Members</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Review Section
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Anjali Mehta',
                role: 'Product Manager, CraftLogic',
                review: 'Working with the team was seamless. The UI is clean, responsive, and fast. Just what we needed!',
                },
                {
                name: 'Rahul Sharma',
                role: 'Lead Developer, ByteBuild',
                review: 'The attention to detail and smooth animations gave our product a polished feel. Highly impressed!',
                },
                {
                name: 'Neha Kapoor',
                role: 'Founder, PixelNest',
                review: 'Delivered on time and exceeded expectations. Communication was smooth and updates were regular.',
                },
                
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.review}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-purple-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help bring your vision to life
          </p>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-300"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-300"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows="4"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all duration-300 resize-none"
                ></textarea>
              </div>
            </div>
            <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Navigator
              </h3>
              <p className="text-gray-400">Made with love by Onkar.</p>
            </div>
            
            <div className="flex space-x-6 mt-6 md:mt-0">
              {[Github, Twitter, Linkedin].map((Icon, idx) => (
                <button key={idx} className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                  <Icon size={24} />
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2025 Navigator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;