'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { getCursoById } from '@/lib/cursos';
import { BookOpen, CreditCard, Lock, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState, Suspense } from 'react';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const cursoId = searchParams.get('curso');
  const curso = cursoId ? getCursoById(cursoId) : null;

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    numeroCartao: '',
    validade: '',
    cvv: '',
    cpf: ''
  });

  const [processando, setProcessando] = useState(false);
  const [erros, setErros] = useState<Record<string, string>>({});

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Limpar erro do campo ao digitar
    if (erros[name]) {
      setErros(prev => {
        const novosErros = { ...prev };
        delete novosErros[name];
        return novosErros;
      });
    }
    
    // Formatação automática
    let formattedValue = value;
    
    if (name === 'numeroCartao') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    } else if (name === 'validade') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').slice(0, 5);
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 3);
    } else if (name === 'cpf') {
      formattedValue = value.replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .slice(0, 14);
    }
    
    setFormData(prev => ({ ...prev, [name]: formattedValue }));
  };

  const validarFormulario = (): boolean => {
    const novosErros: Record<string, string> = {};

    // Validar nome
    if (!formData.nome.trim() || formData.nome.trim().length < 3) {
      novosErros.nome = 'Nome completo é obrigatório';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      novosErros.email = 'Email inválido';
    }

    // Validar CPF
    const cpfLimpo = formData.cpf.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) {
      novosErros.cpf = 'CPF inválido';
    }

    // Validar número do cartão
    const cartaoLimpo = formData.numeroCartao.replace(/\s/g, '');
    if (cartaoLimpo.length !== 16) {
      novosErros.numeroCartao = 'Número do cartão inválido';
    }

    // Validar validade
    if (formData.validade.length !== 5) {
      novosErros.validade = 'Validade inválida';
    } else {
      const [mes, ano] = formData.validade.split('/');
      const mesNum = parseInt(mes);
      if (mesNum < 1 || mesNum > 12) {
        novosErros.validade = 'Mês inválido';
      }
    }

    // Validar CVV
    if (formData.cvv.length !== 3) {
      novosErros.cvv = 'CVV inválido';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar formulário
    if (!validarFormulario()) {
      return;
    }

    setProcessando(true);

    // Simular processamento de pagamento
    setTimeout(() => {
      router.push(`/sucesso?curso=${curso.id}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
            <div className="flex items-center gap-2 text-green-600">
              <Lock className="w-5 h-5" />
              <span className="text-sm font-semibold">Pagamento Seguro</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href={`/curso/${curso.id}`} className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Voltar ao curso
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário de Pagamento */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Finalizar Compra
            </h1>
            <p className="text-gray-600 mb-8">
              Preencha seus dados para concluir a compra
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dados Pessoais */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Dados Pessoais
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        erros.nome ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="João Silva"
                    />
                    {erros.nome && (
                      <p className="text-red-500 text-sm mt-1">{erros.nome}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        erros.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="joao@email.com"
                    />
                    {erros.email && (
                      <p className="text-red-500 text-sm mt-1">{erros.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CPF
                    </label>
                    <input
                      type="text"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        erros.cpf ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="000.000.000-00"
                    />
                    {erros.cpf && (
                      <p className="text-red-500 text-sm mt-1">{erros.cpf}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Dados do Cartão */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-900">
                    Dados do Cartão
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      name="numeroCartao"
                      value={formData.numeroCartao}
                      onChange={handleInputChange}
                      required
                      maxLength={19}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        erros.numeroCartao ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="0000 0000 0000 0000"
                    />
                    {erros.numeroCartao && (
                      <p className="text-red-500 text-sm mt-1">{erros.numeroCartao}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Validade
                      </label>
                      <input
                        type="text"
                        name="validade"
                        value={formData.validade}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          erros.validade ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="MM/AA"
                      />
                      {erros.validade && (
                        <p className="text-red-500 text-sm mt-1">{erros.validade}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          erros.cvv ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="123"
                      />
                      {erros.cvv && (
                        <p className="text-red-500 text-sm mt-1">{erros.cvv}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={processando}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {processando ? 'Processando...' : `Pagar €${curso.preco}`}
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Lock className="w-4 h-4" />
                <span>Pagamento 100% seguro e criptografado</span>
              </div>
            </form>
          </div>

          {/* Resumo do Pedido */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Resumo do Pedido
              </h2>

              <div className="mb-6">
                <img 
                  src={curso.imagem} 
                  alt={curso.titulo}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h3 className="font-bold text-gray-900 mb-2">
                  {curso.titulo}
                </h3>
                <p className="text-sm text-gray-600">
                  Por {curso.instrutor}
                </p>
              </div>

              <div className="space-y-3 py-6 border-t border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>€{curso.preco}</span>
                </div>
                {curso.precoOriginal && (
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Desconto</span>
                    <span>-€{curso.precoOriginal - curso.preco}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between text-xl font-bold text-gray-900 mt-6 mb-6">
                <span>Total</span>
                <span>€{curso.preco}</span>
              </div>

              <div className="space-y-3 bg-blue-50 rounded-xl p-4">
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Acesso vitalício ao curso</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Certificado de conclusão</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Garantia de 30 dias</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Suporte com instrutor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Checkout() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando checkout...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
