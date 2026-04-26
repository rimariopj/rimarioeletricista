import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Envia via WhatsApp com mensagem pré-preenchida
    const message = `Olá! Gostaria de solicitar um orçamento:
    
*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Serviço:* ${formData.service}
*Mensagem:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5513992130719?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-white" id="contato">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#1E3A5F] mb-4">Entre em Contato</h2>
          <p className="text-gray-600 text-lg">
            Solicite um orçamento ou tire suas dúvidas
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div>
            <h3 className="text-2xl font-semibold text-[#1E3A5F] mb-6">
              Fale Conosco
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#FBBF24] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E3A5F] mb-1">Telefone / WhatsApp</h4>
                  <p className="text-gray-600">(13) 99717-7485</p>
                  <p className="text-sm text-gray-500">24 horas - 7 dias por semana</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#FBBF24] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E3A5F] mb-1">E-mail</h4>
                  <p className="text-gray-600">pedronetoeletricista@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#FBBF24] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E3A5F] mb-1">Endereço</h4>
                  <p className="text-gray-600">São Vicente, SP</p>
                  <p className="text-sm text-gray-500">Atendemos a região da Baixada Santista</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1E3A5F] text-white rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-2">Emergência?</h4>
              <p className="mb-4">Ligue agora mesmo para atendimento imediato!</p>
              <a 
                href="tel:13997177485"
                className="bg-[#FBBF24] hover:bg-[#f5b517] text-[#1E3A5F] px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all"
              >
                <Phone className="w-5 h-5" />
                (13) 99717-7485
              </a>
            </div>
          </div>
          
          {/* Formulário */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FBBF24] transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FBBF24] transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FBBF24] transition-colors"
                  placeholder="(13) 99999-9999"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  Serviço
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FBBF24] transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="emergencia">Emergência 24h</option>
                  <option value="instalacao">Instalações Elétricas</option>
                  <option value="manutencao">Manutenção Preventiva</option>
                  <option value="iluminacao">Iluminação</option>
                  <option value="quadros">Quadros Elétricos</option>
                  <option value="automacao">Automação Residencial</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FBBF24] transition-colors resize-none"
                  placeholder="Descreva o serviço que precisa..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#1E3A5F] hover:bg-[#152d4a] text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-5 h-5" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}