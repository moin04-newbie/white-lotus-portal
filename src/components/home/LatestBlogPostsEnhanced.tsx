
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  published: string;
  category: string;
}

const mockArticles: Article[] = [
  {
    id: 1,
    title: "Heart Health: 5 Signs You Shouldn't Ignore",
    excerpt: "Learn the key warning signs and when to consult a doctor for heart issues.",
    author: "Dr. Sarah Johnson",
    published: "2024-04-15",
    category: "Cardiology",
  },
  {
    id: 2,
    title: "Pediatric Asthma: Managing Symptoms in Children",
    excerpt: "Asthma in children can be managed effectively with the right care.",
    author: "Dr. Emily Rodriguez",
    published: "2024-04-10",
    category: "Pediatrics",
  },
  {
    id: 3,
    title: "Healthy Eating for Better Skin",
    excerpt: "Diet tips and food recommendations for glowing, healthy skin.",
    author: "Dr. Priya Sharma",
    published: "2024-03-30",
    category: "Dermatology",
  },
  {
    id: 4,
    title: "Neuro Health: Coping with Stress",
    excerpt: "Simple lifestyle habits that can help you reduce neurological stress.",
    author: "Dr. Michael Chen",
    published: "2024-03-28",
    category: "Neurology",
  },
  {
    id: 5,
    title: "What to Do in a Medical Emergency",
    excerpt: "Essential steps to handle medical emergencies before reaching the hospital.",
    author: "ER Team",
    published: "2024-04-21",
    category: "Emergency",
  },
  {
    id: 6,
    title: "Joint Replacement: Modern Surgical Advances",
    excerpt: "Discover the latest technology trends in orthopedic joint replacements.",
    author: "Dr. James Wilson",
    published: "2024-03-10",
    category: "Orthopedics",
  },
  // Add more as needed
];

const categories = [...new Set(mockArticles.map(a => a.category)), "All"];

const LatestBlogPostsEnhanced = ({
  showSearch = true,
}: { showSearch?: boolean }) => {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const filtered = mockArticles.filter((a) =>
    (category === "All" || a.category === category) &&
    (a.title.toLowerCase().includes(search.toLowerCase()) || 
     a.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-hospital-800 mb-2">Latest Blog Posts</h2>
            <p className="text-gray-500 mb-4">Insights and guidance from hospital experts.</p>
          </div>
          {showSearch && (
            <div className="flex items-center gap-2 mb-2 md:mb-0">
              <input className="border p-2 rounded bg-white"
                     placeholder="Search articles"
                     value={search}
                     onChange={e => setSearch(e.target.value)}
              />
              <select className="border p-2 rounded bg-white" value={category} onChange={e => setCategory(e.target.value)}>
                {categories.map(cat => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.length === 0 && (
            <div className="col-span-2 text-center text-gray-500">No articles found.</div>
          )}
          {filtered.map(article => (
            <div key={article.id} className="bg-white border rounded-lg p-4 shadow">
              <div className="mb-2 font-semibold text-hospital-600">{article.category}</div>
              <h3 className="text-xl font-bold mb-1">{article.title}</h3>
              <div className="text-gray-600 mb-2">{article.excerpt}</div>
              <div className="text-xs text-gray-400 mb-2">By {article.author} on {article.published}</div>
              <Link
                to={`/blog/${article.id}`}
                className="text-hospital-600 hover:underline text-sm font-medium"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPostsEnhanced;
