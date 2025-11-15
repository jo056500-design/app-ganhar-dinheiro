'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Clock, BookOpen, TrendingUp, Star, ShoppingCart } from 'lucide-react';
import { Curso } from '@/lib/cursos';

interface CourseCardProps {
  curso: Curso;
}

export default function CourseCard({ curso }: CourseCardProps) {
  const router = useRouter();
  const desconto = curso.precoOriginal 
    ? Math.round(((curso.precoOriginal - curso.preco) / curso.precoOriginal) * 100)
    : 0;

  const handleComprar = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/checkout?curso=${curso.id}`);
  };

  return (
    <Link href={`/curso/${curso.id}`}>
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105 cursor-pointer">
        {/* Imagem */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={curso.imagem} 
            alt={curso.titulo}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {curso.destaque && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <Star className="w-4 h-4 fill-current" />
              Destaque
            </div>
          )}
          {desconto > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{desconto}%
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          {/* Categoria */}
          <div className="text-sm text-blue-600 font-semibold mb-2">
            {curso.categoria}
          </div>

          {/* Título */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {curso.titulo}
          </h3>

          {/* Descrição */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {curso.descricao}
          </p>

          {/* Instrutor */}
          <div className="text-sm text-gray-500 mb-4">
            Por <span className="font-semibold text-gray-700">{curso.instrutor}</span>
          </div>

          {/* Info */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {curso.duracao}
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {curso.aulas} aulas
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              {curso.nivel}
            </div>
          </div>

          {/* Preço e Botões */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                {curso.precoOriginal && (
                  <div className="text-sm text-gray-400 line-through">
                    €{curso.precoOriginal}
                  </div>
                )}
                <div className="text-3xl font-bold text-gray-900">
                  €{curso.preco}
                </div>
              </div>
            </div>
            
            {/* Botões */}
            <div className="flex gap-2">
              <div className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-center group-hover:from-blue-700 group-hover:to-purple-700 transition-all">
                Ver Detalhes
              </div>
              <button
                onClick={handleComprar}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
