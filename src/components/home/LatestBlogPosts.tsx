
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Heart Disease: Prevention and Treatment',
    excerpt: 'Learn about the latest advancements in heart disease prevention and treatment options available at White Lotus Hospital.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'May 15, 2023',
    author: 'Dr. Sarah Johnson',
    category: 'Cardiology',
  },
  {
    id: 2,
    title: 'Pediatric Wellness: Keeping Your Child Healthy',
    excerpt: 'Tips from our pediatric specialists on how to maintain your child\'s health through proper nutrition, exercise, and preventive care.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'June 3, 2023',
    author: 'Dr. Emily Rodriguez',
    category: 'Pediatrics',
  },
  {
    id: 3,
    title: 'Advances in Orthopedic Surgery: What Patients Should Know',
    excerpt: 'Discover the latest technologies and techniques in orthopedic surgery that are improving patient outcomes and recovery times.',
    image: 'https://images.unsplash.com/photo-1579684288361-5c1a2955d0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'June 10, 2023',
    author: 'Dr. James Wilson',
    category: 'Orthopedics',
  },
];

const LatestBlogPosts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hospital-800 mb-4">Latest Health Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest health tips, medical advancements, and wellness advice from our experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/blog/${post.id}`} className="block relative overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-hospital-600 text-white text-xs uppercase font-semibold py-1 px-2 rounded">
                  {post.category}
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-hospital-800 mb-2 hover:text-hospital-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-hospital-600 font-medium inline-flex items-center hover:text-hospital-700"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="border border-hospital-600 text-hospital-600 hover:bg-hospital-50 font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
          >
            View All Articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
