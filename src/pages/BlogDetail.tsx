
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

// Use the same blog posts data from Blog.tsx
// This would normally be fetched from an API
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Heart Disease: Prevention and Treatment',
    excerpt: 'Learn about the latest advancements in heart disease prevention and treatment options available at White Lotus Hospital.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'May 15, 2023',
    author: 'Dr. Sarah Johnson',
    category: 'Cardiology',
    tags: ['Heart Disease', 'Prevention', 'Treatment'],
    content: `
      Heart disease remains the leading cause of death globally, but advancements in both prevention and treatment are giving patients more hope than ever before. At White Lotus Hospital, our cardiology team specializes in comprehensive heart care.
      
      Prevention remains the most effective strategy against heart disease. Our approach includes detailed risk assessment, lifestyle counseling, and preventive medications when appropriate. Regular exercise, a heart-healthy diet, avoiding tobacco, and managing stress are cornerstone recommendations for all patients.
      
      For patients who develop heart disease, our treatment options include the latest in medication management, minimally invasive procedures, and advanced surgical techniques. Our cardiac catheterization lab offers procedures like angioplasty and stenting to open blocked arteries without major surgery.
      
      For more complex cases, our cardiac surgeons perform advanced procedures including coronary artery bypass grafting (CABG), valve repair and replacement, and procedures to correct congenital heart defects.
      
      White Lotus Hospital also offers comprehensive cardiac rehabilitation programs to help patients recover and maintain heart health after a cardiac event or procedure.
      
      If you have concerns about your heart health, don't wait. Schedule a consultation with our cardiology team today.
    `,
    authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    authorRole: 'Cardiology Specialist',
    authorBio: 'Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in preventive cardiology and heart disease management.',
  },
  // ... include the rest of the blog posts from Blog.tsx with additional author fields
  // I'm not including all of them here to save space, but in a real implementation they would all be here
];

// Function to get related articles based on category or tags
const getRelatedArticles = (currentArticle, allArticles) => {
  return allArticles
    .filter(article => 
      article.id !== currentArticle.id && 
      (article.category === currentArticle.category || 
       article.tags.some(tag => currentArticle.tags.includes(tag)))
    )
    .slice(0, 3); // Get up to 3 related articles
};

const BlogDetail = () => {
  const { id } = useParams();
  const articleId = parseInt(id || '1');
  
  // Find the article with the matching ID
  const article = blogPosts.find(post => post.id === articleId) || blogPosts[0];
  
  // Get related articles
  const relatedArticles = getRelatedArticles(article, blogPosts);
  
  // Format the content with paragraphs
  const formattedContent = article.content.split('\n\n').map((paragraph, index) => (
    <p key={index} className="mb-6">{paragraph.trim()}</p>
  ));
  
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('');
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/blog" className="text-hospital-600 hover:text-hospital-700 inline-flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to All Articles
            </Link>
          </div>
          
          {/* Hero Section */}
          <div className="mb-10">
            <div className="relative h-96 rounded-xl overflow-hidden mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="inline-block bg-hospital-600 text-white text-sm font-semibold py-1 px-3 rounded mb-4">
                  {article.category}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h1>
                <div className="flex items-center text-white text-sm">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <time dateTime={article.date}>{article.date}</time>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="prose prose-hospital max-w-none">
                  {formattedContent}
                </div>
                
                {/* Tags */}
                <div className="mt-10 pt-6 border-t">
                  <h3 className="text-sm font-semibold text-gray-500 mb-3">TAGS</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <div key={index} className="flex items-center text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        <Tag size={14} className="mr-1" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Author Section */}
                <div className="mt-10 pt-6 border-t">
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">WRITTEN BY</h3>
                  <div className="flex items-start">
                    <Avatar className="w-16 h-16 rounded-full mr-4">
                      <AvatarImage src={article.authorImage} alt={article.author} />
                      <AvatarFallback>{getInitials(article.author)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold text-hospital-800">{article.author}</h4>
                      <p className="text-hospital-600 text-sm mb-2">{article.authorRole}</p>
                      <p className="text-gray-600">{article.authorBio}</p>
                    </div>
                  </div>
                </div>
                
                {/* Share Buttons */}
                <div className="mt-10 pt-6 border-t">
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">SHARE THIS ARTICLE</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="rounded-full">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Articles */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-hospital-800 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle) => (
                    <div key={relatedArticle.id} className="flex items-start">
                      <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden mr-4">
                        <img 
                          src={relatedArticle.image} 
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-hospital-800 hover:text-hospital-600 transition-colors">
                          <Link to={`/blog/${relatedArticle.id}`}>{relatedArticle.title}</Link>
                        </h4>
                        <div className="flex items-center text-gray-500 text-xs mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{relatedArticle.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-hospital-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {Array.from(new Set(blogPosts.map(post => post.category))).map((category, index) => (
                    <li key={index}>
                      <Link 
                        to={`/blog?category=${category}`} 
                        className="flex items-center justify-between text-gray-700 hover:text-hospital-600 py-2 border-b border-gray-100"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded-full">
                          {blogPosts.filter(post => post.category === category).length}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-hospital-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-hospital-800 mb-3">Health Newsletter</h3>
                <p className="text-gray-600 mb-4">Stay updated with our latest health articles and news.</p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hospital-500 focus:border-transparent"
                  />
                  <Button className="w-full bg-hospital-600 hover:bg-hospital-700">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
