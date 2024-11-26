import PageHeader from '../components/PageHeader';
import MemberCard from '../components/MemberCard';
import { bandMembers } from '../data/bandMembers';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title="About Us"
        subtitle="Alternative Rock from Poland"
        image="https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="prose prose-invert max-w-none mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Velow emerged in 2021, bringing a fresh perspective to the alternative rock scene. 
            After an intense first year of activity, we stepped out of the shadows with our 
            debut album "Wizje", which was warmly received by the community.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Our music tells a story through enigmatic lyrics combined with energetic 
            instrumentals, creating an explosive mixture that resonates with our audience.
          </p>
          <blockquote className="border-l-4 border-white pl-4 my-8">
            <p className="text-xl italic">
              "If these are the 'Visions' of Polish rock's future, then things are looking good, 
              really good!"
            </p>
            <cite className="text-gray-400">- EskaROCK</cite>
          </blockquote>
        </motion.div>

        <h2 className="text-3xl font-bold mb-12">Band Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bandMembers.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;