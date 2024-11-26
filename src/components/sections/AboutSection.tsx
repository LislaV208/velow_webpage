import { motion } from 'framer-motion';
import { bandMembers } from '../../data/bandMembers';
import MemberCard from '../MemberCard';

const AboutSection = () => {
  return (
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display mb-6">WHO WE ARE</h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
        </motion.div>

        {/* Band Story */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 mb-24"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-display mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6 font-mono">
              Founded in the heart of Poland's underground music scene, Velow emerged as 
              a powerful force in modern rock. Our journey began in 2020, when five 
              musicians with diverse backgrounds united under a common vision.
            </p>
            <p className="text-gray-300 font-mono">
              We blend raw energy with melodic sophistication, creating a sound that's 
              both intense and introspective. Our music reflects the complexities of 
              modern life while staying true to rock's rebellious spirit.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-display mb-6">Our Sound</h3>
            <p className="text-gray-300 mb-6 font-mono">
              Velow's music is a dynamic fusion of hard-hitting riffs, atmospheric 
              soundscapes, and powerful vocals. We draw inspiration from classic rock 
              while pushing the boundaries of contemporary musical expression.
            </p>
            <p className="text-gray-300 font-mono">
              Each song is crafted to take listeners on a journey, combining technical 
              prowess with emotional depth. Our live performances are known for their 
              intensity and the deep connection we forge with our audience.
            </p>
          </motion.div>
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
  );
};

export default AboutSection;
