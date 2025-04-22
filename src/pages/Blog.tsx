
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Search, Tag } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Extended mock data for blog posts
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
    `
  },
  {
    id: 2,
    title: 'Pediatric Wellness: Keeping Your Child Healthy',
    excerpt: 'Tips from our pediatric specialists on how to maintain your child\'s health through proper nutrition, exercise, and preventive care.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'June 3, 2023',
    author: 'Dr. Emily Rodriguez',
    category: 'Pediatrics',
    tags: ['Children\'s Health', 'Nutrition', 'Preventive Care'],
    content: `
      Maintaining your child's health involves more than just treating illnesses when they occur. Preventive care and establishing healthy habits early are crucial for long-term well-being.
      
      Nutrition plays a fundamental role in childhood development. We recommend a balanced diet rich in fruits, vegetables, whole grains, and lean proteins. Limit processed foods, sugary drinks, and excessive snacking. Remember that children learn eating habits by watching adults, so modeling healthy eating is essential.
      
      Regular physical activity is another cornerstone of pediatric wellness. Children should get at least 60 minutes of moderate to vigorous activity daily. This can include structured sports, playground time, biking, swimming, or simply playing actively.
      
      Sleep is often overlooked but is crucial for growth, immune function, and cognitive development. School-age children need 9-12 hours of sleep per night, while teenagers require 8-10 hours.
      
      Don't underestimate the importance of regular well-child visits, even when your child appears healthy. These appointments allow us to track growth and development, administer vaccinations, screen for potential issues, and address parental concerns.
      
      Mental health is an integral part of overall wellness. Create open communication with your child, monitor for signs of anxiety or depression, and don't hesitate to seek professional guidance if concerning behaviors emerge.
      
      At White Lotus Hospital, our pediatric team is committed to partnering with families to ensure children thrive physically and emotionally.
    `
  },
  {
    id: 3,
    title: 'Advances in Orthopedic Surgery: What Patients Should Know',
    excerpt: 'Discover the latest technologies and techniques in orthopedic surgery that are improving patient outcomes and recovery times.',
    image: 'https://images.unsplash.com/photo-1579684288361-5c1a2955d0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'June 10, 2023',
    author: 'Dr. James Wilson',
    category: 'Orthopedics',
    tags: ['Surgery', 'Joint Replacement', 'Recovery'],
    content: `
      The field of orthopedic surgery has seen remarkable advancements in recent years, bringing new hope to patients suffering from musculoskeletal conditions. At White Lotus Hospital, our orthopedic team stays at the forefront of these innovations.
      
      Minimally invasive surgical techniques represent one of the most significant advances. These approaches use smaller incisions, resulting in less pain, reduced blood loss, shorter hospital stays, and faster recovery. Many procedures that once required open surgery can now be performed arthroscopically.
      
      Computer-assisted surgery has revolutionized precision in orthopedics. Using specialized software and tracking systems, surgeons can create detailed pre-operative plans and execute procedures with unprecedented accuracy. This is particularly valuable in joint replacement surgeries.
      
      Speaking of joint replacement, modern implants are designed to be more durable and natural in function. Materials like highly cross-linked polyethylene and ceramic-on-ceramic bearings have extended the lifespan of joint replacements, making them viable options for younger, more active patients.
      
      Biological treatments represent another frontier in orthopedics. Platelet-rich plasma (PRP) and stem cell therapies harness the body's natural healing mechanisms to treat various conditions, potentially delaying or avoiding surgery in some cases.
      
      Perhaps most exciting is the emergence of personalized orthopedic care. Using advanced imaging and 3D printing technology, we can create customized surgical guides and implants tailored to each patient's unique anatomy.
      
      If you're considering orthopedic surgery, our team at White Lotus Hospital is ready to discuss how these advancements might benefit your specific situation.
    `
  },
  {
    id: 4,
    title: 'Mental Health Awareness: Breaking the Stigma',
    excerpt: 'Our mental health specialists discuss the importance of addressing mental health openly and seeking appropriate care.',
    image: 'https://images.unsplash.com/photo-1513596846216-48ae70153834?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'July 5, 2023',
    author: 'Dr. Marcus Johnson',
    category: 'Psychiatry',
    tags: ['Mental Health', 'Awareness', 'Self-Care'],
    content: `
      Mental health is an essential component of overall well-being, yet stigma and misconceptions often prevent people from seeking help. At White Lotus Hospital, we're committed to changing this narrative.
      
      First, it's important to understand that mental health conditions are medical conditions, not character flaws or personal weaknesses. They affect people of all ages, backgrounds, and walks of life. In fact, approximately one in five adults in the United States experiences a mental illness in any given year.
      
      Common conditions like anxiety and depression are highly treatable, yet many people suffer in silence. Warning signs can include persistent sadness, excessive worrying, withdrawal from activities, changes in sleep or appetite, difficulty concentrating, and thoughts of self-harm.
      
      Treatment approaches vary based on the specific condition and individual needs. Options include psychotherapy (talk therapy), medication, lifestyle changes, support groups, and complementary therapies. Often, a combination of approaches yields the best results.
      
      Self-care plays a vital role in maintaining mental health. Regular exercise, adequate sleep, healthy eating, stress management, and maintaining social connections all contribute to emotional resilience.
      
      If you or someone you know is struggling, remember that seeking help is a sign of strength, not weakness. Our mental health team at White Lotus Hospital provides compassionate, confidential care in a judgment-free environment.
      
      Together, we can break the stigma surrounding mental health and ensure that everyone has access to the support they need.
    `
  },
  {
    id: 5,
    title: 'The Role of Nutrition in Managing Chronic Diseases',
    excerpt: 'Explore how dietary choices can help manage conditions like diabetes, heart disease, and autoimmune disorders.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'July 28, 2023',
    author: 'Dr. Robert Taylor',
    category: 'Nutrition',
    tags: ['Diet', 'Chronic Disease', 'Wellness'],
    content: `
      The saying "food is medicine" has substantial scientific backing, particularly when it comes to managing chronic diseases. At White Lotus Hospital, our nutritional counseling services help patients harness the power of dietary choices to improve their health.
      
      For individuals with diabetes, dietary management is fundamental. Controlling carbohydrate intake, emphasizing foods with a low glycemic index, incorporating healthy fats and lean proteins, and maintaining consistent meal timing can help regulate blood sugar levels. Each patient's nutritional plan should be individualized based on their specific type of diabetes, medication regimen, and lifestyle.
      
      Heart disease management benefits significantly from the DASH (Dietary Approaches to Stop Hypertension) or Mediterranean eating patterns. These emphasize fruits, vegetables, whole grains, lean proteins, and healthy fats while limiting sodium, saturated fats, and added sugars. For many patients, these dietary changes can reduce the need for medications or enhance their effectiveness.
      
      Autoimmune disorders like rheumatoid arthritis, lupus, and inflammatory bowel disease often involve chronic inflammation. Anti-inflammatory diets that include omega-3 fatty acids, antioxidant-rich fruits and vegetables, and spices like turmeric and ginger may help manage symptoms. Some patients also benefit from identifying and eliminating food sensitivities.
      
      Kidney disease requires careful attention to protein, sodium, potassium, and phosphorus intake, with needs varying based on the stage of disease. Working with a renal dietitian is essential for these patients.
      
      While nutrition is powerful, it's important to view it as one component of a comprehensive treatment plan. Our registered dietitians work closely with physicians to ensure nutritional recommendations complement medical treatments.
      
      If you're managing a chronic condition, schedule a consultation with our nutrition team to develop a personalized eating plan that supports your health goals.
    `
  },
  {
    id: 6,
    title: 'Women\'s Health: Important Screenings at Every Age',
    excerpt: 'A comprehensive guide to the health screenings and preventive measures women should consider throughout their lives.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'August 12, 2023',
    author: 'Dr. Lisa Wong',
    category: 'Women\'s Health',
    tags: ['Preventive Care', 'Screenings', 'Women\'s Health'],
    content: `
      Preventive healthcare is crucial for women at every stage of life. Regular screenings can detect potential problems early, when they're most treatable. At White Lotus Hospital, we recommend the following age-appropriate screenings:
      
      In your 20s, establish a relationship with a primary care provider and gynecologist. Annual wellness exams should include blood pressure, cholesterol screening, and skin checks. Pap smears should begin at age 21 and be repeated every three years if results are normal. STI testing should be performed as needed based on risk factors.
      
      In your 30s, continue the screenings from your 20s. Pap smears may be combined with HPV testing and, if normal, can be done every five years. If you're planning pregnancy, preconception counseling is recommended. Thyroid screening may be considered, especially if you have symptoms or a family history of thyroid disease.
      
      Your 40s bring additional screenings. Mammograms should begin at age 40 and be repeated annually or biennially based on risk factors. Blood glucose testing should be initiated to screen for diabetes, particularly if you're overweight or have other risk factors. Baseline bone density testing may be considered if you have risk factors for osteoporosis.
      
      In your 50s, colorectal cancer screening should begin, with colonoscopy being the gold standard. Lung cancer screening may be recommended if you have a significant smoking history. All women should have a bone density test by age 65, or earlier if risk factors are present.
      
      Beyond screenings, maintain preventive health practices like regular physical activity, a balanced diet, adequate sleep, stress management, and avoidance of tobacco and excessive alcohol. Remember that these guidelines are general—your doctor may recommend different schedules based on your personal and family health history.
      
      At White Lotus Hospital, we're committed to partnering with women to ensure they receive appropriate preventive care throughout their lives.
    `
  },
  {
    id: 7,
    title: 'Managing Seasonal Allergies: Beyond Over-the-Counter Remedies',
    excerpt: 'Our allergy specialists provide insights on effectively managing seasonal allergies for improved quality of life.',
    image: 'https://images.unsplash.com/photo-1513315849661-23219279c227?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'September 5, 2023',
    author: 'Dr. Priya Sharma',
    category: 'Allergy & Immunology',
    tags: ['Allergies', 'Seasonal', 'Treatment'],
    content: `
      Seasonal allergies affect millions of people, causing symptoms that range from mildly annoying to severely disruptive. While over-the-counter medications provide relief for many, some individuals require more comprehensive management strategies.
      
      First, it's helpful to understand what's happening in your body during an allergic reaction. When you encounter an allergen like pollen, your immune system overreacts, releasing chemicals like histamine that cause inflammation and the familiar symptoms of sneezing, runny nose, itchy eyes, and congestion.
      
      Prevention is the first line of defense. Monitor pollen counts and limit outdoor activities when counts are high. Keep windows closed during peak pollen seasons, shower after spending time outdoors, and consider using a HEPA air purifier in your home. Nasal irrigation with saline solution can rinse allergens from nasal passages before they trigger symptoms.
      
      When medications are necessary, many options exist beyond basic antihistamines. Intranasal corticosteroids are highly effective for nasal symptoms and have minimal side effects when used as directed. Leukotriene modifiers can help with both allergies and asthma symptoms. For eye symptoms, specialized antihistamine eye drops often provide quick relief.
      
      For patients with severe or persistent allergies, immunotherapy (allergy shots or sublingual tablets) can provide long-term relief by gradually desensitizing the immune system to specific allergens. This is the only treatment that addresses the underlying cause rather than just managing symptoms.
      
      At White Lotus Hospital, our allergy specialists can perform comprehensive testing to identify your specific triggers and develop a personalized treatment plan. If seasonal allergies are impacting your quality of life, consider scheduling a consultation for more targeted relief.
    `
  },
  {
    id: 8,
    title: 'Sleep Disorders: Diagnosis and Modern Treatment Approaches',
    excerpt: 'Learn about common sleep disorders and the advanced diagnostic and treatment options available at our Sleep Medicine Center.',
    image: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'October 18, 2023',
    author: 'Dr. Michael Chen',
    category: 'Sleep Medicine',
    tags: ['Sleep', 'Sleep Apnea', 'Insomnia'],
    content: `
      Quality sleep is essential for physical health, cognitive function, and emotional well-being, yet an estimated 50-70 million Americans suffer from sleep disorders. At White Lotus Hospital's Sleep Medicine Center, we offer comprehensive diagnosis and treatment for these often-overlooked conditions.
      
      Insomnia, characterized by difficulty falling or staying asleep, is the most common sleep disorder. While occasional sleeplessness is normal, chronic insomnia requires attention. Cognitive behavioral therapy for insomnia (CBT-I) is now considered the first-line treatment, often proving more effective than medications in the long term.
      
      Sleep apnea involves repeated breathing interruptions during sleep, leading to oxygen deprivation and sleep fragmentation. Beyond fatigue, untreated sleep apnea increases risks for hypertension, heart disease, stroke, and diabetes. While CPAP remains the gold standard treatment, alternatives include oral appliances, positional therapy, and, in select cases, surgical interventions.
      
      Restless legs syndrome (RLS) causes uncomfortable sensations and an irresistible urge to move the legs, especially in the evening. Treatment may include iron supplementation if deficiency is present, medications that affect dopamine levels, and lifestyle modifications.
      
      Narcolepsy, a neurological disorder causing excessive daytime sleepiness and sometimes sudden muscle weakness (cataplexy), requires specialized management with medications and behavioral strategies.
      
      Diagnosis begins with a thorough sleep history and may include sleep diaries, actigraphy (wrist-worn monitors that track movement), and polysomnography (overnight sleep studies). Home sleep apnea tests are available for appropriate candidates.
      
      If you're experiencing persistent sleep problems, don't dismiss them as inevitable. Our sleep medicine specialists can help identify the underlying causes and develop an effective treatment plan to improve both your sleep quality and overall health.
    `
  },
  {
    id: 9,
    title: 'Breakthrough Treatments in Cancer Care: A New Era of Hope',
    excerpt: 'Discover how advances in precision medicine, immunotherapy, and targeted treatments are transforming cancer care at White Lotus Hospital.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'November 22, 2023',
    author: 'Dr. Sarah Johnson',
    category: 'Oncology',
    tags: ['Cancer', 'Treatment', 'Research'],
    content: `
      Cancer treatment has undergone a remarkable transformation in recent years, moving from a one-size-fits-all approach to increasingly personalized care. At White Lotus Hospital's Cancer Center, patients benefit from these groundbreaking advances.
      
      Precision medicine represents a fundamental shift in cancer care. By analyzing the specific genetic mutations driving a patient's cancer, oncologists can select targeted therapies designed to attack cancer cells while sparing healthy tissue. This approach has proven particularly effective for certain lung, breast, and blood cancers.
      
      Immunotherapy, which harnesses the body's immune system to fight cancer, has produced dramatic results for some patients. Checkpoint inhibitors, a class of immunotherapy drugs, have revolutionized the treatment of melanoma, lung cancer, and several other malignancies. CAR-T cell therapy, which involves engineering a patient's own immune cells to recognize and attack cancer, has shown remarkable results for certain blood cancers.
      
      Advances in radiation therapy now allow for more precise targeting of tumors with higher doses of radiation while minimizing damage to surrounding tissues. Techniques like intensity-modulated radiation therapy (IMRT), stereotactic body radiation therapy (SBRT), and proton therapy exemplify this progress.
      
      Minimally invasive surgical approaches, including robotic surgery, have reduced recovery times and complications for many cancer patients. Additionally, enhanced imaging technologies allow surgeons to more accurately identify and remove cancerous tissue.
      
      Liquid biopsies—blood tests that can detect circulating tumor DNA—are improving early detection and treatment monitoring, sometimes eliminating the need for invasive tissue biopsies.
      
      While these advances are promising, it's important to note that treatment success varies based on cancer type, stage, and individual factors. At White Lotus Hospital, our multidisciplinary team works to develop personalized treatment plans incorporating the most appropriate contemporary approaches for each patient.
      
      If you or a loved one has been diagnosed with cancer, we encourage you to explore all treatment options with our oncology team.
    `
  },
  {
    id: 10,
    title: 'Diabetes Management: Integrating Technology and Lifestyle',
    excerpt: 'How continuous glucose monitoring, insulin pumps, and lifestyle modifications are helping patients achieve better diabetes control.',
    image: 'https://images.unsplash.com/photo-1598885148183-beeb89859204?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'December 10, 2023',
    author: 'Dr. Robert Taylor',
    category: 'Endocrinology',
    tags: ['Diabetes', 'Technology', 'Lifestyle'],
    content: `
      Diabetes management has evolved significantly, moving beyond finger sticks and injections to embrace technological innovations that improve both care quality and patients' quality of life. At White Lotus Hospital's Diabetes Center, we integrate these advances with proven lifestyle approaches.
      
      Continuous Glucose Monitoring (CGM) systems have transformed diabetes care by providing real-time glucose readings throughout the day and night. These devices reduce the need for frequent finger sticks and provide invaluable data on glucose trends, allowing for more precise treatment adjustments. Perhaps most importantly, CGM systems can alert users to impending hypoglycemia or hyperglycemia, enhancing safety and peace of mind.
      
      Modern insulin pumps offer unprecedented flexibility and precision in insulin delivery. Some systems now integrate with CGM data to automatically adjust insulin delivery—a significant step toward an artificial pancreas. These "closed-loop" systems have been shown to improve time-in-range metrics and reduce hypoglycemic episodes.
      
      Digital health applications help patients track medication, food intake, physical activity, and glucose levels in one place, making pattern recognition easier. Many apps also offer educational resources and can generate reports to share with healthcare providers.
      
      Despite these technological advances, lifestyle management remains the foundation of diabetes care. Structured nutrition plans, regular physical activity, adequate sleep, and stress management all substantially impact glycemic control. Our certified diabetes educators work with patients to develop sustainable lifestyle modifications tailored to individual preferences and circumstances.
      
      For patients with type 2 diabetes, emerging evidence supports intermittent fasting, time-restricted eating, and low-carbohydrate approaches as potential strategies for improving insulin sensitivity and reducing medication requirements. Weight management, particularly through programs that address behavioral and psychological factors, remains crucial for many patients.
      
      At White Lotus Hospital, we believe the most successful diabetes management plans combine appropriate technology with individualized lifestyle strategies and regular medical supervision. Our team is committed to helping patients access and integrate these resources for optimal health.
    `
  },
];

// Available categories for filtering
const categories = [
  'All',
  'Cardiology',
  'Pediatrics',
  'Orthopedics',
  'Psychiatry',
  'Nutrition',
  'Women\'s Health',
  'Allergy & Immunology',
  'Sleep Medicine',
  'Oncology',
  'Endocrinology'
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-hospital-800 mb-4">Health Articles</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest health tips, medical advancements, and wellness advice from our experts.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="md:w-1/3">
                <select
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Featured Article */}
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-auto">
                    <img 
                      src={filteredPosts[0].image} 
                      alt={filteredPosts[0].title} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <Badge className="bg-hospital-600 mb-3">
                      {filteredPosts[0].category}
                    </Badge>
                    <h2 className="text-2xl font-bold text-hospital-800 mb-3">
                      <Link to={`/blog/${filteredPosts[0].id}`} className="hover:text-hospital-600 transition-colors">
                        {filteredPosts[0].title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">{filteredPosts[0].excerpt}</p>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <time dateTime={filteredPosts[0].date}>{filteredPosts[0].date}</time>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{filteredPosts[0].author}</span>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${filteredPosts[0].id}`}>
                      <Button className="bg-hospital-600 hover:bg-hospital-700">
                        Read Full Article
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
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
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <div key={index} className="flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </div>
                    ))}
                  </div>
                  
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
          
          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600 mb-4">No articles match your search criteria</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or browse all articles</p>
              <Button 
                variant="outline" 
                className="border-hospital-600 text-hospital-600"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
