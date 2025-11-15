'use client';

import { useParams, useRouter } from 'next/navigation';
import { getCursoById } from '@/lib/cursos';
import { Clock, BookOpen, TrendingUp, Users, Award, CheckCircle, Star, ArrowLeft, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function CursoDetalhes() {
  const params = useParams();
  const router = useRouter();
  const curso = getCursoById(params.id as string);

  if (!curso) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Curso não encontrado</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            Voltar para página inicial
          </Link>
        </div>
      </div>
    );
  }

  const desconto = curso.precoOriginal 
    ? Math.round(((curso.precoOriginal - curso.preco) / curso.precoOriginal) * 100)
    : 0;

  const handleComprar = () => {
    router.push(`/checkout?curso=${curso.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AcademiaOnline
              </span>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero do Curso */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {curso.categoria}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                {curso.titulo}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                {curso.descricaoCompleta}
              </p>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <span className="font-semibold">4.9/5</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>2.847 alunos</span>
                </div>
              </div>
              <div className="text-sm text-blue-100">
                Criado por <span className="font-semibold text-white">{curso.instrutor}</span>
              </div>
            </div>

            {/* Card de Compra */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <img 
                src={curso.imagem} 
                alt={curso.titulo}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              
              <div className="mb-6">
                {curso.precoOriginal && (
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl text-gray-400 line-through">
                      €{curso.precoOriginal}
                    </span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{desconto}% OFF
                    </span>
                  </div>
                )}
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  €{curso.preco}
                </div>
                <div className="text-sm text-gray-600">
                  Pagamento único • Acesso vitalício
                </div>
              </div>

              <button
                onClick={handleComprar}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 mb-4"
              >
                <ShoppingCart className="w-5 h-5" />
                Comprar Agora
              </button>

              <div className="text-center text-sm text-gray-600 mb-6">
                Garantia de 30 dias ou seu dinheiro de volta
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Acesso vitalício ao curso</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Certificado de conclusão</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Suporte direto com instrutor</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Atualizações gratuitas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações do Curso */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{curso.duracao}</div>
              <div className="text-sm text-gray-600">de conteúdo</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{curso.aulas}</div>
              <div className="text-sm text-gray-600">aulas práticas</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{curso.nivel}</div>
              <div className="text-sm text-gray-600">nível</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{curso.modulos}</div>
              <div className="text-sm text-gray-600">módulos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo do Curso */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* O que você vai aprender */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                O Que Você Vai Aprender
              </h2>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="space-y-4">
                  {curso.conteudo.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefícios */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Benefícios Inclusos
              </h2>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="space-y-4">
                  {curso.beneficios.map((beneficio, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="w-6 h-6 text-yellow-500 fill-current flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{beneficio}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pronto Para Começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se aos milhares de alunos que já estão transformando suas carreiras
          </p>
          <button
            onClick={handleComprar}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <ShoppingCart className="w-5 h-5" />
            Comprar Agora por €{curso.preco}
          </button>
          <div className="mt-4 text-sm text-blue-100">
            Garantia de 30 dias • Pagamento seguro
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2024 AcademiaOnline. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
