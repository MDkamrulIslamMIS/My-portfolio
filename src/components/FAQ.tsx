import { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../data/portfolioData';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  // Group items into 2 columns of 4
  const col1 = FAQ_DATA.slice(0, 4);
  const col2 = FAQ_DATA.slice(4, 8);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const renderFaqCard = (item: FAQItem) => {
    const isOpen = openId === item.id;
    return (
      <div
        key={item.id}
        className="smooth-card rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
      >
        <button
          onClick={() => toggleItem(item.id)}
          className="w-full p-3.5 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <span className="pr-2">{item.question}</span>
          <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 transition-transform duration-200">
            {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </span>
        </button>

        {isOpen && (
          <div className="px-3.5 pb-3.5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/80 pt-2.5 animate-in fade-in duration-200 text-left">
            {item.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      id="faq"
      className="smooth-card rounded-2xl bg-white text-slate-900 p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      {/* Header */}
      <div className="mb-5">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>FAQ</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
          Frequently Asked Questions
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Everything You Need to Know
        </p>
      </div>

      {/* 2-Column Grid of 8 Questions with smooth mouse hover animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div className="space-y-2.5">
          {col1.map(renderFaqCard)}
        </div>
        <div className="space-y-2.5">
          {col2.map(renderFaqCard)}
        </div>
      </div>
    </section>
  );
}
