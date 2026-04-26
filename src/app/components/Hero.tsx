import { Phone, Clock, AlertTriangle } from "lucide-react";
import logo from "../../assets/Primus1.png";
import heroBg from "../../assets/hero-bg-vt.png";

type HeroProps = {
  headline?: string;
  subheadline?: string;
  description?: string;
  cities?: string[];
  painPoints?: string[];
};

export function Hero({
  headline = "Eletricista em Santos, Cubatão, São Vicente e Praia Grande",
  subheadline = "Problema elétrico agora? Atendimento imediato.",
  description = `Curto-circuito, disjuntor desarmando, tomada queimando ou falta de energia.
Serviço rápido, seguro e sem terceirização na Baixada Santista.`,
  cities = ["Praia Grande", "São Vicente", "Cubatão", "Santos"],
  painPoints = ["Disjuntor caindo", "Tomada queimando", "Queda de energia", "Risco elétrico"],
}: HeroProps) {
  return (
    <section
      className="relative text-white py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay escuro + blur para melhorar leitura */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/50 to-[#0f1e33]/50 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
          {/* Logo */}
          <div className="mb-4">
            <img
              src={logo}
              alt="Primus Elétrica - Eletricista na Baixada Santista"
              className="w-24 h-24 mx-auto opacity-90"
            />
          </div>

          {/* Selo */}
          <div className="inline-flex items-center gap-2 bg-[#FBBF24] text-[#1E3A5F] px-4 py-2 rounded-full mb-5">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Atendimento Emergencial 24h</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl mb-5 font-bold">{headline}</h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-4 font-semibold text-[#FBBF24]">
            {subheadline}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto whitespace-pre-line">
            {description}
          </p>

          {/* Dores */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-200">
            {painPoints.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#FBBF24]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://wa.me/5513997177485"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FBBF24] hover:bg-[#f5b517] text-[#1E3A5F] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Resolver agora no WhatsApp
            </a>

            <a
              href="#contato"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1E3A5F] px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Solicitar orçamento
            </a>
          </div>

          {/* Cobertura local */}
          
            <h2 className="text-xl font-semibold mb-2 text-[#FBBF24]">
              Eletricista local com atendimento rápido
            </h2>

            <p className="text-gray-300 mb-4">
              Atendimento sem intermediários nas cidades:
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {cities.map((city) => (
                <span
                  key={city}
                  className="bg-white/20 px-4 py-2 rounded-full text-white font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Prova de autoridade */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#FBBF24] mb-2">
              24h/Dia 7d/semana
            </div>
            <div className="text-gray-300">
              Para atendimentos emergênciais
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#FBBF24] mb-2">+100</div>
            <div className="text-gray-300">Avaliações positivas</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#FBBF24] mb-2">
              Há mais de 4 Anos
            </div>
            <div className="text-gray-300">
              Solucionando problemas elétricos
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
