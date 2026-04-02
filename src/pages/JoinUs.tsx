import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const JoinUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="py-24 mesh-gradient">
        <div className="container mx-auto px-6 text-center">
          <p className="label-text mb-3">Become a Member</p>
          <h1 className="heading-lg mb-4">Join IEEE INU</h1>
          <p className="body-text mx-auto">Take the first step towards a thriving career in technology. Fill out the form below and our membership team will get in touch.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl glass card-shadow"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                  <CheckCircle size={28} />
                </div>
                <h3 className="heading-md mb-2">Application Received!</h3>
                <p className="text-sm text-muted-foreground mb-6">Welcome aboard! Our membership committee will review your application and contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label-text mb-1.5 block">First Name</label>
                    <input required className="w-full px-4 py-2.5 rounded-xl bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent" placeholder="First name" />
                  </div>
                  <div>
                    <label className="label-text mb-1.5 block">Last Name</label>
                    <input required className="w-full px-4 py-2.5 rounded-xl bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent" placeholder="Last name" />
                  </div>
                </div>
                <div>
                  <label className="label-text mb-1.5 block">Email</label>
                  <input required type="email" className="w-full px-4 py-2.5 rounded-xl bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="label-text mb-1.5 block">Major / Department</label>
                  <input required className="w-full px-4 py-2.5 rounded-xl bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent" placeholder="e.g. Computer Engineering" />
                </div>
                <div>
                  <label className="label-text mb-1.5 block">Preferred Committee</label>
                  <select required className="w-full px-4 py-2.5 rounded-xl bg-muted text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent">
                    <option value="">Select a committee</option>
                    <option>Membership Committee</option>
                    <option>Public Relations Committee</option>
                    <option>Executive Committee</option>
                    <option>Media Committee</option>
                    <option>Program Committee</option>
                    <option>Technical Committee</option>
                  </select>
                </div>
                <div>
                  <label className="label-text mb-1.5 block">Why do you want to join?</label>
                  <textarea required rows={4} className="w-full px-4 py-2.5 rounded-xl bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent resize-none" placeholder="Tell us about your interests and goals..." />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 active:scale-95 transition-all">
                  Submit Application <ArrowRight size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
