import React from "react";
import { motion } from "framer-motion";

const Testimonial = ({ testimonial }) => {
  return (
            <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="testimonial gap-8 w-full flex flex-col"
    >
      <p className="md:text-4xl text-lg leading-relaxed font-satoshi font-thin italic">"{testimonial.text}"</p>

      <div className="flex items-center gap-4">
        <div className="w-14 h-14 overflow-hidden rounded-full">
          <img 
            src="https://via.placeholder.com/150"
            alt="Author"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Container */}
        <div className="flex flex-col justify-center">
          <p className="md:text-2xl text-sm font-semibold">{testimonial.author}</p>
          <p className="md:text-xl text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
