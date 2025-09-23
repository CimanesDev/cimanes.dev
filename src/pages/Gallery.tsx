import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useStaggeredAnimation } from '@/hooks/use-enhanced-scroll';
import { useNavigate } from 'react-router-dom';

export default function Gallery() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{ eventId: string; imageId: number } | null>(null);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ delay: 100 });
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation({ delay: 200 });

  // Events data structure - each event has multiple photos
  const events = [
    {
      id: "blue-hacks-2025",
      name: "Blue Hacks 2025",
      date: "January 26-27, 2025",
      location: "Manila, Philippines",
      description: "My first hackathon experience - 24 hours of coding, learning, and winning!",
      photos: [
        {
          id: 1,
          title: "Team Victory",
          description: "Our winning moment at Blue Hacks 2025. First hackathon, first win!",
          image: "/images/hackathon1.jpg",
          aspectRatio: "portrait" // Tall image
        },
        {
          id: 2,
          title: "Coding Through the Night",
          description: "The grind never stops. 24 hours of pure determination and caffeine.",
          image: "/images/hackathon2.jpg",
          aspectRatio: "landscape" // Wide image
        },
        {
          id: 3,
          title: "Pitch Presentation",
          description: "Presenting our project to the judges. Nerves and excitement combined.",
          image: "/images/hackathon3.jpg",
          aspectRatio: "square" // Square image
        },
        {
          id: 4,
          title: "Team Planning",
          description: "Brainstorming ideas and planning our approach.",
          image: "/images/hackathon1.jpg",
          aspectRatio: "landscape" // Wide image
        },
        {
          id: 5,
          title: "Final Demo",
          description: "Showcasing our finished project to the judges.",
          image: "/images/hackathon2.jpg",
          aspectRatio: "portrait" // Tall image
        },
        {
          id: 6,
          title: "Celebration",
          description: "Celebrating our victory with the team!",
          image: "/images/hackathon3.jpg",
          aspectRatio: "landscape" // Wide image
        }
      ]
    },
    {
      id: "tech-conference-2024",
      name: "Tech Conference 2024",
      date: "November 15, 2024",
      location: "Makati, Philippines",
      description: "Attending my first major tech conference. So much to learn and network!",
      photos: [
        {
          id: 1,
          title: "Conference Opening",
          description: "The opening keynote was absolutely inspiring.",
          image: "/images/conference1.jpg",
          aspectRatio: "landscape"
        },
        {
          id: 2,
          title: "Networking Session",
          description: "Meeting amazing people in the tech industry.",
          image: "/images/conference1.jpg",
          aspectRatio: "portrait"
        },
        {
          id: 3,
          title: "Workshop Learning",
          description: "Attending hands-on workshops and learning new technologies.",
          image: "/images/conference1.jpg",
          aspectRatio: "square"
        },
        {
          id: 4,
          title: "Panel Discussion",
          description: "Listening to industry experts share their insights.",
          image: "/images/conference1.jpg",
          aspectRatio: "landscape"
        }
      ]
    },
    {
      id: "university-tech-fair",
      name: "University Tech Fair 2024",
      date: "October 20, 2024",
      location: "UP Diliman",
      description: "Representing our university at the annual tech fair and showcasing our projects.",
      photos: [
        {
          id: 1,
          title: "Project Showcase",
          description: "Displaying our university projects to visitors.",
          image: "/images/event1.jpg",
          aspectRatio: "portrait"
        },
        {
          id: 2,
          title: "Student Interaction",
          description: "Engaging with fellow students and sharing knowledge.",
          image: "/images/event1.jpg",
          aspectRatio: "landscape"
        },
        {
          id: 3,
          title: "Award Ceremony",
          description: "Receiving recognition for our outstanding projects.",
          image: "/images/event1.jpg",
          aspectRatio: "square"
        }
      ]
    },
    {
      id: "react-workshop",
      name: "React Development Workshop",
      date: "September 10, 2024",
      location: "UP Diliman",
      description: "Leading a workshop on React development for fellow students.",
      photos: [
        {
          id: 1,
          title: "Workshop Setup",
          description: "Preparing the workshop materials and environment.",
          image: "/images/workshop1.jpg",
          aspectRatio: "landscape"
        },
        {
          id: 2,
          title: "Teaching Session",
          description: "Sharing knowledge and helping students learn React.",
          image: "/images/workshop1.jpg",
          aspectRatio: "portrait"
        },
        {
          id: 3,
          title: "Hands-on Coding",
          description: "Students working on their React projects.",
          image: "/images/workshop1.jpg",
          aspectRatio: "square"
        },
        {
          id: 4,
          title: "Q&A Session",
          description: "Answering questions and providing guidance.",
          image: "/images/workshop1.jpg",
          aspectRatio: "landscape"
        }
      ]
    }
  ];

  const currentEvent = events[currentEventIndex];

  const handleBackToPortfolio = () => {
    navigate('/');
  };

  const handleImageClick = (eventId: string, imageId: number) => {
    setSelectedImage({ eventId, imageId });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePreviousEvent = () => {
    setCurrentEventIndex((prev) => (prev > 0 ? prev - 1 : events.length - 1));
  };

  const handleNextEvent = () => {
    setCurrentEventIndex((prev) => (prev < events.length - 1 ? prev + 1 : 0));
  };

  const { ref: imagesGridRef, visibleItems: imagesGridVisible } = useStaggeredAnimation(currentEvent.photos.length, 100);

  const selectedImageData = selectedImage ? 
    events.find(event => event.id === selectedImage.eventId)?.photos.find(photo => photo.id === selectedImage.imageId) : 
    null;

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
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <button
              onClick={handleBackToPortfolio}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 p-1"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center flex-1">Gallery</h1>
            
            <div className="w-5 sm:w-6"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Beautiful Event Header */}
          <div 
            ref={galleryRef}
            className={`mb-12 transition-all duration-700 ${
              galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Event Title with Gradient */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                {currentEvent.name}
              </h2>
              <div className="flex items-center justify-center gap-6 text-sm sm:text-base text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{currentEvent.date}</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                  <span>{currentEvent.location}</span>
                </div>
              </div>
            </div>
            
            {/* Elegant Navigation */}
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-lg">
                <button
                  onClick={handlePreviousEvent}
                  className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-3">
                  {events.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentEventIndex(index)}
                      className={`transition-all duration-300 ${
                        index === currentEventIndex 
                          ? 'w-8 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full' 
                          : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50 hover:scale-125'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={handleNextEvent}
                  className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Photos Grid */}
          <div 
            ref={galleryRef}
            className={`transition-all duration-700 ${
              galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div 
              ref={imagesGridRef}
              className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4"
            >
              {currentEvent.photos.map((photo, index) => {
                // Define aspect ratio classes - making them bigger
                const getAspectRatioClass = (aspectRatio: string) => {
                  switch (aspectRatio) {
                    case 'portrait':
                      return 'aspect-[2/3]'; // Taller than wide, bigger
                    case 'landscape':
                      return 'aspect-[3/2]'; // Wider than tall, bigger
                    case 'square':
                      return 'aspect-square'; // Perfect square
                    default:
                      return 'aspect-[3/2]';
                  }
                };

                return (
                  <div 
                    key={photo.id}
                    className={`group break-inside-avoid mb-3 sm:mb-4 ${
                      imagesGridVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => handleImageClick(currentEvent.id, photo.id)}
                  >
                    <div className={`relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer group-hover:scale-[1.02] group-hover:border-primary/30 ${getAspectRatioClass(photo.aspectRatio)}`}>
                      <img 
                        src={photo.image} 
                        alt={photo.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-all duration-300">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Image Modal */}
      {selectedImageData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-primary transition-colors duration-300 p-2"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden">
              <img 
                src={selectedImageData.image} 
                alt={selectedImageData.title}
                className="w-full h-auto max-h-[60vh] object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NjY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                }}
              />
              
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {currentEvent.name}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{currentEvent.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{currentEvent.location}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {selectedImageData.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  {selectedImageData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border py-6 sm:py-8 mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm sm:text-base">
            © 2025 Josh Cimanes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
