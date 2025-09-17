import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

// Blog posts data - you can move this to a separate file later
const blogPosts = [
  {
    id: 1,
    title: "Is It Too Late to Join Hackathons? My First Hackathon Story",
    excerpt: "For the longest time, I thought I was late to the game. Whenever I heard the word hackathon, I pictured students who had been coding since high school, already building apps and pitching startups while I was just proud to make a calculator app that actually worked.",
    content: `For the longest time, I thought I was late to the game.
Whenever I heard the word hackathon, I pictured students who had been coding since high school, already building apps and pitching startups while I was just proud to make a calculator app that actually worked — and maybe a tic-tac-toe game on the side. By the time I reached my 2nd year, 2nd semester, I thought maybe I had missed my shot.

But then came Blue Hacks 2025, and that one weekend changed how I saw myself as a developer.

## Walking Into the Unknown

When we arrived at the venue, it felt like stepping into another world. Twenty-four other teams were scattered around, laptops open, headphones on, faces serious. The kind of serious that says: "I've done this before."

And us? We had just come from a 10K fun run that same morning. I was already running on fumes, not caffeine.

Later, we found out there were only two teams of 2nd-year students in the entire hackathon—including us. My first thought: "We're cooked." But even then, we agreed—whatever happens, we're here to learn.

## The Grind Begins

The hackathon kicked off at 12 PM—a full 24-hour sprint, ending the next day at noon.

At first, we sat down and just started throwing around ideas, bouncing from one possibility to another. One of the mentors suggested we try React for the frontend. At that point, I wasn't really familiar with it, but something in me said, why not? A hackathon is the best place to dive into something new.

So I opened a fresh project and got to work. With Google in one tab and DeepSeek in another, I went through hours of trial, error, and endless prompts. After about three hours, all I had was a very basic UI with a map. To anyone else, it might've looked small—but to us, it was a win. It meant we were moving.

As the lead developer, I kept pushing. I coded through the night, only stopping briefly around 3 AM before continuing again. My teammates covered their parts—one worked on backend logic, another refined the presentation, another gathered more ideas. We fell into a rhythm, taking shifts, building piece by piece.

By 11 AM the next day, we had everything tied together: frontend, backend, and the PowerPoint presentation. We were zombies, but we had a product.

## The Moment of Truth

Out of 25 teams, only five would move on to the final pitch. As names were called one by one, my heart sank lower and lower—until suddenly, ours was the last one announced.

We were in.

The pitch itself was nerve-wracking. Standing in front of the judges, I could feel my hands shaking. I just decided to roll with it—deliver the pitch with a bit of humor, stay confident, and answer questions as best I could.

Watching the other finalists, though, was tough. Their projects looked incredible—polished apps, innovative solutions, clean demos. I honestly thought we didn't stand a chance.

And then came the results.

We won.

## Looking Back

That win didn't just give us a trophy—it gave me a huge mindset shift. I went from feeling like I was "late" and "not ready" to realizing that I did belong in that room. That even with just the basics of React, some Google searches, and a whole lot of determination, we could compete.

So, is it too late to join hackathons?
**Absolutely not.**

It doesn't matter if you're a freshman, a senior, or even someone new to coding. What matters is showing up, learning on the spot, and giving it your all.

## The Journey Continues

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
  },
  {
    id: 3,
    title: "I Butchered My First Coding Interview",
    excerpt: "For months I’d been sending out applications—internships, junior roles, anything for real-world experience. Then a CEO messaged me about a full developer position with an AI-analyzed technical interview—and I froze under pressure.",
    content: `For months I’d been sending out applications—internships, junior dev roles, anything that could give me real-world experience. A few companies replied, and I even got interviews with names like Coca-Cola and Angkas.

At first, I felt confident. Most questions were about me, my resume, or my experience. Sometimes, they even pulled directly from my resume. “I see you joined a 24-hour hackathon—how did you handle the time pressure?” or “How did you collaborate with your team?” I could answer those now almost in my sleep. I’d talk about Blue Hacks 2025, how we split tasks, rotated shifts, and pushed through exhaustion to finish our project. Those stories were real, and I knew them inside out.

Then one day, a message popped up on LinkedIn. It was from a CEO, saying I was a perfect fit for a software engineering role.

Not an internship.
Not entry-level.
A full developer position—at a New York company, with a salary that made my jaw drop.

I applied immediately. They replied almost instantly and scheduled a technical interview.

Only this time, it wasn’t a Zoom call. The email said it would be AI-analyzed, with no human interviewer. My stomach twisted. When I clicked the link, it asked for screen recording, camera access, and microphone recording, warning that copying or pasting might be detected. And then the line that made my heart stop: two coding challenges.

I quickly refreshed some React basics—useState, counters, reversing a string—thinking maybe that would be enough. I clicked Start.

The first challenge wasn’t impossible, but the pressure hit me like a ton of bricks. My hands shook, my mind raced, and the timer in the corner felt deafening. I stared at the problem for what felt like forever. Nothing came to me at first. I opened Google, scrambled through tabs, even asked AI for a quick jumpstart—just enough to see the flow and understand the steps I needed to take. I don’t even know if that was allowed, and my screen was being recorded the whole time, but I didn’t care anymore. Slowly, piece by piece, I managed to cobble together a messy solution. It worked. Barely. But it gave me a tiny spark of hope. Maybe I could survive this.

Then came the second question. At first glance, it looked like something I should be able to do: fetch data from an API, display it, implement pagination, caching… but for me, it didn’t feel simple at all. The moment I stared at the screen, my brain completely blanked. Even the steps I vaguely knew—fetching, displaying, pagination—vanished. I couldn’t remember how to start, and the caching part felt like a mountain I didn’t know how to climb. My hands hovered over the keyboard, frozen. Heart racing. Every second on that timer made the panic worse.

After a few minutes of staring, I somehow managed to do something. I fetched the data, displayed it, and set up pagination—but it didn’t fully work, and it wasn’t even truly mine. Every line was AI-assisted, guided by prompts and suggestions. I had technically written “something,” but the realization that none of it felt like my work stung worse than the timer ticking down.

Twenty minutes slipped by. I kept twisting AI suggestions into code, trying to make it my own, but the clock was relentless. And then, before I could even finish a single functional line for caching, time was up.

By that point, I didn’t even care that my screen was being recorded. Embarrassment, panic, frustration—it all washed over me. I had stared failure right in the face, and I hadn’t survived.

Sitting back afterward, I felt a mix of shame and disbelief. I immediately told my friends, my girlfriend, my family—half venting, half needing someone to tell me it wasn’t the end of the world. I wanted to hide, to erase my face from every employer I had applied to.

But after the panic faded, I realized something. This was my first real technical interview. And even though I failed spectacularly, I learned more than any easy, controlled practice session ever could. I now know what a high-pressure, AI-analyzed interview feels like. I know my gaps, the moments where my confidence can evaporate, and the skills I need to actually internalize.

It didn’t end with an offer. But it gave me something better: perspective. I’m still a student, still learning, still growing. The next time I face an interview, I’ll be ready—not just with technical knowledge, but with the experience of surviving panic and pressure.

One failed interview isn’t the end—it’s just the beginning.`,
    date: "2025-09-16",
    readTime: "6 min read",
    category: "Career",
    tags: ["Career", "Personal Story", "Growth"],
    featured: false
  }
];

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 100 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ delay: 200 });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const handleBackToBlog = () => {
    // Always go back to blog page from specific blog posts
    navigate('/blog');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
       if (line.startsWith('## ')) {
         return (
           <h2 key={index} className="text-lg sm:text-xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 text-foreground">
             {line.replace('## ', '')}
           </h2>
         );
       }
       if (line.startsWith('**') && line.endsWith('**')) {
         return (
           <div key={index} className="my-4 sm:my-6 text-center px-2">
             <p className="text-base sm:text-lg font-semibold text-primary italic">
               "{line.replace(/\*\*/g, '')}"
             </p>
           </div>
         );
       }
      if (line.trim() === '') {
        return <div key={index} className="h-4 sm:h-6" />;
      }
       return (
         <p key={index} className="text-foreground/90 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base px-2">
           {line}
         </p>
       );
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section 
        ref={headerRef}
        className={`py-4 px-4 sm:px-6 lg:px-8 mt-4 sm:mt-8 transition-all duration-700 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
         <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-between">
             <button
               onClick={handleBackToBlog}
               className="text-muted-foreground hover:text-primary transition-colors duration-300 p-1"
             >
               <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
             </button>
            
            <button
              onClick={handleShare}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 p-1"
            >
              <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </section>

       {/* Main Content */}
       <main className="px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
         <div className="max-w-6xl mx-auto w-full">
          <article 
            ref={contentRef}
            className={`transition-all duration-700 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Post Header */}
            <header className="mb-8 sm:mb-12">
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                  <span className="px-3 sm:px-4 py-1 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{post.readTime}</span>
                  </div>
                </div>
                
                 <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 leading-tight text-foreground px-2">
                   {post.title}
                 </h1>
                
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-white/5 border border-white/10 text-muted-foreground rounded-full text-xs sm:text-sm hover:bg-white/10 hover:border-primary/30 transition-all duration-300 cursor-default">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>

             {/* Post Content */}
             <div className="prose max-w-none mb-6 sm:mb-8">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-4 sm:p-6 shadow-lg">
                 <div className="max-w-5xl mx-auto">
                   {formatContent(post.content)}
                 </div>
               </div>
             </div>

            {/* Post Footer */}
            <footer className="pt-8 sm:pt-12 border-t border-border/30">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <button
                  onClick={handleBackToBlog}
                  className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-primary hover:text-primary/80 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 font-medium hover:scale-105 text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  Back to Blog
                </button>
                
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto">
                  <span className="text-xs sm:text-sm text-muted-foreground font-medium">Share this post:</span>
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-muted-foreground hover:text-primary hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base w-full sm:w-auto justify-center"
                  >
                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    Share
                  </button>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 sm:py-8 mt-12 sm:mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm sm:text-base">
            © 2025 Josh Cimanes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
