import React, { useState } from 'react';
import { X, Check, Phone, ArrowRight } from 'lucide-react';

interface PhoneConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNumber: string;
  onSaveNumber: (newNumber: string) => void;
}

export const PhoneConfigModal: React.FC<PhoneConfigModalProps> = ({
  isOpen,
  onClose,
  currentNumber,
  onSaveNumber,
}) => {
  const [phoneInput, setPhoneInput] = useState(currentNumber);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = phoneInput.replace(/\D/g, '');
    if (cleanNumber.length >= 10) {
      onSaveNumber(cleanNumber);
      onClose();
    }
  };

  const testUrl = `https://wa.me/${phoneInput.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Teste de link WhatsApp — URB Concept'
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#121212] border border-[#222222] rounded-xl p-6 shadow-2xl">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-neutral-400 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded bg-[#00FF66]/10 border border-[#00FF66]/20 flex items-center justify-center text-[#00FF66]">
            <Phone className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-heading font-bold text-white">
            Configurar Número de WhatsApp
          </h3>
        </div>

        <p className="text-xs text-[#A1A1AA] mb-6 leading-relaxed">
          Defina o número para o qual todos os botões de CTA da página enviarão os clientes. Use o formato com DDI (55) + DDD + Telefone.
        </p>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
              Número com DDI e DDD (ex: 5511999998888)
            </label>
            <input
              type="text"
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
              placeholder="5511999998888"
              className="w-full px-4 py-3 bg-[#080808] border border-[#333333] rounded text-white font-mono text-sm focus:outline-none focus:border-[#00FF66] transition-colors"
              required
            />
          </div>

          <div className="p-3 bg-[#080808] border border-[#222222] rounded text-[11px] font-mono text-[#A1A1AA]">
            <div className="text-neutral-400 mb-1">Link gerado em tempo real:</div>
            <a
              href={testUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00FF66] hover:underline break-all flex items-center gap-1"
            >
              <span>{testUrl}</span>
              <ArrowRight className="w-3 h-3 shrink-0" />
            </a>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#00FF66] hover:bg-[#00e65c] text-black font-heading font-bold text-xs uppercase tracking-wider rounded transition-all shadow-[0_0_15px_rgba(0,255,102,0.3)]"
            >
              Aplicar a Todos os Botões
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
