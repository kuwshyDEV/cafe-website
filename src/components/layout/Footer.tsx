import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brown-800 text-cream-50 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Urban Brew Café</h3>
          <p className="text-sm">Serving delicious coffee and meals since 2010</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <nav className="space-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/menu', label: 'Menu' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="block text-cream-50/80 hover:text-cream-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <address className="not-italic space-y-2">
            <p>123 Brew Street</p>
            <p>City, State 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: hello@urbanbrew.com</p>
          </address>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="container mx-auto px-4 mt-8 pt-4 border-t border-brown-500 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          {['Facebook', 'Instagram', 'Twitter'].map((platform) => (
            <a 
              key={platform}
              href="#" 
              className="text-cream-50/80 hover:text-cream-50"
            >
              {platform}
            </a>
          ))}
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Urban Brew Café. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
