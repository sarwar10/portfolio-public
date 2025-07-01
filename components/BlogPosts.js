import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/data";

const BlogSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8
      }
    }
  };

  return (
    <section 
      id="blog" 
      className="py-20 bg-gradient-to-r from-black to-green-950"
     
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Latest <span className="text-yellow-400">Posts</span>
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-950 rounded-xl border border-gray-700 overflow-hidden
              transition duration-300 transform 
              hover:shadow-lg hover:shadow-green-300/10 hover:-translate-y-1
              focus:shadow-lg focus:shadow-green-300/10 focus:-translate-y-1
              active:shadow-lg active:shadow-green-300/10 active:-translate-y-1
              group outline-none"
              tabIndex={0}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-full h-48 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">
                  {post.date} · {post.readTime}
                </div>
                <motion.h3 
                  className="text-xl font-bold mb-2 group-hover:text-yellow-400 group-focus:text-yellow-400 group-active:text-yellow-400 transition"
                  whileHover={{ color: "#facc15" }} // yellow-400
                >
                  {post.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400"
                  whileHover={{ color: "#e5e7eb" }} // gray-200
                >
                  {post.excerpt}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="/blog"
            className="border bg-gray-950 border-gray-700 text-yellow-400 hover:border-gray-400
            focus:border-gray-400 active:border-gray-400 font-medium py-2 px-6 rounded-full 
            transition duration-300 inline-block"
          >
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;