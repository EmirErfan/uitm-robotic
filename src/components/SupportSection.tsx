import React from 'react';
import { MessageCircle, Mail, Phone, User } from 'lucide-react';

const SupportSection: React.FC = () => {
  return (
    <section className="py-20" id="support">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-monoton text-white mb-4">
          Support <span className="text-yellow-400">Centre</span>
        </h2>

        <p className="text-gray-400 mb-12 text-lg">
          Need help? Our support team is here to assist you
        </p>

        {/* Telegram Card */}
        <div className="p-8 bg-white/5 backdrop-blur rounded-2xl border border-white/10 mb-12 hover:border-white/30 transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
              <MessageCircle size={28} className="text-white" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">Join Our Telegram Support Group</h3>
          <p className="text-gray-300 mb-6">
            Get instant support and connect with other participants
          </p>
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25">
            Join Telegram Group
          </button>
        </div>

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Mail size={20} className="text-white" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
            <p className="text-purple-400">apa2email@email.com</p>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Phone size={20} className="text-white" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Phone Support</h4>
            <p className="text-green-400">+60 5-2223 1112</p>
          </div>
        </div>

        {/* Organizers */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                <User size={20} className="text-white" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Dr. Ahmad Emir Erfan</h4>
            <p className="text-yellow-400">+60 12-345 6789</p>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <User size={20} className="text-white" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Kim Possible</h4>
            <p className="text-orange-400">+60 11- 111 1111</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
