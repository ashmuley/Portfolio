import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const features = [
  {
    icon: '⚡',
    title: 'Fast Response',
    desc: 'I usually reply within 24 hours.'
  },
  {
    icon: '🛡',
    title: 'Professional',
    desc: 'Clear communication and thoughtful execution.'
  },
  {
    icon: '🔒',
    title: 'Confidential',
    desc: 'Your ideas and information stay protected.'
  },
  {
    icon: '🚀',
    title: 'Let’s Build',
    desc: 'Great product experiences, built together.'
  }
];

const contactItems = [
  { icon: '✉', title: 'Email', value: 'akshat@gmail.com' },
  { icon: '☎', title: 'Phone', value: '+91 XXXXX XXXXX' },
  { icon: '⌖', title: 'Location', value: 'India' }
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/ashmuley' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Resume', href: '#' },
  { label: 'Portfolio', href: '#' }
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className={`contact-section ${visible ? 'visible' : ''}`}>
      <div className="contact-bg">
        <span className="bg-particle particle-a" />
        <span className="bg-particle particle-b" />
        <span className="bg-particle particle-c" />
        <span className="bg-grid" />
      </div>

      <div className="contact-shell">
        <div className="contact-hero reveal-left">
          <div className="contact-intro">
            <div className="section-label">// CONTACT</div>
            <h2>
              Let&apos;s Build
              <span>Something Amazing</span>
            </h2>
            <p>
              I&apos;m always open to discussing new projects, creative ideas, and opportunities to be part of your vision.
            </p>
            <div className="divider" />
          </div>

          <div className="globe-stage reveal-right">
            <div className="globe-orbit orbit-one" />
            <div className="globe-orbit orbit-two" />
            <div className="globe-orbit orbit-three" />
            <div className="globe">
              <div className="globe-core" />
              <span className="node node-a" />
              <span className="node node-b" />
              <span className="node node-c" />
              <span className="node node-d" />
              <span className="line line-a" />
              <span className="line line-b" />
              <span className="line line-c" />
            </div>

            <div className="float-card card-top">Creative Ideas</div>
            <div className="float-card card-mid">Open To Work</div>
            <div className="float-card card-bottom">Let&apos;s Connect</div>
          </div>
        </div>

        <div className="contact-panel reveal-up">
          <div className="panel-form">
            <div className="panel-head">
              <div className="icon-pill">✉</div>
              <div>
                <h3>Send a Message</h3>
                <p>I&apos;ll get back to you as soon as possible.</p>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="field-row">
                <label>
                  <span>Name</span>
                  <input type="text" placeholder="Your name" />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" placeholder="you@example.com" />
                </label>
              </div>

              <label>
                <span>Subject</span>
                <input type="text" placeholder="What do you want to build?" />
              </label>

              <label>
                <span>Message</span>
                <textarea rows="5" placeholder="Share your idea, timeline, or dream project..." />
              </label>

              <button type="submit">
                Initiate Connection
                <span>➜</span>
              </button>
            </form>
          </div>

          <div className="panel-info">
            <h3>Let&apos;s Connect</h3>

            <div className="info-list">
              {contactItems.map((item) => (
                <div className="info-card" key={item.title}>
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <div className="info-title">{item.title}</div>
                    <div className="info-value">{item.value}</div>
                  </div>
                  <div className="info-arrow">↗</div>
                </div>
              ))}
            </div>

            <div className="social-block">
              <div className="social-title">Follow Me</div>
              <div className="social-row">
                {socials.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="availability-card">
              <div className="availability-dot" />
              <div>
                <div className="availability-title">Currently Available</div>
                <div className="availability-copy">Open to exciting opportunities and meaningful collaborations.</div>
              </div>
              <div className="heartbeat">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>

        <div className="feature-bar reveal-up">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        <footer className="contact-footer reveal-up">
          <div className="footer-brand">
            <div className="brand-mark">AM</div>
            <div>
              <div className="brand-name">Akshat Muley</div>
              <div className="brand-role">Full Stack Developer</div>
            </div>
          </div>

          <div className="footer-signature">
            <span>Designed &amp; Developed by</span>
            <strong>Akshat Muley</strong>
          </div>

          <div className="footer-meta">
            <div>© 2026 All Rights Reserved</div>
            <div>Crafting digital experiences with impact.</div>
          </div>
        </footer>
      </div>
    </section>
  );
}
