'use client';

import { BookOpen, Users, Award, TrendingUp, CheckCircle, Star, Zap } from 'lucide-react';
import CourseCard from '@/components/custom/CourseCard';
import { cursos, getCursosDestaque } from '@/lib/cursos';

export default function Home() {
  const cursosDestaque = getCursosDestaque();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header/Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AcademiaOnline
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#cursos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Cursos
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Sobre
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Mais de 10.000 alunos transformados
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Aprenda Novas Habilidades
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ganhe Dinheiro Online
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Cursos práticos e diretos ao ponto para você dominar as habilidades mais procuradas do mercado e aumentar seus ganhos
            </p>
            <a 
              href="#cursos"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Ver Todos os Cursos
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10.000+</div>
              <div className="text-gray-600">Alunos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Cursos Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos em Destaque */}
      <section className="py-16" id="cursos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4 fill-current" />
              Cursos Mais Vendidos
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Cursos em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os cursos mais procurados pelos nossos alunos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {cursosDestaque.map((curso) => (
              <CourseCard key={curso.id} curso={curso} />
            ))}
          </div>
        </div>
      </section>

      {/* Todos os Cursos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Todos os Cursos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o curso perfeito para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursos.map((curso) => (
              <CourseCard key={curso.id} curso={curso} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white" id="sobre">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Por Que Escolher a AcademiaOnline?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              A melhor plataforma para aprender e crescer profissionalmente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Conteúdo de Qualidade</h3>
              <p className="text-blue-100">
                Cursos criados por especialistas com experiência real no mercado
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comunidade Ativa</h3>
              <p className="text-blue-100">
                Faça networking e troque experiências com milhares de alunos
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certificados</h3>
              <p className="text-blue-100">
                Receba certificados reconhecidos ao concluir os cursos
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Resultados Reais</h3>
              <p className="text-blue-100">
                Métodos comprovados que geram resultados práticos
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Acesso Vitalício</h3>
              <p className="text-blue-100">
                Pague uma vez e tenha acesso para sempre aos cursos
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Suporte Rápido</h3>
              <p className="text-blue-100">
                Tire suas dúvidas diretamente com os instrutores
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pronto Para Transformar Sua Carreira?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se a milhares de alunos que já estão ganhando dinheiro com novas habilidades
          </p>
          <a 
            href="#cursos"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Começar Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">AcademiaOnline</span>
              </div>
              <p className="text-gray-400">
                A melhor plataforma de cursos online para você aprender e ganhar dinheiro.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#cursos" className="hover:text-white transition-colors">Cursos</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AcademiaOnline. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
