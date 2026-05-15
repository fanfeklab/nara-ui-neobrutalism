import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Tag, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import blogData from "@/data/blog.json";
import { useMemo } from "react";

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "all";

  const allBlogs = blogData.blog_articles;

  const filteredBlogs = useMemo(() => {
    if (categoryFilter === "all") return allBlogs;
    return allBlogs.filter((b: any) => b.category === categoryFilter);
  }, [categoryFilter, allBlogs]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    allBlogs.forEach((b: any) => cats.add(b.category));
    return Array.from(cats);
  }, [allBlogs]);

  const featuredBlog = filteredBlogs[0]; // Assuming first is featured for dummy logic
  const restBlogs = filteredBlogs.slice(1);

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header */}
      <section className="w-full py-20 bg-background  border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6 relative inline-block text-foreground">
            WAWASAN{" "}
            <span className="text-accent drop-shadow-[2px_2px_0_#000] dark:drop-shadow-none bg-black px-4 ml-2 border-4 border-black dark:border-white rounded-xl">
              LOKASI
            </span>
          </h1>
          <p className="text-xl font-body max-w-2xl text-muted-foreground font-medium">
            Insight, opini, dan teknik dari markas pusat operasi.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full py-6 border-b-2 border-black bg-card sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto hide-scrollbars">
          <Button
            variant={categoryFilter === "all" ? "solid" : "outline"}
            size="sm"
            className="rounded-lg shrink-0 border-2 border-black font-bold uppercase transition-colors"
            onClick={() => {
              searchParams.set("category", "all");
              setSearchParams(searchParams);
            }}
          >
            Semua Artikel
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={categoryFilter === cat ? "solid" : "outline"}
              size="sm"
              className="rounded-lg shrink-0 border-2 border-black font-bold uppercase transition-colors"
              onClick={() => {
                searchParams.set("category", cat);
                setSearchParams(searchParams);
              }}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length === 0 ? (
            <div className="py-24 text-center border-4 border-black border-dashed rounded-2xl">
              <h3 className="font-display font-black text-2xl uppercase opacity-50">
                Tidak ada artikel ditemukan
              </h3>
            </div>
          ) : (
            <div className="flex flex-col gap-16">
              {/* Featured Article */}
              {featuredBlog && (
                <Link
                  to={featuredBlog.slug}
                  className="group relative flex flex-col lg:flex-row bg-card border-4 border-black rounded-3xl overflow-hidden shadow-brutal hover:-translate-y-2 transition-transform"
                >
                  <div className="lg:w-2/3 aspect-video lg:aspect-auto relative bg-muted border-b-4 lg:border-b-0 lg:border-r-4 border-black overflow-hidden shrink-0">
                    <img
                      src={featuredBlog.thumbnail}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-black font-display font-bold text-sm uppercase px-3 py-1 border-2 border-black rounded-lg shadow-brutal-sm">
                      {featuredBlog.category}
                    </div>
                  </div>
                  <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-card ">
                    <div className="flex items-center gap-3 font-body text-xs font-bold text-muted-foreground uppercase mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />{" "}
                        {featuredBlog.date_readable}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {featuredBlog.read_time}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter mb-4 leading-tight group-hover:text-primary transition-colors">
                      {featuredBlog.title}
                    </h2>
                    <p className="font-body font-medium text-muted-foreground mb-8 line-clamp-4">
                      {featuredBlog.excerpt}
                    </p>
                    <div className="mt-auto border-t-2 border-black pt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center border-2 border-black">
                          <User className="w-4 h-4 text-white" />
                        </span>
                        <span className="font-body font-bold text-sm uppercase">
                          {featuredBlog.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Standard Grid */}
              {restBlogs.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {restBlogs.map((blog: any) => (
                    <Link
                      key={blog.id}
                      to={blog.slug}
                      className="group flex flex-col bg-card border-4 border-black rounded-2xl overflow-hidden shadow-brutal hover:-translate-y-2 transition-transform h-full"
                    >
                      <div className="aspect-[3/2] border-b-4 border-black relative overflow-hidden bg-muted shrink-0">
                        <img
                          src={blog.thumbnail}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-card text-card-foreground font-display font-bold text-xs uppercase px-2 py-1 border-2 border-black rounded-lg shadow-brutal-sm">
                          {blog.category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-display font-black text-2xl uppercase tracking-tight mb-3 leading-tight group-hover:text-primary transition-colors">
                          {blog.title}
                        </h3>
                        <p className="font-body text-sm font-medium line-clamp-3 text-muted-foreground mb-6">
                          {blog.excerpt}
                        </p>
                        <div className="mt-auto border-t-2 border-dashed border-gray-300 dark:border-gray-700 pt-4 flex flex-col gap-2">
                          <div className="flex items-center justify-between font-body text-xs font-bold text-muted-foreground uppercase">
                            <span>{blog.date_readable}</span>
                            <span>{blog.read_time}</span>
                          </div>
                          <div className="font-body text-xs font-bold uppercase text-foreground">
                            Oleh: {blog.author}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
