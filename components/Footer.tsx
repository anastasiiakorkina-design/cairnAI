import Link from 'next/link';
import { Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const columns = [
    {
      title: 'PLATFORM',
      links: [
        { label: 'AI Intake', href: '#' },
        { label: 'Workflow Orchestration', href: '#' },
        { label: 'Supplier Management', href: '#' },
        { label: 'Compliance & Reporting', href: '#' },
        { label: 'Analytics', href: '#' },
        { label: 'Integrations', href: '#' },
      ],
    },
    {
      title: 'SOLUTIONS',
      links: [
        { label: 'Local Authorities', href: '#' },
        { label: 'NHS Scotland', href: '#' },
        { label: 'Higher Education', href: '#' },
        { label: 'Private Sector', href: '#' },
        { label: 'Third Sector', href: '#' },
      ],
    },
    {
      title: 'SCOTLAND',
      links: [
        { label: 'Scottish Compliance', href: '#' },
        { label: 'PCS Integration', href: '#' },
        { label: 'Fair Work Practices', href: '#' },
        { label: 'Community Benefits', href: '#' },
        { label: 'Case Studies', href: '#' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
  ];

  return (
    <footer className="section-dark bg-cairn-navy text-white">
      {/* Main Footer Content */}
      <div className="container-max py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Connect Column */}
          <div>
            <h3 className="text-sm font-bold uppercase letter-spacing-wide mb-6">
              CONNECT
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:hello@cairnai.co.uk"
                className="flex items-center gap-3 hover:text-cairn-gold transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>hello@cairnai.co.uk</span>
              </a>
              <a
                href="tel:+441315559999"
                className="flex items-center gap-3 hover:text-cairn-gold transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>0131 555 9999</span>
              </a>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cairn-blue transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cairn-blue transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Columns */}
          {columns.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-bold uppercase letter-spacing-wide mb-6">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, lidx) => (
                  <li key={lidx}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-cairn-gold transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2026 CairnAI Ltd. Registered in Scotland. Company No. SCXXXXXX.
            </p>
            <p className="text-sm text-white/60">
              Made in Scotland, for Scotland.
            </p>
          </div>
        </div>
      </div>

      {/* Cookie Banner Placeholder */}
      <div className="bg-cairn-navy-light border-t border-white/10 px-6 py-4 text-center text-sm text-white/70">
        <p>
          We use cookies to enhance your experience. By continuing to browse, you
          consent to our{' '}
          <Link href="#" className="hover:text-cairn-gold transition-colors">
            cookie policy
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
