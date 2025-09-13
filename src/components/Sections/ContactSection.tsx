import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export function ContactSection() {

  return (
    <section id="contact" className="flex items-start justify-center px-6 py-1" style={{ marginTop: '1rem', marginBottom: '10rem' }}>
      <div className="section-content">
        <div className="text-left mb-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Card - Contact Information */}
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-white/30 hover:-translate-y-1 animate-fade-in">
            <h3 className="text-xl font-bold mb-4 text-foreground">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <a 
                    href="mailto:jmcimanes@up.edu.ph"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    jmcimanes@up.edu.ph
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <a 
                    href="mailto:cimanesdev@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    cimanesdev@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-foreground/70">Manila, Philippines</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                  <Linkedin className="text-primary" size={20} />
                </div>
                <div>
                  <a 
                    href="https://linkedin.com/in/cimanesdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl shadow-lg">
                  <Github className="text-primary" size={20} />
                </div>
                <div>
                  <a 
                    href="https://github.com/cimanesdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Get in Touch */}
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-white/30 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-2 text-foreground">Get in Touch</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-foreground">Available for</h4>
              <div className="space-y-2">
                <p className="text-foreground/70">• Internships</p>
                <p className="text-foreground/70">• Full-time opportunities</p>
                <p className="text-foreground/70">• Freelance projects</p>
                <p className="text-foreground/70">• Collaborations</p>
                <p className="text-foreground/70">• Mentoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}