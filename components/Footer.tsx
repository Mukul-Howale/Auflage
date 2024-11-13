export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">About</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Our Story</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Sustainability</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Shipping</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Returns</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-600">Subscribe to get special offers, free giveaways, and updates.</p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-sm text-gray-600 text-center">&copy; {new Date().getFullYear()} Auflage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}