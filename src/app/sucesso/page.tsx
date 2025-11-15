'use client';

import { useSearchParams } from 'next/navigation';
import { getCursoById } from '@/lib/cursos';
import { BookOpen, CheckCircle, Download, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

function SucessoContent() {
  const searchParams = useSearchParams();
  const cursoId = searchParams.get('curso');
  const curso = cursoId ? getCursoById(cursoId) : null;

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <nav className="bg-white shadow-md">
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
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Ícone de Sucesso */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pagamento Confirmado!
          </h1>
          <p className="text-xl text-gray-600">
            Parabéns pela sua compra! Seu curso já está disponível.
          </p>
        </div>

        {/* Card do Curso */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <img 
              src={curso.imagem} 
              alt={curso.titulo}
              className="w-full md:w-48 h-32 object-cover rounded-xl"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {curso.titulo}
              </h2>
              <p className="text-gray-600 mb-4">
                Por {curso.instrutor}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>⭐ {curso.avaliacao} ({curso.numeroAvaliacoes} avaliações)</span>
                <span>👥 {curso.alunos} alunos</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Próximos Passos:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verifique seu email</h4>
                  <p className="text-sm text-gray-600">
                    Enviamos um email de confirmação com os detalhes do seu curso e instruções de acesso.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Download className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Acesse seu curso</h4>
                  <p className="text-sm text-gray-600">
                    Você já pode começar a assistir as aulas e baixar os materiais complementares.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Certificado de conclusão</h4>
                  <p className="text-sm text-gray-600">
                    Complete todas as aulas para receber seu certificado digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            O que você ganhou:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Acesso vitalício ao curso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Certificado de conclusão</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Materiais complementares</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Suporte com instrutor</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Atualizações gratuitas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Garantia de 30 dias</span>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href={`/curso/${curso.id}`}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-center hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-2"
          >
            Começar Curso Agora
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/"
            className="flex-1 bg-white text-gray-700 py-4 rounded-xl font-bold text-center hover:bg-gray-50 transition-all shadow-lg border-2 border-gray-200"
          >
            Ver Mais Cursos
          </Link>
        </div>

        {/* Suporte */}
        <div className="text-center mt-12 text-gray-600">
          <p className="mb-2">Precisa de ajuda?</p>
          <a href="mailto:suporte@academiaonline.com" className="text-blue-600 hover:text-blue-700 font-semibold">
            suporte@academiaonline.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Sucesso() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    }>
      <SucessoContent />
    </Suspense>
  );
}
