const collections = [
  {
    id: 1,
    name: "Summer Collection",
    description: "Light and breezy pieces for the warm season",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Winter Essentials",
    description: "Cozy and warm winter wear",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Formal Edit",
    description: "Sophisticated formal wear for special occasions",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

export default function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <div key={collection.id} className="group relative">
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
              <img
                src={collection.image}
                alt={collection.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-center text-white p-4">
                  <h3 className="text-2xl font-semibold mb-2">{collection.name}</h3>
                  <p className="text-sm">{collection.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}