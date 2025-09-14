import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Tag, Search, Filter, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useStaggeredAnimation } from '@/hooks/use-enhanced-scroll';
import { useNavigate } from 'react-router-dom';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 100 });
  const { ref: searchRef, isVisible: searchVisible } = useScrollAnimation({ delay: 200 });
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollAnimation({ delay: 300 });
  const { ref: postsRef, isVisible: postsVisible } = useScrollAnimation({ delay: 400 });

  // Blog posts
  const allPosts = [
    {
      id: 1,
      title: "Is It Too Late to Join Hackathons? My First Hackathon Story",
      excerpt: "For the longest time, I thought I was late to the game. Whenever I heard the word hackathon, I pictured students who had been coding since high school, already building apps and pitching startups while I was just proud to make a calculator app that actually worked.",
      content: `For the longest time, I thought I was late to the game.
Whenever I heard the word hackathon, I pictured students who had been coding since high school, already building apps and pitching startups while I was just proud to make a calculator app that actually worked — and maybe a tic-tac-toe game on the side. By the time I reached my 2nd year, 2nd semester, I thought maybe I had missed my shot.

But then came Blue Hacks 2025, and that one weekend changed how I saw myself as a developer.

Walking Into the Unknown

When we arrived at the venue, it felt like stepping into another world. Twenty-four other teams were scattered around, laptops open, headphones on, faces serious. The kind of serious that says: "I've done this before."

And us? We had just come from a 10K fun run that same morning. I was already running on fumes, not caffeine.

Later, we found out there were only two teams of 2nd-year students in the entire hackathon—including us. My first thought: "We're cooked." But even then, we agreed—whatever happens, we're here to learn.

The Grind Begins

The hackathon kicked off at 12 PM—a full 24-hour sprint, ending the next day at noon.

At first, we sat down and just started throwing around ideas, bouncing from one possibility to another. One of the mentors suggested we try React for the frontend. At that point, I wasn't really familiar with it, but something in me said, why not? A hackathon is the best place to dive into something new.

So I opened a fresh project and got to work. With Google in one tab and DeepSeek in another, I went through hours of trial, error, and endless prompts. After about three hours, all I had was a very basic UI with a map. To anyone else, it might've looked small—but to us, it was a win. It meant we were moving.

As the lead developer, I kept pushing. I coded through the night, only stopping briefly around 3 AM before continuing again. My teammates covered their parts—one worked on backend logic, another refined the presentation, another gathered more ideas. We fell into a rhythm, taking shifts, building piece by piece.

By 11 AM the next day, we had everything tied together: frontend, backend, and the PowerPoint presentation. We were zombies, but we had a product.

The Moment of Truth

Out of 25 teams, only five would move on to the final pitch. As names were called one by one, my heart sank lower and lower—until suddenly, ours was the last one announced.

We were in.

The pitch itself was nerve-wracking. Standing in front of the judges, I could feel my hands shaking. I just decided to roll with it—deliver the pitch with a bit of humor, stay confident, and answer questions as best I could.

Watching the other finalists, though, was tough. Their projects looked incredible—polished apps, innovative solutions, clean demos. I honestly thought we didn't stand a chance.

And then came the results.

We won.

Looking Back

That win didn't just give us a trophy—it gave me a huge mindset shift. I went from feeling like I was "late" and "not ready" to realizing that I did belong in that room. That even with just the basics of React, some Google searches, and a whole lot of determination, we could compete.

So, is it too late to join hackathons?
Absolutely not.

It doesn't matter if you're a freshman, a senior, or even someone new to coding. What matters is showing up, learning on the spot, and giving it your all.

The Journey Continues

Blue Hacks 2025 wasn't the end—it was the start. After that first experience, we started joining more and more hackathons. Each one taught us something new. Sometimes we got awards, sometimes we landed podium spots (Top 5), and other times we walked away with just lessons.

But every single one of those hackathons sharpened us: our coding skills, our pitching, our teamwork, and our confidence.

Looking back now, I'm just glad I didn't let the fear of being "too late" stop me from trying. Because that one decision opened up a journey I'm still on today. And the best part? It's only the beginning. 🚀`,
      date: "2025-07-26",
      readTime: "6 min read",
      category: "Personal",
      tags: ["Hackathon", "Personal Story", "React", "Learning", "Growth"],
      featured: true
    },
    {
      id: 2,
      title: "My College Life",
      excerpt: "When I think about my life as a student, it honestly feels like a story of two completely different worlds. The first one was my time in Chiang Kai Shek College, where I studied from nursery all the way to high school. The second one started the moment I stepped into UP.",
      content: `When I think about my life as a student, it honestly feels like a story of two completely different worlds. The first one was my time in Chiang Kai Shek College, where I studied from nursery all the way to high school. The second one started the moment I stepped into UP.

Growing up in CKSC, people would always say it was such a hard school — balancing Chinese subjects with the usual curriculum, strict teachers, and all that. But to me, it didn't really feel that way. I never studied much, I never really pushed myself, but I still managed to graduate with high honors, a 97/100 average. I wasn't a genius or anything — it's just that school felt like a routine to me. Something I had to do every day, like brushing my teeth. It never felt like a challenge.

Then came college applications. For the longest time, I dreamed of studying at De La Salle University. That was the goal all throughout high school. But when my parents told me about UP, I started to see it differently — suddenly, UP became the ultimate dream. So I applied to both, and also to backup schools like FEU (where I even got a scholarship offer) and even CKSC itself, which gave me a full scholarship option. But I didn't care much about those. For me, it was either DLSU or UP.

The results came in. DLSU accepted me into BS Computer Science, my dream course. UP, on the other hand, waitlisted me for the same program. I was ready to go with DLSU — in fact, they were already asking for the ₱10,000 reservation fee, and my parents had the money prepared. I was literally about to secure my slot. But then, on the very last day of registration, just when I was about to commit to DLSU, I received an email. It was from UP.

I got in.

That moment honestly changed everything. Suddenly, I wasn't just a student anymore — I was a UP student.

But stepping into UP felt like entering an entirely new culture. The environment was different, the people were different, the way things worked was completely different. It wasn't CKSC anymore where everything felt routine. But despite the change, I was still the same person. In my first year, I carried the same habits with me: not really studying, treating school as something I could just breeze through.

And for a while, it worked. I became a College Scholar in my very first semester. I didn't even study that hard — mostly just crammed the night before exams. Getting College Scholar (Dean's Lister) with that little effort gave me confidence, maybe even too much. I started to believe I could keep getting away with it.

Then second sem came, and that's when I met Physics 71. I still remember the shock. The subject was on another level — the hardest I had ever faced. Half the class failed, and I was part of that half. It was my first real academic failure. But weirdly enough, I didn't panic. I just thought, "Okay, I'll retake it next time."

By the time I entered my second year, I did start to put in a bit more effort. Not the hardcore studying type, but enough to at least keep up. I retook Physics, studied more seriously, and finally passed it. I even got back on the College Scholar list again. On the outside, it looked fine — I was passing, I was even excelling at times. But deep down, something started nagging at me.

If I could achieve that without putting in my 100%, then what could I do if I actually tried?

That thought kept replaying in my head. And now that I'm about to enter my third year, it hits even harder. Right now, my GWA is 1.90. To qualify for Latin honors, I need 1.75. That's not impossible, but it means I'll have to change the way I approach things. Sometimes I regret not starting earlier, not putting in more effort when it mattered. Because I know — if I had actually studied harder from the start, I'd probably be much closer to that 1.75 already.

But that's the thing: I can't change the past. What I can do is start now.

I'm still in the middle of this journey. I'm still a student, still figuring things out, still learning how to balance life, academics, and everything else in between. Maybe this year is the year I finally study more seriously. Maybe this is the year I actually push myself beyond just "getting by."

I don't know yet what will happen, but one thing I know for sure: I owe it to myself to try.`,
      date: "2025-08-01",
      readTime: "7 min read",
      category: "Personal",
      tags: ["College", "UP", "Personal Story", "Academic Journey", "Growth"],
      featured: false
    }
  ];

  const categories = ['All', ...Array.from(new Set(allPosts.map(post => post.category)))];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = allPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleBackToPortfolio = () => {
    navigate('/');
  };

  const handlePostClick = (postId: number) => {
    navigate(`/blog/${postId}`);
  };

  const { ref: postsGridRef, visibleItems: postsGridVisible } = useStaggeredAnimation(regularPosts.length, 100);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section 
        ref={headerRef}
        className={`py-4 px-4 md:px-6 mt-8 transition-all duration-700 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handleBackToPortfolio}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <h1 className="text-2xl md:text-3xl font-bold">Blog</h1>
            
            <div className="w-5"></div>
          </div>
          
          {/* Search and Filter */}
          <div 
            ref={searchRef}
            className={`mb-4 transition-all duration-700 ${
              searchVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col md:flex-row gap-3 mb-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:bg-white/10 text-foreground"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:bg-white/10 appearance-none cursor-pointer min-w-[150px] text-foreground"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-background text-foreground">{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <p className="text-muted-foreground text-xs">
              {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-4 md:px-6 mt-4">
        <div className="max-w-6xl mx-auto w-full">

          {/* Featured Post */}
          {featuredPost && (selectedCategory === 'All' || featuredPost.category === selectedCategory) && (
            <div 
              ref={featuredRef}
              className={`mb-8 transition-all duration-700 ${
                featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <article 
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer shadow-lg"
                onClick={() => handlePostClick(featuredPost.id)}
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1 px-2 py-1 bg-white/10 text-muted-foreground rounded-md text-xs">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-primary hover:text-primary/80 font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div 
            ref={postsRef}
            className={`transition-all duration-700 ${
              postsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div 
              ref={postsGridRef}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {regularPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className={`group bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer shadow-lg ${
                    postsGridVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => handlePostClick(post.id)}
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <button className="text-primary hover:text-primary/80 font-medium text-sm transition-colors">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">No posts found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Josh Cimanes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
