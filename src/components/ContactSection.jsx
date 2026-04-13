import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.81 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CONTACT_DETAILS = [
  { label: 'Email', value: 'het.roy.cg@gmail.com', Icon: EmailIcon },
  { label: 'Mobile', value: '+91 97277 92003', Icon: PhoneIcon },
  { label: 'Location', value: 'Anand, Gujarat, India', Icon: LocationIcon },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Share an idea, a challenge, or a problem to solve. I&apos;m interested in meaningful work
            where thoughtful engineering and design can make a difference.
          </p>
        </motion.div>

        <div className="contact-v2-grid">
          {/* Left: Form + Contact Details */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="field-wrapper">
                <input className="field-control" type="text" placeholder="Your name" name="name" />
              </div>
              <div className="field-wrapper">
                <input className="field-control" type="email" placeholder="Your email" name="email" />
              </div>
              <div className="field-wrapper">
                <textarea
                  className="field-control"
                  placeholder="What would you like to build together?"
                  name="message"
                  rows={5}
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary"
                style={{ borderRadius: 12, alignSelf: 'flex-start' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                SEND MESSAGE
              </motion.button>
            </form>

            {/* Contact Details */}
            <div className="contact-details">
              {CONTACT_DETAILS.map(({ label, value, Icon }) => (
                <div key={label} className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Icon />
                  </div>
                  <div>
                    <div className="contact-detail-label">{label}</div>
                    <div className="contact-detail-value">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Coding GIF */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          >
            <div className="contact-gif-wrapper">
              <img
                src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                alt="Coding animation"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
