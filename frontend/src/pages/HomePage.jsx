import React, { useState } from 'react';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cep: '',
    message: ''
  });

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_fast-connect-isp/artifacts/y7dx9plt_WhatsApp%20Image%202025-11-05%20at%2017.33.35.jpeg" 
                alt="Lucas Net Logo" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Início</a>
              <a href="#plans" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Planos</a>
              <a href="#coverage" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Cobertura</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contato</a>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.open(mockData.externalLinks.speedTest, '_blank')}
              >
                <Gauge className="mr-2 h-4 w-4" />
                Speed Test
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open(mockData.externalLinks.clientArea, '_blank')}
              >
                <User className="mr-2 h-4 w-4" />
                Área do Cliente
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Início</a>
                <a href="#plans" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Planos</a>
                <a href="#coverage" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Cobertura</a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">FAQ</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contato</a>
                <div className="flex flex-col space-y-2 pt-2">
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full"
                    onClick={() => window.open(mockData.externalLinks.speedTest, '_blank')}
                  >
                    <Gauge className="mr-2 h-4 w-4" />
                    Speed Test
                  </Button>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full"
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
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1 text-sm">
                Fibra Óptica 100% Pura
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Internet de Alta Velocidade para Sua Casa
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {mockData.company.description}. Planos a partir de R$ 79,90/mês com instalação gratuita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Assine Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
                  onClick={() => window.open(mockData.externalLinks.speedTest, '_blank')}
                >
                  <Gauge className="mr-2 h-5 w-5" />
                  Testar Velocidade
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-3xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1604869515882-4d10fa4b0492"
                alt="Fibra Óptica"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que escolher a Lucas Net?</h2>
            <p className="text-xl text-gray-600">Benefícios exclusivos para você navegar sem limites</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon];
              return (
                <Card key={benefit.id} className="border-2 hover:border-blue-600 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Escolha seu plano ideal</h2>
            <p className="text-xl text-gray-600">Sem fidelidade, instalação grátis e suporte 24/7</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mockData.plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative ${
                  plan.popular
                    ? 'border-4 border-blue-600 shadow-2xl scale-105'
                    : 'border-2 hover:border-blue-600 hover:shadow-xl'
                } transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Mais Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-gray-900">{plan.speed}</span>
                    <span className="text-2xl text-gray-600 ml-2">{plan.unit}</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-gray-600">R$</span>
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
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

      {/* Coverage Section */}
      <section id="coverage" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Cobertura em toda região metropolitana</h2>
              <p className="text-xl text-gray-600 mb-8">
                Atendemos {mockData.coverage.neighborhoods} com {mockData.coverage.coverage} de cobertura.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {mockData.coverage.cities.slice(0, 8).map((city, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Verificar Disponibilidade
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1703113690885-8caf0c77a7cf"
                alt="Cobertura de Rede"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-600">Milhares de famílias já confiam na Lucas Net</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">{testimonial.location}</CardDescription>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{testimonial.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Tire suas dúvidas sobre nossos serviços</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {mockData.faq.map((item) => (
              <AccordionItem
                key={item.id}
                value={`item-${item.id}`}
                className="border-2 rounded-lg px-6 hover:border-blue-600 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Solicite um Orçamento</h2>
            <p className="text-xl text-blue-100">Preencha o formulário e entraremos em contato rapidamente</p>
          </div>
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 98765-4321"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cep">CEP *</Label>
                    <Input
                      id="cep"
                      name="cep"
                      value={formData.cep}
                      onChange={handleInputChange}
                      placeholder="00000-000"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos mais sobre suas necessidades..."
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6"
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
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_fast-connect-isp/artifacts/y7dx9plt_WhatsApp%20Image%202025-11-05%20at%2017.33.35.jpeg" 
                  alt="Lucas Net Logo" 
                  className="h-12 w-auto brightness-200"
                />
              </div>
              <p className="text-gray-400 leading-relaxed">{mockData.company.tagline}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
                <li><a href="#plans" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
                <li><a href="#coverage" className="text-gray-400 hover:text-white transition-colors">Cobertura</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => window.open(mockData.externalLinks.speedTest, '_blank')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Speed Test
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.open(mockData.externalLinks.clientArea, '_blank')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Área do Cliente
                  </button>
                </li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-400">{mockData.company.phone}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-400">{mockData.company.email}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-400">WhatsApp</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {mockData.company.name}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
