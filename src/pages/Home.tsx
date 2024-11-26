import { motion, useScroll, useTransform } from 'framer-motion';
import { bandMembers } from '../data/bandMembers';
import MemberCard from '../components/MemberCard';


const Home = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-black text-white snap-y snap-mandatory overflow-y-auto">
      <div id="home" className="h-screen relative flex items-center justify-center overflow-hidden snap-start">
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] 
                     bg-cover bg-center"
          style={{ 
            filter: 'brightness(0.3)',
            y: parallaxY 
          }}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center px-4 z-10"
        >
          <motion.div 
            className="mb-8 flex justify-center"
          >
            <img 
              src="/logo_transparent.png" 
              alt="Velow Logo"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 font-mono tracking-wider"
          >
            ALTERNATIVE ROCK / POST GRUNGE
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center gap-2 px-8 py-3 
                       overflow-hidden rounded-full
                       bg-gradient-to-r from-white via-gray-200 to-white
                       font-mono uppercase tracking-wider text-black
                       transition-all duration-300
                       hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(255,255,255,0.2)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative">
                About Us
              </span>
              <motion.span
                className="relative"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                →
              </motion.span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                            translate-x-[-100%] group-hover:translate-x-[100%] duration-1000" 
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <section id="about" className="relative min-h-screen bg-black snap-start overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff12_0%,_transparent_50%)] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_#00000000_0%,_#20202080_50%,_#00000000_100%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          {/* Main Title */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-7xl font-display mb-8 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              WHO WE ARE
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"
            />
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-mono max-w-2xl mx-auto">
              Born in the underground scene, Velow emerged as a force that blends raw energy 
              with intricate melodies. Our sound is a journey through the depths of human emotion, 
              wrapped in powerful riffs and thunderous rhythms.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-24"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                    alt="Band Story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-4xl font-display mb-6">Our Story</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Velow emerged in 2021, bringing a fresh perspective to the alternative rock scene. 
                  After an intense first year of activity, we stepped out of the shadows with our 
                  debut album "Wizje", which was warmly received by the community.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our music tells a story through enigmatic lyrics combined with energetic 
                  instrumentals, creating an explosive mixture that resonates with our audience.
                </p>
                <blockquote className="border-l-4 border-white/20 pl-6 my-8">
                  <p className="text-2xl italic font-light text-white/90">
                    "If these are the 'Visions' of Polish rock's future, then things are looking good, 
                    really good!"
                  </p>
                  <cite className="text-gray-400 block mt-4">- EskaROCK</cite>
                </blockquote>
              </motion.div>
            </div>
          </motion.div>

          {/* Band Members */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            
            <h2 className="text-3xl font-display mb-12 text-center">The Band</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-y-6 -z-10" />
              {bandMembers.map((member, index) => (
                <MemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="music" className="relative min-h-screen snap-start overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 w-full h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-display mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent"
              >
                WIZJE
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-300 mb-8 font-mono text-lg"
              >
                Our debut album that combines energetic music with enigmatic lyrics,
                creating an explosive mixture that received great acclaim in the rock community.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-4"
              >
                <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg font-mono uppercase tracking-wider flex items-center gap-2">
                  <span>Listen Now</span>
                  <span className="text-lg">→</span>
                </button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-lg transform -rotate-6" />
              <img 
                src="/album-cover.jpg" 
                alt="Wizje Album Cover"
                className="relative w-full h-full object-cover rounded-lg shadow-2xl shadow-purple-900/20"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="shows" className="h-screen flex items-center bg-gradient-to-b from-gray-900 to-black snap-start">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 w-full"
        >
          <h2 className="text-4xl md:text-5xl font-display mb-12 text-center">UPCOMING SHOWS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { date: '2024-04-15', venue: 'Rock Club Underground', city: 'Warsaw' },
              { date: '2024-04-22', venue: 'Metal Stage', city: 'Krakow' },
              { date: '2024-05-01', venue: 'Alternative Space', city: 'Wroclaw' },
            ].map((show, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <p className="text-xl font-mono mb-2">{new Date(show.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                <h3 className="text-2xl font-display mb-2">{show.venue}</h3>
                <p className="text-gray-400 mb-4">{show.city}</p>
                <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors font-mono text-sm uppercase">
                  Get Tickets
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="h-screen flex items-center bg-black snap-start">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-4 w-full text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display mb-12">GET IN TOUCH</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <h3 className="text-2xl font-display mb-4">BOOKING</h3>
              <p className="text-gray-300 font-mono mb-2">For booking inquiries:</p>
              <a 
                href="mailto:booking@velow.com" 
                className="text-white hover:text-gray-300 transition-colors font-mono"
              >
                booking@velow.com
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <h3 className="text-2xl font-display mb-4">MANAGEMENT</h3>
              <p className="text-gray-300 font-mono mb-2">For business inquiries:</p>
              <a 
                href="mailto:management@velow.com" 
                className="text-white hover:text-gray-300 transition-colors font-mono"
              >
                management@velow.com
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-x-6"
          >
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-6 py-3 rounded-full 
                       hover:bg-gray-200 transition-colors font-mono text-sm uppercase
                       hover:scale-105 transform duration-200"
            >
              Facebook
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-6 py-3 rounded-full 
                       hover:bg-gray-200 transition-colors font-mono text-sm uppercase
                       hover:scale-105 transform duration-200"
            >
              Instagram
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-6 py-3 rounded-full 
                       hover:bg-gray-200 transition-colors font-mono text-sm uppercase
                       hover:scale-105 transform duration-200"
            >
              YouTube
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section id="media" className="relative min-h-screen snap-start overflow-hidden bg-black">
        {/* Background with diagonal stripes */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:100px_100px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display mb-6">MEDIA</h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* YouTube Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group"
            >
              <img 
                src="https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg"
                alt="Latest Music Video"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1" />
                </div>
              </div>
            </motion.div>

            {/* Instagram Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Instagram Post"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-sm font-mono">Follow us on Instagram →</span>
              </div>
            </motion.div>

            {/* Facebook Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Facebook Post"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-sm font-mono">Check our Facebook →</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="merch" className="relative min-h-screen snap-start overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black" />
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwLTU2IDB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjEiLz4KPC9zdmc+')]" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display mb-6">MERCH</h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
            <p className="text-gray-400 max-w-2xl mx-auto font-mono">
              Support us by getting some of our official merchandise. Each piece is carefully designed 
              to reflect our music and style.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* T-Shirt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Velow T-Shirt"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Classic Logo Tee</h3>
              <p className="text-gray-400 mb-4">$25.00</p>
              <button className="w-full px-6 py-3 bg-white text-black font-mono uppercase tracking-wider hover:bg-gray-200 transition-colors rounded">
                Add to Cart
              </button>
            </motion.div>

            {/* Hoodie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Velow Hoodie"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Band Hoodie</h3>
              <p className="text-gray-400 mb-4">$45.00</p>
              <button className="w-full px-6 py-3 bg-white text-black font-mono uppercase tracking-wider hover:bg-gray-200 transition-colors rounded">
                Add to Cart
              </button>
            </motion.div>

            {/* Cap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Velow Cap"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Logo Cap</h3>
              <p className="text-gray-400 mb-4">$20.00</p>
              <button className="w-full px-6 py-3 bg-white text-black font-mono uppercase tracking-wider hover:bg-gray-200 transition-colors rounded">
                Add to Cart
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="h-screen flex items-center bg-black snap-start">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-4 w-full text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display mb-12">GET IN TOUCH</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <h3 className="text-2xl font-display mb-4">BOOKING</h3>
              <p className="text-gray-300 font-mono mb-2">For booking inquiries:</p>
              <a 
                href="mailto:booking@velow.com" 
                className="text-white hover:text-gray-300 transition-colors font-mono"
              >
                booking@velow.com
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <h3 className="text-2xl font-display mb-4">MANAGEMENT</h3>
              <p className="text-gray-300 font-mono mb-2">For business inquiries:</p>
              <a 
                href="mailto:management@velow.com" 
                className="text-white hover:text-gray-300 transition-colors font-mono"
              >
                management@velow.com
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-x-6"
          >
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-6 py-3 rounded-full 
                       hover:bg-gray-200 transition-colors font-mono text-sm uppercase
                       hover:scale-105 transform duration-200"
            >
              Facebook
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-6 py-3 rounded-full 
                       hover:bg-gray-200 transition-colors font-mono text-sm uppercase
                       hover:scale-105 transform duration-200"
            >
              Instagram
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-6 py-3 rounded-full 
                       hover:bg-gray-200 transition-colors font-mono text-sm uppercase
                       hover:scale-105 transform duration-200"
            >
              YouTube
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;