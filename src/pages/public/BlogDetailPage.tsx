import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import blogData from "@/data/blog.json";

export default function BlogDetailPage() {
  const { slug } = useParams();
  
  const article = blogData.blog_articles.find(b => b.slug === slug);

  if (!article) {
    return (
      <div className="w-full min-h-[50vh] flex flex-col items-center justify-center p-8 text-center text-foreground">
        <h1 className="text-4xl font-display font-black uppercase mb-4">404: Artikel Tidak Ditemukan</h1>
        <Button asChild variant="outline" className="border-2 border-black rounded-xl">
           <Link to="/blog">Kembali ke Daftar Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-background">
      
      {/* Blog Hero Wrapper */}
      <section className="w-full pt-16 pb-12 border-b-2 border-black bg-background  relative">
         {/* Background Grid Pattern */}
         <div 
          className="absolute inset-0 z-0 opacity-[0.1]"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
         />

         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            
            <div className="flex items-center gap-2 mb-8 text-muted-foreground hover:text-primary transition-colors self-start lg:absolute lg:left-8 lg:top-8">
               <ArrowLeft className="w-4 h-4" />
               <Link to="/blog" className="font-body font-bold text-sm uppercase">Kembali</Link>
            </div>

            <div className="bg-primary text-black font-body font-bold text-xs md:text-sm uppercase px-4 py-1 border-2 border-black rounded-full shadow-brutal-sm mb-6">
               {article.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tighter mb-8 leading-[1.1]">
               {article.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 font-body font-bold text-sm uppercase text-gray-600 dark:text-gray-400">
               <span className="flex items-center gap-2"><User className="w-4 h-4"/> {article.author}</span>
               <span className="flex items-center gap-2"><Calendar className="w-4 h-4"/> {article.date_readable}</span>
               <span className="flex items-center gap-2"><Clock className="w-4 h-4"/> {article.read_time}</span>
            </div>
         </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           
           {/* Featured Image */}
           <div className="w-full aspect-video border-4 border-black rounded-3xl overflow-hidden shadow-brutal bg-muted mb-16">
              <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              
              {/* Share Sidebar (Sticky on Desktop) */}
              <div className="md:col-span-2 md:sticky md:top-28 flex flex-row md:flex-col gap-4 items-center md:items-start justify-center border-b-2 border-black md:border-b-0 pb-8 md:pb-0">
                 <span className="font-display font-black uppercase text-sm text-muted-foreground mr-4 md:mr-0 md:mb-2">Bagikan</span>
                 <a href="#" className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-card text-card-foreground shrink-0">
                   <Twitter className="w-4 h-4" />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-card text-card-foreground shrink-0">
                   <Facebook className="w-4 h-4" />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors bg-card text-card-foreground shrink-0">
                   <Linkedin className="w-4 h-4" />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-primary hover:text-black transition-colors bg-card text-card-foreground shrink-0">
                   <Share2 className="w-4 h-4" />
                 </a>
              </div>

              {/* Read Zone */}
              <div className="md:col-span-10 flex flex-col gap-12">
                 
                 <article className="prose prose-lg dark:prose-invert max-w-none font-body prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-primary prose-a:font-bold prose-img:border-4 prose-img:border-black prose-img:rounded-xl prose-img:shadow-brutal-sm prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:font-bold prose-blockquote:italic">
                    <div className="markdown-body" dangerouslySetInnerHTML={{ __html: article.body_html }} />
                 </article>
                 
                 {/* Tags */}
                 {article.tags && article.tags.length > 0 && (
                   <div className="pt-8 border-t-2 border-dashed border-gray-300 dark:border-gray-700">
                     <h4 className="font-display font-bold uppercase mb-4 text-sm text-foreground flex items-center gap-2"><Tag className="w-4 h-4"/> Jelajahi Lebih Lanjut</h4>
                     <div className="flex flex-wrap gap-2">
                       {article.tags.map((t: string) => (
                         <Link key={t} to={`/blog?category=${encodeURIComponent(t)}`} className="px-3 py-1 bg-card border-2 border-black hover:bg-black hover:text-white dark:bg-transparent dark:text-foreground dark:hover:bg-card dark:hover:text-black transition-colors rounded-full text-xs font-bold font-body uppercase shadow-[2px_2px_0_0_#000]">#{t}</Link>
                       ))}
                     </div>
                   </div>
                 )}

              </div>

           </div>

        </div>
      </section>

    </div>
  )
}
