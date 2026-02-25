/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Check, 
  ChevronDown, 
  Gift, 
  Heart, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  BookOpen, 
  Video, 
  Mail, 
  Users,
  Clock,
  Target,
  DollarSign
} from "lucide-react";
import { useState } from "react";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-16 px-6 md:py-24 ${className}`}>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ children, className = "", variant = "primary" }: { children: React.ReactNode; className?: string; variant?: "primary" | "secondary" }) => {
  const baseStyles = "inline-block text-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-md active:scale-95";
  const variants = {
    primary: "bg-brand-coral text-white hover:bg-opacity-90",
    secondary: "bg-white text-brand-coral border-2 border-brand-coral hover:bg-brand-coral hover:text-white"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white p-8 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/10 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-4 text-brand-dark/80 leading-relaxed whitespace-pre-line">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      {/* BLOCO 1 — VENDA IMEDIATA */}
      <Section className="bg-brand-sand">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            En 24 horas puedes crear tu primera bikini y dar tu primer paso real como emprendedora.
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/70 italic font-serif mb-8">
            Aunque hoy no sepas crochet, aquí tienes la Ruta Paso a Paso para empezar a vender sin improvisar.
          </p>
          
          <div className="max-w-2xl mx-auto space-y-4 text-lg mb-10">
            <p>Hoy estás confundida.</p>
            <p>No sabes qué hacer primero.</p>
            <p className="font-semibold">Mañana puedes tener tu primera bikini lista.</p>
            <p>La diferencia no es talento.</p>
            <p className="italic">Es tener el orden correcto.</p>
            <p>La Ruta Bikini Emprendedora te muestra exactamente qué aprender, qué modelo hacer primero y cómo empezar a vender desde cero.</p>
            <div className="flex flex-wrap justify-center gap-4 text-brand-coral font-bold">
              <span>Sin caos.</span>
              <span>Sin perder tiempo.</span>
              <span>Sin improvisar.</span>
            </div>
          </div>
          
          <Button className="w-full md:w-auto">
            👉 QUIERO EMPEZAR AHORA
          </Button>
        </motion.div>
      </Section>

      {/* BLOCO 2 — DEMONSTRATIVO */}
      <Section className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🧶 Esto es exactamente lo que recibes hoy:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <div className="flex items-center gap-3 mb-4 text-brand-coral">
              <BookOpen size={24} />
              <h3 className="text-xl font-bold">Ebook Ruta Bikini Emprendedora</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> 4 etapas organizadas</li>
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> +60 modelos de bikinis</li>
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> +600 patrones (escritos + gráficos)</li>
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> Tablas de medidas</li>
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> Guía de materiales</li>
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> Técnicas paso a paso</li>
            </ul>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4 text-brand-coral">
              <Video size={24} />
              <h3 className="text-xl font-bold">Curso en Video “De Cero a Experta”</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> Clases grabadas</li>
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> Demostraciones reales</li>
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> Desde nivel principiante</li>
            </ul>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4 text-brand-coral">
              <Mail size={24} />
              <h3 className="text-xl font-bold">Acceso inmediato</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> Llega a tu correo</li>
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> Descarga directa</li>
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> Empiezas hoy mismo</li>
            </ul>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-4 text-brand-coral">
              <Users size={24} />
              <h3 className="text-xl font-bold">Comunidad privada</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> Resuelves dudas</li>
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> Compartes avances</li>
              <li className="flex items-start gap-2"><Check className="text-green-500 shrink-0 mt-1" size={18} /> No estás sola</li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 text-center text-lg space-y-2">
          <p>Sin teoría innecesaria.</p>
          <p>Sin contenido desordenado.</p>
          <p className="font-bold">Todo estructurado para empezar correctamente.</p>
        </div>
      </Section>

      {/* BLOCO 3 — BENEFÍCIOS */}
      <Section className="bg-brand-sand">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ✨ Lo que realmente cambia cuando dejas de estar perdida y empiezas con dirección:
        </h2>
        
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-white p-4 rounded-full shadow-sm text-brand-coral">
              <Target size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Dejas de sentirte confundida</h3>
              <p className="text-lg text-brand-dark/80">Ya no pasas horas pensando “¿qué hago primero?”. Tienes un camino claro.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-white p-4 rounded-full shadow-sm text-brand-coral">
              <Clock size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Terminas tu primera bikini en 24 horas</h3>
              <p className="text-lg text-brand-dark/80 italic">Y la miras pensando: “Sí puedo hacer esto.”</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-white p-4 rounded-full shadow-sm text-brand-coral">
              <MessageCircle size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Publicas sin miedo</h3>
              <p className="text-lg text-brand-dark/80">No improvisas. Sabes que estás haciendo el modelo correcto para empezar.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-white p-4 rounded-full shadow-sm text-brand-coral">
              <DollarSign size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Recibes tu primer mensaje de interés</h3>
              <p className="text-lg text-brand-dark/80">Y por primera vez… sientes que esto puede convertirse en algo real.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-white p-4 rounded-full shadow-sm text-brand-coral">
              <Check size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">No te bloqueas con los talles</h3>
              <p className="text-lg text-brand-dark/80">Sabes ajustarlos. Sabes cómo adaptarlos. No dependes de adivinar.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-white p-4 rounded-full shadow-sm text-brand-coral">
              <Star size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Empiezas a verte como emprendedora</h3>
              <p className="text-lg text-brand-dark/80">No como alguien “intentando”. Sino como alguien que ya empezó.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-xl italic font-serif">
          <p>Esto no es solo aprender crochet.</p>
          <p>Es dejar de pensar tanto… y empezar a actuar.</p>
        </div>
      </Section>

      {/* BLOCO 4 — HEADLINE DE URGÊNCIA */}
      <Section className="bg-brand-coral text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Tu primera bikini puede estar lista en 24 horas.
        </h2>
        <div className="text-xl space-y-4 mb-10">
          <p>Cada día que postergas es un día más sintiéndote confundida.</p>
          <p>No necesitas más ideas. Necesitas el orden correcto para empezar.</p>
          <p className="font-bold">Empieza hoy. Mañana puedes estar terminando tu primera pieza.</p>
        </div>
        <Button className="bg-white text-brand-coral hover:bg-brand-sand">
          👉 QUIERO EMPEZAR AHORA
        </Button>
      </Section>

      {/* BLOCO 5: IDEAL PARA VOCÊ QUE DESEJA */}
      <Section className="bg-white">
        <Card className="bg-brand-sand/30 border-none">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Heart className="text-brand-coral fill-brand-coral" />
            Esto es ideal para ti si…
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-lg">
            <li className="flex items-start gap-2"><Check className="text-brand-coral shrink-0 mt-1" /> Quieres empezar a vender bikinis pero no sabes qué hacer primero</li>
            <li className="flex items-start gap-2"><Check className="text-brand-coral shrink-0 mt-1" /> Sientes que tienes ganas… pero te falta dirección</li>
            <li className="flex items-start gap-2"><Check className="text-brand-coral shrink-0 mt-1" /> No sabes qué modelo hacer para comenzar</li>
            <li className="flex items-start gap-2"><Check className="text-brand-coral shrink-0 mt-1" /> Tienes miedo de perder tiempo haciendo lo incorrecto</li>
            <li className="flex items-start gap-2"><Check className="text-brand-coral shrink-0 mt-1" /> No sabes si empezar por aprender puntos básicos o ya hacer modelos</li>
            <li className="flex items-start gap-2"><Check className="text-brand-coral shrink-0 mt-1" /> Quieres generar ingresos desde casa</li>
            <li className="flex items-start gap-2"><Check className="text-brand-coral shrink-0 mt-1" /> No quieres un hobby… quieres algo que funcione</li>
            <li className="flex items-start gap-2 font-bold"><Check className="text-brand-coral shrink-0 mt-1" /> Te gustaría recibir tu primer pedido y decir: “Esto lo hice yo.”</li>
          </ul>
        </Card>
      </Section>

      {/* BLOCO — PROVA SOCIAL */}
      <Section className="bg-brand-sand">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          💬 Mira lo que está pasando con otras chicas que ya empezaron:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="italic">
            <p className="text-lg mb-4">“Pensé que iba a ser difícil, pero en un día ya tenía mi primera bikini lista. Nunca había hecho una antes.”</p>
            <p className="font-bold text-brand-coral">— Camila R.</p>
          </Card>
          <Card className="italic">
            <p className="text-lg mb-4">“Lo que más me ayudó fue saber exactamente qué modelo hacer primero. Antes estaba perdida.”</p>
            <p className="font-bold text-brand-coral">— Valentina M.</p>
          </Card>
          <Card className="italic">
            <p className="text-lg mb-4">“Subí mi primera bikini a Instagram y recibí mis primeros mensajes en la misma semana.”</p>
            <p className="font-bold text-brand-coral">— Daniela S.</p>
          </Card>
          <Card className="italic">
            <p className="text-lg mb-4">“La guía para principiantes me dio confianza. No sabía nada de crochet.”</p>
            <p className="font-bold text-brand-coral">— Sofía L.</p>
          </Card>
        </div>
      </Section>

      {/* BLOCO — TODO LO QUE RECIBES */}
      <Section className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          📦 Ruta Bikini Emprendedora incluye:
        </h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-brand-coral pl-6 py-2">
            <h3 className="text-xl font-bold mb-2">📘 Ebook Paso a Paso (4 Etapas)</h3>
            <ul className="text-brand-dark/80">
              <li>• Qué aprender primero</li>
              <li>• Qué bikinis hacer para empezar</li>
              <li>• Cómo prepararte para vender</li>
              <li>• Cómo dar tus primeros pasos</li>
            </ul>
          </div>

          <div className="border-l-4 border-brand-coral pl-6 py-2">
            <h3 className="text-xl font-bold mb-2">🧵 +60 Modelos Vendibles</h3>
            <p className="text-brand-dark/80">Organizados por nivel.</p>
          </div>

          <div className="border-l-4 border-brand-coral pl-6 py-2">
            <h3 className="text-xl font-bold mb-2">📝 +600 Patrones</h3>
            <p className="text-brand-dark/80">Escritos y con gráficos.</p>
          </div>

          <div className="border-l-4 border-brand-coral pl-6 py-2">
            <h3 className="text-xl font-bold mb-2">📏 Tablas de Medidas</h3>
            <p className="text-brand-dark/80">Para ajustar talles sin improvisar.</p>
          </div>

          <div className="border-l-4 border-brand-coral pl-6 py-2">
            <h3 className="text-xl font-bold mb-2">🧶 Guía de Materiales</h3>
            <p className="text-brand-dark/80">Qué usar y qué comprar.</p>
          </div>

          <div className="border-l-4 border-brand-coral pl-6 py-2">
            <h3 className="text-xl font-bold mb-2">🎥 Curso en Video “De Cero a Experta”</h3>
            <p className="text-brand-dark/80">Clases grabadas desde nivel principiante.</p>
          </div>
        </div>
      </Section>

      {/* BLOCO — BÔNUS */}
      <Section className="bg-brand-sand">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🎁 Y no solo recibes los bikinis…</h2>
          <p className="text-xl">Recibes todo esto para que realmente puedas vender:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="flex flex-col items-center text-center">
            <Gift className="text-brand-coral mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">+30 Patrones de Bolsos al Crochet</h3>
            <p className="text-brand-dark/80">Porque vender solo bikinis limita tus ingresos. Aquí puedes ofrecer conjuntos completos.</p>
          </Card>

          <Card className="flex flex-col items-center text-center">
            <Gift className="text-brand-coral mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Sombreros al Crochet</h3>
            <p className="text-brand-dark/80">Más productos. Más opciones. Más dinero por cliente.</p>
          </Card>

          <Card className="flex flex-col items-center text-center">
            <Gift className="text-brand-coral mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Comunidad Privada</h3>
            <p className="text-brand-dark/80">Si te quedas con dudas, abandonas. Aquí no te quedas sola.</p>
          </Card>

          <Card className="flex flex-col items-center text-center">
            <Gift className="text-brand-coral mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Guía de Símbolos y Abreviaturas</h3>
            <p className="text-brand-dark/80">Para que ningún patrón vuelva a confundirte.</p>
          </Card>

          <Card className="flex flex-col items-center text-center md:col-span-2">
            <Gift className="text-brand-coral mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Súper Guía para Principiantes</h3>
            <p className="text-brand-dark/80">Desde cero real. Sin experiencia previa.</p>
          </Card>
        </div>

        <div className="mt-12 text-center text-xl font-bold">
          <p>No es solo aprender.</p>
          <p>Es tener todo lo necesario para empezar sin excusas.</p>
        </div>
      </Section>

      {/* BLOCO — OFERTA E VALORES */}
      <Section className="bg-white" id="pricing">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Elige tu plan y empieza hoy</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* PLAN BÁSICO */}
          <Card className="relative overflow-hidden border-2 border-transparent">
            <div className="absolute top-0 right-0 bg-gray-200 px-4 py-1 text-sm font-bold rounded-bl-lg">🥉 BÁSICO</div>
            <h3 className="text-2xl font-bold mb-4">PLAN BÁSICO</h3>
            <div className="text-4xl font-bold mb-6 text-brand-coral">$4 <span className="text-lg text-brand-dark/60 font-normal">USD</span></div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2"><Check size={18} className="text-brand-coral shrink-0 mt-1" /> Ebook Ruta Bikini Emprendedora</li>
              <li className="flex items-start gap-2"><Check size={18} className="text-brand-coral shrink-0 mt-1" /> +60 Modelos de bikinis</li>
              <li className="flex items-start gap-2"><Check size={18} className="text-brand-coral shrink-0 mt-1" /> +600 Patrones</li>
              <li className="flex items-start gap-2"><Check size={18} className="text-brand-coral shrink-0 mt-1" /> Tablas de Medidas</li>
              <li className="flex items-start gap-2"><Check size={18} className="text-brand-coral shrink-0 mt-1" /> Guía de Materiales</li>
              <li className="flex items-start gap-2"><Check size={18} className="text-brand-coral shrink-0 mt-1" /> Curso en Video</li>
              <li className="flex items-start gap-2"><Check size={18} className="text-brand-coral shrink-0 mt-1" /> Garantía 7 días</li>
            </ul>
            
            <p className="text-brand-dark/70 mb-8 italic">Empiezas hoy con todo lo esencial para crear y vender tu primera bikini.</p>
            
            <Button className="w-full">
              👉 QUIERO EL PLAN BÁSICO
            </Button>
          </Card>

          {/* PLAN COMPLETO */}
          <Card className="relative overflow-hidden border-2 border-brand-coral ring-4 ring-brand-coral/10">
            <div className="absolute top-0 right-0 bg-brand-coral text-white px-4 py-1 text-sm font-bold rounded-bl-lg">🥇 RECOMENDADO</div>
            <h3 className="text-2xl font-bold mb-4">PLAN COMPLETO</h3>
            <div className="text-4xl font-bold mb-6 text-brand-coral">$7 <span className="text-lg text-brand-dark/60 font-normal">USD</span></div>
            
            <div className="mb-4 font-bold text-brand-coral">Incluye TODO el Plan Básico y además:</div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 font-bold"><Gift size={18} className="text-brand-coral shrink-0 mt-1" /> Bolsos al Crochet</li>
              <li className="flex items-start gap-2 font-bold"><Gift size={18} className="text-brand-coral shrink-0 mt-1" /> Sombreros al Crochet</li>
              <li className="flex items-start gap-2 font-bold"><Gift size={18} className="text-brand-coral shrink-0 mt-1" /> Comunidad Privada</li>
              <li className="flex items-start gap-2 font-bold"><Gift size={18} className="text-brand-coral shrink-0 mt-1" /> Guía de Símbolos</li>
              <li className="flex items-start gap-2 font-bold"><Gift size={18} className="text-brand-coral shrink-0 mt-1" /> Súper Guía Principiantes</li>
            </ul>
            
            <p className="text-brand-dark/70 mb-8 italic">Más productos. Más soporte. Más oportunidades de ingreso. El ecosistema completo.</p>
            
            <Button className="w-full">
              👉 QUIERO EL PLAN COMPLETO
            </Button>
          </Card>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-lg italic mb-4">✨ Antes de decidir…</p>
          <p className="text-brand-dark/80">Muchas empiezan con el básico… y luego vuelven por el completo cuando quieren más productos y más apoyo. Si quieres empezar con todo desde el principio, el Plan Completo es para ti.</p>
        </div>
      </Section>

      {/* BLOCO: GARANTÍA */}
      <Section className="bg-brand-sand">
        <Card className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="bg-brand-coral/10 p-6 rounded-full">
            <ShieldCheck size={80} className="text-brand-coral" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">🛡 Garantía de 7 Días</h2>
            <div className="text-lg space-y-4 text-brand-dark/80">
              <p>Tienes 7 días para revisar todo el contenido con calma.</p>
              <p>Si entras, miras el material y sientes que no es para ti, puedes pedir tu reembolso. Sin preguntas incómodas. Sin explicaciones largas.</p>
              <p className="font-bold text-brand-dark">El riesgo no es tuyo. Es mío.</p>
              <p className="italic">Empieza tranquila. Prueba. Y decide con seguridad.</p>
            </div>
          </div>
        </Card>
      </Section>

      {/* BLOCO 9: PERGUNTAS FREQUENTES */}
      <Section className="bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">❓ Preguntas Frecuentes</h2>
        <div className="space-y-2">
          <FAQItem 
            question="¿Necesito saber crochet para empezar?" 
            answer="No. El material incluye una Súper Guía para Principiantes y clases en video desde nivel básico. Puedes empezar desde cero." 
          />
          <FAQItem 
            question="¿De verdad puedo hacer mi primera bikini en 24 horas?" 
            answer="Sí. Siguiendo el paso a paso y comenzando con los modelos iniciales, es totalmente posible." 
          />
          <FAQItem 
            question="¿Los patrones son fáciles de entender?" 
            answer="Sí. Incluyen explicación escrita y gráficos, además de una guía de símbolos y abreviaturas." 
          />
          <FAQItem 
            question="¿Puedo vender las bikinis que haga?" 
            answer="Sí. Puedes vender todo lo que produzcas con los modelos incluidos." 
          />
          <FAQItem 
            question="¿Cómo recibo el contenido?" 
            answer="Después del pago, recibes acceso inmediato por correo electrónico. Descargas y empiezas el mismo día." 
          />
          <FAQItem 
            question="¿Y si no me gusta o no es para mí?" 
            answer="Tienes 7 días de garantía. Si no estás satisfecha, puedes solicitar reembolso." 
          />
          <FAQItem 
            question="¿La comunidad tiene costo adicional?" 
            answer="No. Está incluida dentro del Plan Completo." 
          />
        </div>
      </Section>

      {/* BLOCO 10: RODAPÉ */}
      <footer className="bg-brand-dark text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-serif italic">Ruta Bikini Emprendedora</h2>
          <p className="text-white/60">Producto digital con acceso inmediato.</p>
          <div className="text-sm text-white/40 space-y-2">
            <p>Este sitio no está afiliado a Instagram ni a ninguna otra plataforma.</p>
            <p>Los resultados pueden variar según tu dedicación y aplicación.</p>
            <p>Todos los derechos reservados.</p>
          </div>
          <p className="text-white/60">Si tienes dudas, puedes escribirnos dentro de la comunidad o al correo de soporte.</p>
        </div>
      </footer>
    </div>
  );
}
