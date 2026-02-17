import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import {
  Zap,
  Shield,
  Headphones,
  DollarSign,
  Wifi,
  Clock,
  Check,
  Star,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Gauge,
  User,
  Menu,
  X
} from 'lucide-react';
import { mockData } from '../mock';

const HomePage = () => {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cep: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    setFormData({ name: '', email: '', phone: '', cep: '', message: '' });
  };

  const iconMap = {
    Zap,
    Shield,
    Headphones,
    DollarSign,
    Wifi,
    Clock
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Floating WhatsApp Button */}
      {showWhatsApp && (
        <a
          href={`https://wa.me/${mockData.company.whatsapp}?text=${encodeURIComponent(mockData.company.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 transition-all hover:scale-110"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="h-16 w-16 drop-shadow-[0_0_20px_rgba(37,211,102,0.8)] hover:drop-shadow-[0_0_30px_rgba(37,211,102,1)]"
          />
        </a>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-lg shadow-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_fast-connect-isp/artifacts/09s3ikpe_WhatsApp%20Image%202025-11-05%20at%2017.33.35.png" 
                alt="Lucas Net Logo" 
                className="h-28 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">Início</a>
              <a href="#plans" className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">Planos</a>
              <a href="#coverage" className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">Cobertura</a>
              <a href="#faq" className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">FAQ</a>
              <a href="#contact" className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">Contato</a>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all"
                onClick={() => window.open(mockData.externalLinks.speedTest, '_blank')}
              >
                <Gauge className="mr-2 h-4 w-4" />
                Speed Test
              </Button>
              <Button
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all hover:shadow-[0_0_35px_rgba(34,197,94,0.8)]"
                onClick={() => window.open(`https://wa.me/${mockData.company.whatsapp}?text=${encodeURIComponent(mockData.company.whatsappMessage)}`, '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all hover:shadow-[0_0_35px_rgba(34,211,238,0.8)]"
                onClick={() => window.open(mockData.externalLinks.clientArea, '_blank')}
              >
                <User className="mr-2 h-4 w-4" />
                Área do Cliente
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cyan-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-cyan-500/30 bg-gray-800/95">
              <nav className="flex flex-col space-y-3">
                <a href="#home" className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium">Início</a>
                <a href="#plans" className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium">Planos</a>
                <a href="#coverage" className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium">Cobertura</a>
                <a href="#faq" className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium">FAQ</a>
                <a href="#contact" className="text-cyan-300 hover:text-cyan-400 transition-colors font-medium">Contato</a>
                <div className="flex flex-col space-y-2 pt-2">
                  <Button
                    variant="outline"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 w-full"
                    onClick={() => window.open(mockData.externalLinks.speedTest, '_blank')}
                  >
                    <Gauge className="mr-2 h-4 w-4" />
                    Speed Test
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white w-full"
                    onClick={() => window.open(`https://wa.me/${mockData.company.whatsapp}?text=${encodeURIComponent(mockData.company.whatsappMessage)}`, '_blank')}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white w-full"
                    onClick={() => window.open(mockData.externalLinks.clientArea, '_blank')}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Área do Cliente
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 px-4 py-1 text-sm shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                Fibra Óptica 100% Pura
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                Internet de Alta Velocidade para Sua Casa
              </h1>
              <p className="text-xl text-cyan-100 leading-relaxed">
                {mockData.company.description}. Planos a partir de R$ 79,90/mês com instalação gratuita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-lg px-8 py-6 shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] transition-all"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Assine Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 text-lg px-8 py-6 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all"
                  onClick={() => window.open(mockData.externalLinks.speedTest, '_blank')}
                >
                  <Gauge className="mr-2 h-5 w-5" />
                  Testar Velocidade
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-700 border-y-2 border-cyan-400/30 shadow-[0_0_50px_rgba(34,211,238,0.3)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">{stat.value}</div>
                <div className="text-cyan-100 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900/50 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Escolha seu plano ideal</h2>
            <p className="text-xl text-cyan-200">Sem fidelidade, instalação grátis e suporte 24/7</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative ${
                  plan.popular
                    ? 'bg-gradient-to-br from-cyan-600/20 to-blue-700/20 border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.5)] scale-105'
                    : 'bg-gray-800/50 border-2 border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]'
                } transition-all backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 shadow-[0_0_20px_rgba(34,211,238,0.6)]">Mais Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2 text-white">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">{plan.speed}</span>
                    <span className="text-2xl text-cyan-300 ml-2">{plan.unit}</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-cyan-200">R$</span>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-cyan-200">/mês</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                        <span className="text-cyan-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_25px_rgba(34,211,238,0.6)]'
                        : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border-2 border-cyan-500/30'
                    } transition-all`}
                    size="lg"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Assinar Agora
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Por que escolher a Lucas Net?</h2>
            <p className="text-xl text-cyan-200">Benefícios exclusivos para você navegar sem limites</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon];
              return (
                <Card key={benefit.id} className="bg-gray-800/50 border-2 border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cyan-200">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Cobertura em São Pedro da Serra</h2>
              <p className="text-xl text-cyan-200 mb-8">
                Atendemos {mockData.coverage.neighborhoods} com {mockData.coverage.coverage} de cobertura.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {mockData.coverage.cities.map((city, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-800/50 p-3 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all">
                    <MapPin className="h-5 w-5 text-cyan-400 flex-shrink-0 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <span className="text-cyan-100">{city}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Verificar Disponibilidade
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1703113690885-8caf0c77a7cf"
                alt="Cobertura de Rede"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover border-2 border-cyan-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900/50 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">O que nossos clientes dizem</h2>
            <p className="text-xl text-cyan-200">Milhares de famílias já confiam na Lucas Net</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gray-800/50 border-2 border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm text-cyan-300">{testimonial.location}</CardDescription>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-cyan-100 text-sm leading-relaxed">{testimonial.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Perguntas Frequentes</h2>
            <p className="text-xl text-cyan-200">Tire suas dúvidas sobre nossos serviços</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {mockData.faq.map((item) => (
              <AccordionItem
                key={item.id}
                value={`item-${item.id}`}
                className="bg-gray-800/50 border-2 border-cyan-500/30 rounded-lg px-6 hover:border-cyan-400 transition-all backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:text-cyan-400 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-cyan-100 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-700 border-y-2 border-cyan-400/30 shadow-[0_0_50px_rgba(34,211,238,0.3)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Solicite um Orçamento</h2>
            <p className="text-xl text-cyan-100">Preencha o formulário e entraremos em contato rapidamente</p>
          </div>
          <Card className="border-2 border-cyan-400/50 shadow-[0_0_40px_rgba(34,211,238,0.4)] bg-gray-900/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-cyan-200">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                      className="h-12 bg-gray-800/50 border-cyan-500/30 text-white placeholder:text-cyan-300/50 focus:border-cyan-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-cyan-200">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="h-12 bg-gray-800/50 border-cyan-500/30 text-white placeholder:text-cyan-300/50 focus:border-cyan-400"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-cyan-200">Telefone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(24) 98765-4321"
                      required
                      className="h-12 bg-gray-800/50 border-cyan-500/30 text-white placeholder:text-cyan-300/50 focus:border-cyan-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cep" className="text-cyan-200">CEP *</Label>
                    <Input
                      id="cep"
                      name="cep"
                      value={formData.cep}
                      onChange={handleInputChange}
                      placeholder="00000-000"
                      required
                      className="h-12 bg-gray-800/50 border-cyan-500/30 text-white placeholder:text-cyan-300/50 focus:border-cyan-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-cyan-200">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos mais sobre suas necessidades..."
                    rows={4}
                    className="resize-none bg-gray-800/50 border-cyan-500/30 text-white placeholder:text-cyan-300/50 focus:border-cyan-400"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-lg py-6 shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] transition-all"
                >
                  Enviar Solicitação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-cyan-500/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_fast-connect-isp/artifacts/09s3ikpe_WhatsApp%20Image%202025-11-05%20at%2017.33.35.png" 
                  alt="Lucas Net Logo" 
                  className="h-32 w-auto drop-shadow-[0_0_20px_rgba(34,211,238,0.9)]"
                />
              </div>
              <p className="text-cyan-200 leading-relaxed">{mockData.company.tagline}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-cyan-400">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-cyan-200 hover:text-cyan-400 transition-colors">Início</a></li>
                <li><a href="#plans" className="text-cyan-200 hover:text-cyan-400 transition-colors">Planos</a></li>
                <li><a href="#coverage" className="text-cyan-200 hover:text-cyan-400 transition-colors">Cobertura</a></li>
                <li><a href="#faq" className="text-cyan-200 hover:text-cyan-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-cyan-400">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => window.open(mockData.externalLinks.speedTest, '_blank')}
                    className="text-cyan-200 hover:text-cyan-400 transition-colors"
                  >
                    Speed Test
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.open(mockData.externalLinks.clientArea, '_blank')}
                    className="text-cyan-200 hover:text-cyan-400 transition-colors"
                  >
                    Área do Cliente
                  </button>
                </li>
                <li><a href="#contact" className="text-cyan-200 hover:text-cyan-400 transition-colors">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-cyan-400">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  <span className="text-cyan-200">{mockData.company.phone}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span className="text-cyan-200">{mockData.company.email}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-cyan-400" />
                  <span className="text-cyan-200">WhatsApp</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-500/30 pt-8 text-center text-cyan-300">
            <p>&copy; 2026 {mockData.company.name}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
