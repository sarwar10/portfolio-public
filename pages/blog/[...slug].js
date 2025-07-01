import { blogPosts } from '@/data'; // Import your blog data
import Image from 'next/image';
import Link from 'next/link';

export async function getServerSideProps(context) {
    const { slug } = context.params;
    return {
        props: {
            slug: slug[0],
        }
    }
}

const BlogDetails = ({ slug }) => {
    const post = blogPosts.find(p => p.link === slug);

    if (!post) {
        return (
            <div className="text-center py-20">
                <h1 className="text-4xl font-bold text-white mb-4">404 Error</h1>
                <p className="text-gray-400">The blog post you're looking for doesn't exist.</p>
            </div>
        );
    }

    return (
        <section className="py-20 bg-gradient-to-r from-black to-green-950">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Back button */}
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Blog
                    </Link>

                    {/* Blog header */}
                    <div className="mb-8">
                        <span className="inline-block bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded-full mb-4">
                            {post.readTime}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{post.title}</h1>
                        <p className="text-gray-400">{post.date}</p>
                    </div>

                    {/* Main image */}
                    <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Blog content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="prose prose-invert max-w-none">
                                <h2 className="text-2xl font-bold text-white mb-4">Article Summary</h2>
                                <p className="text-gray-300 mb-6">{post.excerpt}</p>
                                
                                <h3 className="text-xl font-bold text-white mb-3">Key Takeaways</h3>
                                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                                    <li>Important concept or technique discussed</li>
                                    <li>Practical application of the topic</li>
                                    <li>Future developments to watch for</li>
                                </ul>
                                
                                {/* Additional content sections would go here */}
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-white mb-3">Detailed Analysis</h3>
                                    <p className="text-gray-300 mb-4">
                                        This is where the full blog content would appear. In a real implementation,
                                        you might fetch this from a CMS or Markdown file.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar with author info and share links */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                                <h3 className="text-xl font-bold text-white mb-4">About the Author</h3>
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 overflow-hidden">
                                        {/* Author image would go here */}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Sarwar Alam</h4>
                                        <p className="text-gray-400 text-sm">Full Stack Developer</p>
                                    </div>
                                </div>
                                
                                <p className="text-gray-300 mb-6 text-sm">
                                    Passionate about creating solutions that make an impact through clean code and thoughtful design.
                                </p>
                                
                                <div className="space-y-4">
                                    <Link
                                        href="#"
                                        className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-black font-medium py-2 px-4 rounded transition-colors"
                                    >
                                        Follow Author
                                    </Link>
                                    
                                    <div>
                                        <h4 className="text-white text-sm font-medium mb-2">Share this post</h4>
                                        <div className="flex space-x-3">
                                            {/* Social share icons */}
                                            <button className="text-gray-400 hover:text-white transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                                </svg>
                                            </button>
                                            <button className="text-gray-400 hover:text-white transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                            </button>
                                            <button className="text-gray-400 hover:text-white transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;