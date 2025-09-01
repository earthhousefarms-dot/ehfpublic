'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    {
      category: 'Nature Connection',
      icon: '🌿',
      programs: [
        {
          title: 'Forest Bathing & Mindfulness',
          duration: 'Half Day',
          type: 'In-Person',
          description: 'Immerse yourself in the healing power of nature through guided meditation and sensory exploration.',
        },
        {
          title: 'Native Plant Wisdom',
          duration: '6 Weeks',
          type: 'Hybrid',
          description: 'Learn about indigenous plants, their medicinal properties, and ecological significance.',
        },
        {
          title: 'Children & Nature Program',
          duration: 'Weekly',
          type: 'In-Person',
          description: 'Help children develop deep connections with the natural world through play and exploration.',
        },
      ],
    },
    {
      category: 'Sustainable Living',
      icon: '♻️',
      programs: [
        {
          title: 'Permaculture Design',
          duration: '12 Weeks',
          type: 'Online & Field',
          description: 'Design regenerative systems that work in harmony with nature.',
        },
        {
          title: 'Composting & Soil Health',
          duration: 'Weekend Workshop',
          type: 'In-Person',
          description: 'Master the art of creating living soil and closed-loop systems.',
        },
        {
          title: 'Rainwater Harvesting',
          duration: '1 Day',
          type: 'In-Person',
          description: 'Learn to capture and store water using natural systems.',
        },
      ],
    },
    {
      category: 'Holistic Wellness',
      icon: '🧘',
      programs: [
        {
          title: 'Farm Yoga Mornings',
          duration: 'Daily 7-8am',
          type: 'In-Person',
          description: 'Begin your day with yoga surrounded by nature, followed by herbal tea from our gardens.',
        },
        {
          title: 'Herbalism & Natural Medicine',
          duration: '8 Weeks',
          type: 'Online',
          description: 'Discover the healing properties of plants and create your own remedies.',
        },
        {
          title: 'Meditation in the Gardens',
          duration: 'Evenings',
          type: 'In-Person',
          description: 'Find inner peace in our meditation garden as the sun sets.',
        },
      ],
    },
    {
      category: 'Horticulture & Growing',
      icon: '🌱',
      programs: [
        {
          title: 'Organic Growing Methods',
          duration: 'Season-Long',
          type: 'In-Person',
          description: 'From seed to harvest, learn chemical-free growing techniques.',
        },
        {
          title: 'Seed Saving Heritage',
          duration: '4 Weeks',
          type: 'Online',
          description: 'Preserve biodiversity by learning ancient seed saving practices.',
        },
        {
          title: 'Biodynamic Farming',
          duration: '6 Months',
          type: 'Apprenticeship',
          description: 'Deep dive into cosmic rhythms and regenerative agriculture.',
        },
      ],
    },
  ];

  const schoolPrograms = [
    {
      age: 'Elementary (K-5)',
      title: 'Young Naturalists',
      activities: ['Garden exploration', 'Seed planting', 'Wildlife observation', 'Nature crafts'],
      duration: 'Half or Full Day',
    },
    {
      age: 'Middle School (6-8)',
      title: 'Ecosystem Explorers',
      activities: ['Soil science', 'Water cycle studies', 'Sustainable practices', 'Farm-to-table cooking'],
      duration: 'Full Day',
    },
    {
      age: 'High School (9-12)',
      title: 'Future Earth Stewards',
      activities: ['Climate action projects', 'Permaculture design', 'Environmental research', 'Leadership workshops'],
      duration: 'Multi-Day Programs',
    },
  ];

  const philosophies = [
    {
      title: 'Living in Harmony',
      description: 'We believe in working with nature, not against it. Every action we take considers the seven generations to come.',
      icon: '☯️',
    },
    {
      title: 'Community as Ecosystem',
      description: 'Just as diverse ecosystems thrive, we nurture a community where everyone contributes their unique gifts.',
      icon: '🤝',
    },
    {
      title: 'Sacred Reciprocity',
      description: 'We honor the ancient wisdom of giving back more than we take, creating abundance for all beings.',
      icon: '🔄',
    },
    {
      title: 'Learning Through Being',
      description: 'True knowledge comes not from books alone, but from direct experience with the living earth.',
      icon: '🌍',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌾</span>
              <div>
                <div className="text-2xl font-serif bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent">Earth House Farm</div>
                <div className="text-xs text-emerald-700 font-light">Center for Nature Learning</div>
              </div>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#philosophy" className="text-gray-700 hover:text-emerald-700 transition font-medium">Philosophy</a>
              <a href="#programs" className="text-gray-700 hover:text-emerald-700 transition font-medium">Programs</a>
              <a href="#schools" className="text-gray-700 hover:text-emerald-700 transition font-medium">Schools</a>
              <a href="#visit" className="text-gray-700 hover:text-emerald-700 transition font-medium">Visit</a>
              <button className="bg-emerald-700/10 text-emerald-800 px-6 py-2 rounded-full hover:bg-emerald-700/20 transition border border-emerald-700/30 font-medium">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Atmospheric */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 text-8xl opacity-10 animate-float">🌿</div>
          <div className="absolute top-40 right-20 text-7xl opacity-10 animate-float-delayed">🍃</div>
          <div className="absolute bottom-20 left-1/4 text-9xl opacity-10 animate-float">🌾</div>
          <div className="absolute bottom-40 right-1/3 text-6xl opacity-10 animate-float-delayed">🌱</div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-serif bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent mb-6 leading-tight">
            Where Earth
            <span className="block bg-gradient-to-r from-emerald-700 to-emerald-800 bg-clip-text text-transparent">Teaches</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light leading-relaxed">
            A sanctuary for learning, growth, and reconnection with the natural world.
            <br />Join us in rediscovering ancient wisdom through modern practice.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white/80 backdrop-blur text-emerald-800 px-8 py-4 rounded-full hover:bg-white transition border border-emerald-200 font-medium shadow-lg">
              Explore Our Courses
            </button>
            <button className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white px-8 py-4 rounded-full hover:from-emerald-800 hover:to-emerald-900 transition shadow-lg font-medium">
              Book a School Visit
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="text-emerald-700 text-4xl">⌄</div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent mb-4">Our Living Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earth House Farm is more than a place—it&apos;s a way of being that honors the interconnectedness of all life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophies.map((philosophy) => (
              <div key={philosophy.title} className="group">
                <div className="bg-white/50 backdrop-blur rounded-2xl p-8 hover:bg-white/70 transition-all duration-300 hover:shadow-xl">
                  <div className="text-4xl mb-4">{philosophy.icon}</div>
                  <h3 className="text-2xl font-serif text-emerald-800 mb-3">{philosophy.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{philosophy.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center">
            <blockquote className="text-2xl md:text-3xl font-serif text-emerald-700 italic">
              "The earth does not belong to us; we belong to the earth."
            </blockquote>
            <p className="text-gray-600 mt-4">— Chief Seattle</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-6 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent mb-4">Learning Pathways</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immersive experiences that deepen your connection with nature and sustainable living
            </p>
          </div>

          {courses.map((category) => (
            <div key={category.category} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-3xl font-serif text-emerald-800">{category.category}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.programs.map((program) => (
                  <div key={program.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-emerald-700">{program.title}</h4>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
                        {program.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Duration: {program.duration}</span>
                      <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                        Learn More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Online Learning Note */}
          <div className="mt-12 bg-amber-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif text-amber-900 mb-4">🌐 Online Learning Available</h3>
            <p className="text-amber-800 max-w-2xl mx-auto">
              Can&apos;t visit in person? Many of our courses are available online, bringing the wisdom of the farm to your home.
            </p>
          </div>
        </div>
      </section>

      {/* School Programs Section */}
      <section id="schools" className="py-20 px-6 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent mb-4">School Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bringing students into direct contact with nature&apos;s classroom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {schoolPrograms.map((program) => (
              <div key={program.age} className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🎒</div>
                  <h3 className="text-2xl font-serif text-emerald-800">{program.title}</h3>
                  <p className="text-emerald-700 font-medium">{program.age}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Activities Include:</h4>
                  <ul className="space-y-2">
                    {program.activities.map((activity) => (
                      <li key={activity} className="flex items-center text-gray-600">
                        <span className="text-emerald-600 mr-2 font-bold">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-4">Duration: {program.duration}</p>
                  <button className="bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full hover:bg-emerald-200 transition font-medium">
                    Book Visit
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Teacher Testimonial */}
          <div className="bg-emerald-100/50 rounded-2xl p-8 border border-emerald-200">
            <blockquote className="text-xl text-emerald-800 italic text-center">
              "Our students left Earth House Farm with dirty hands, big smiles, and a newfound respect for nature. 
              This experience sparked conversations about sustainability that continued for weeks."
            </blockquote>
            <p className="text-center text-gray-600 mt-4">— Ms. Thompson, 4th Grade Teacher</p>
          </div>
        </div>
      </section>

      {/* Weekend Experiences */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-emerald-800 to-emerald-900 bg-clip-text text-transparent mb-4">Weekend Experiences</h2>
            <p className="text-xl text-gray-600">Join our community gatherings and special events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-xl font-serif text-emerald-800 mb-2">Sunrise Yoga</h3>
              <p className="text-gray-600 text-sm mb-3">Saturdays & Sundays, 7am</p>
              <p className="text-gray-500 text-sm">Greet the day with gentle movement in our meadow</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-serif text-emerald-800 mb-2">Herb Walks</h3>
              <p className="text-gray-600 text-sm mb-3">First Sunday monthly</p>
              <p className="text-gray-500 text-sm">Identify and harvest medicinal plants</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-serif text-emerald-800 mb-2">Family Days</h3>
              <p className="text-gray-600 text-sm mb-3">Last Saturday monthly</p>
              <p className="text-gray-500 text-sm">Activities for all ages to enjoy together</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-serif text-emerald-800 mb-2">Moon Circles</h3>
              <p className="text-gray-600 text-sm mb-3">Full moon evenings</p>
              <p className="text-gray-500 text-sm">Meditation and reflection under the stars</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visit" className="py-20 px-6 bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Visit Earth House Farm</h2>
            <p className="text-xl text-emerald-100">Open hearts, open gates—all are welcome</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif mb-6">Find Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-emerald-100">Off the beaten path, where the pavement ends and nature begins</p>
                    <p className="text-emerald-200 text-sm mt-1">Detailed directions provided upon registration</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="font-semibold">Open Hours</p>
                    <p className="text-emerald-100">Programs: By registration</p>
                    <p className="text-emerald-100">Community Days: Weekends 9am-5pm</p>
                    <p className="text-emerald-100">Private visits: By appointment</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💚</span>
                  <div>
                    <p className="font-semibold">What to Bring</p>
                    <p className="text-emerald-100">Open mind, comfortable clothes, water bottle</p>
                    <p className="text-emerald-200 text-sm mt-1">Leave only footprints, take only memories</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-6">Connect With Us</h3>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-emerald-700/30">
                <p className="mb-4 text-emerald-100">
                  Whether you&apos;re seeking knowledge, peace, or community, we welcome you to Earth House Farm. 
                  Our gates are open to all who wish to learn and grow with the earth.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-white text-emerald-800 py-3 rounded-full hover:bg-emerald-50 transition font-semibold shadow-lg">
                    Join Our Newsletter
                  </button>
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 rounded-full hover:from-emerald-700 hover:to-emerald-800 transition font-semibold shadow-lg">
                    Schedule a Visit
                  </button>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-emerald-200 text-sm">📧 learn@earthhousefarm.org</p>
                  <p className="text-emerald-200 text-sm">📞 Connect through nature, not numbers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-emerald-950 to-black text-emerald-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-3xl">🌾</span>
            <div className="text-2xl font-serif">Earth House Farm</div>
          </div>
          <p className="text-emerald-300 mb-8 max-w-2xl mx-auto">
            A living sanctuary where ancient wisdom meets modern learning, 
            nurturing both people and planet through conscious connection with the earth.
          </p>
          <div className="flex justify-center gap-6 text-2xl mb-8">
            <a href="#" className="hover:text-white transition">📘</a>
            <a href="#" className="hover:text-white transition">📷</a>
            <a href="#" className="hover:text-white transition">🌐</a>
          </div>
          <p className="text-emerald-400 text-sm">
            © 2024 Earth House Farm. Living in harmony with all beings.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}