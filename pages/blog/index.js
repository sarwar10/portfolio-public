import { blogPosts } from '@/data'; // Import your blog data
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogsPage = () => {
  return (
    <>
     
      
      <section id="blog" className="py-20 bg-gradient-to-r from-black to-green-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Latest <span className="text-yellow-400">Blog Posts</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <span className="inline-block bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{post.title}</h3>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  
                  <Link
                    href={`/blog/${post.link}`}
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Read Article
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default BlogsPage;