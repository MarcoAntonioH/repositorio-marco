import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function RobotAnimation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-center z-50">
      
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
          alt="Bot"
          className="w-16 h-16 select-none"
        />
      </motion.div>

      
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setOpen(!open)}
        className="mt-3 bg-teal-600 text-white rounded-full p-3 shadow-lg hover:bg-teal-700 transition"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

     
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-20 right-0 w-72 bg-white shadow-2xl rounded-2xl p-5"
        >
          <p className="text-gray-800 font-semibold mb-3">
            👋 ¡Hola! Soy tu asistente virtual.  
            ¿Cómo quieres comunicarte con <span className="text-teal-600">Marco</span>?
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/51955248849"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg font-medium transition"
            >
              💬 WhatsApp
            </a>

            <button
              disabled
              className="bg-gray-400 text-white text-center py-2 rounded-lg font-medium cursor-not-allowed"
            >
              📧 Próximamente correo
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
