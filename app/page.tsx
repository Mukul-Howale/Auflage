import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Define Your Style</h1>
            <p className="text-xl mb-8">Discover the latest trends in fashion</p>
            <Button asChild size="lg">
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category) => (
            <div key={category.name} className="relative h-96 group">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href={`/shop?category=${category.name.toLowerCase()}`}
                  className="text-white text-2xl font-bold hover:underline"
                >
                  {category.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {newArrivals.map((item) => (
              <div key={item.name} className="group">
                <div className="relative h-96 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest updates and exclusive offers.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

const categories = [
  {
    name: "Women",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
  },
  {
    name: "Men",
    image: "https://images.unsplash.com/photo-1488161628813-04466f872be2",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93",
  },
];

const newArrivals = [
  {
    name: "Summer Dress",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },
  {
    name: "Classic Shirt",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
  },
  {
    name: "Denim Jacket",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e",
  },
  {
    name: "Leather Bag",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
  },
];