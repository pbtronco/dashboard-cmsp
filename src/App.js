import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import { LayoutDashboard, Clock, Target, ShieldCheck, Zap, BarChart3, AlertCircle, List } from 'lucide-react';

// Para usar este componente, cole-o no seu ficheiro App.js
// e instale as dependências necessárias com:
// npm install recharts lucide-react
// Certifique-se também de que tem o Tailwind CSS configurado no seu projeto.

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');

  // Dados consolidados e enriquecidos com base na análise estratégica
  const chamados = [
    { id: 'STR 68291', titulo: 'Ficha Funcional do Servidor', prazoContratual: 30, prazoReal: 38, status: 'Entregue com Atraso', reaberturas: 1, categoria: 'Manutenção', justificativaAtraso: 'Mudança de Escopo' },
    { id: 'STR 68292', titulo: 'Integração SIM - Justiça Eleitoral', prazoContratual: 60, prazoReal: 28, status: 'Antecipado', reaberturas: 1, categoria: 'Integração' },
    { id: 'STR 68293', titulo: 'Aplicação Banco de Horas', prazoContratual: 55, prazoReal: 35, status: 'Antecipado', reaberturas: 5, categoria: 'Desenvolvimento', naturezaReabertura: 'Refinamento/Escopo' },
    { id: 'STR 68588', titulo: 'Arquivo TXT PREVCOM', prazoContratual: 30, prazoReal: 75, status: 'Entregue com Atraso', reaberturas: 1, categoria: 'Integração', justificativaAtraso: 'Dependência Cliente' },
    { id: 'STR 68589', titulo: 'Planilhas de Cargos e Salários', prazoContratual: 30, prazoReal: null, status: 'Aguardando Aceite', reaberturas: 3, categoria: 'Desenvolvimento', naturezaReabertura: 'Refinamento/Escopo' },
    { id: 'STR 68591', titulo: 'Tela de Cálculo', prazoContratual: 38, prazoReal: 19, status: 'Antecipado', reaberturas: 0, categoria: 'Melhoria' },
    { id: 'STR 68592', titulo: 'Índice Rubricas Pensão', prazoContratual: 23, prazoReal: 25, status: 'Entregue com Atraso', reaberturas: 0, categoria: 'Melhoria', justificativaAtraso: 'Dependência Cliente' },
    { id: 'STR 68599', titulo: 'Grid - Localizar Aplicações', prazoContratual: 20, prazoReal: 20, status: 'No Prazo', reaberturas: 4, categoria: 'Melhoria', naturezaReabertura: 'Mudança de Escopo' },
    { id: 'STR 68602', titulo: 'Verificador eSocial', prazoContratual: 55, prazoReal: null, status: 'Em Desenvolvimento', reaberturas: 0, categoria: 'Desenvolvimento' },
    { id: 'STR 68605', titulo: 'eSocial S-1200', prazoContratual: 30, prazoReal: null, status: 'Aguardando Cliente', reaberturas: 0, categoria: 'Integração' },
    { id: 'STR 68608', titulo: 'Licença Prêmio (Lei 18.100/2024)', prazoContratual: 50, prazoReal: 47, status: 'Antecipado', reaberturas: 0, categoria: 'Melhoria' },
    { id: 'STR 68610', titulo: 'Gerador de Arquivo Bancário', prazoContratual: 30, prazoReal: 34, status: 'Entregue com Atraso', reaberturas: 0, categoria: 'Melhoria', justificativaAtraso: 'Mudança de Escopo' },
    { id: 'STR 68611', titulo: 'Alteração da GLIEP dos PMs e GCMs', prazoContratual: 30, prazoReal: 70, status: 'Entregue com Atraso', reaberturas: 0, categoria: 'Melhoria', justificativaAtraso: 'Dependência Cliente' },
    { id: 'STR 68614', titulo: 'Cálculo Individualizado de Benefícios', prazoContratual: 30, prazoReal: 71, status: 'Entregue com Atraso', reaberturas: 1, categoria: 'Desenvolvimento', justificativaAtraso: 'Dependência Cliente' },
    { id: 'STR 68616', titulo: 'Botão de Excluir em Cálculo de Benefícios', prazoContratual: 25, prazoReal: 31, status: 'Entregue com Atraso', reaberturas: 0, categoria: 'Melhoria', justificativaAtraso: 'Causa Interna' },
    { id: 'STR 68617', titulo: 'Incluir Aba de Exceções', prazoContratual: 30, prazoReal: 91, status: 'Entregue com Atraso', reaberturas: 1, categoria: 'Melhoria', justificativaAtraso: 'Dependência Cliente', naturezaReabertura: 'Bug' },
    { id: 'STR 68699', titulo: 'Adições à Tela de Favoritos', prazoContratual: 30, prazoReal: 27, status: 'Antecipado', reaberturas: 2, categoria: 'Melhoria', naturezaReabertura: 'Mudança de Escopo' },
    { id: 'STR 68700', titulo: 'Interface Grupos de Cálculo', prazoContratual: 25, prazoReal: null, status: 'Aguardando Aceite', reaberturas: 0, categoria: 'Melhoria' },
    { id: 'STR 68735', titulo: 'Agrupamento de Relatórios no Gerador', prazoContratual: 30, prazoReal: 31, status: 'Entregue com Atraso', reaberturas: 1, categoria: 'Melhoria', justificativaAtraso: 'Ambiente Cliente', naturezaReabertura: 'Refinamento/Escopo' },
    { id: 'STR 68736', titulo: 'Controle de Acesso a Relatórios', prazoContratual: 66, prazoReal: null, status: 'Em Desenvolvimento', reaberturas: 1, categoria: 'Desenvolvimento', naturezaReabertura: 'Refinamento/Escopo' },
    { id: 'STR 68758', titulo: 'Cálculo de Encargos e Férias', prazoContratual: 14, prazoReal: 28, status: 'Entregue com Atraso', reaberturas: 0, categoria: 'Melhoria', justificativaAtraso: 'Mudança de Escopo' },
    { id: 'STR 68759', titulo: 'Assinatura em Relatório de Licença', prazoContratual: 30, prazoReal: 12, status: 'Antecipado', reaberturas: 1, categoria: 'Melhoria', naturezaReabertura: 'Ajuste Fino' },
    { id: 'STR 68760', titulo: 'Relatório de Membros de Comitê', prazoContratual: 30, prazoReal: 23, status: 'Antecipado', reaberturas: 0, categoria: 'Desenvolvimento' },
    { id: 'STR 68762', titulo: 'Benefício Nutricional para Aposentados', prazoContratual: 25, prazoReal: null, status: 'Em Desenvolvimento', reaberturas: 0, categoria: 'Desenvolvimento' },
    { id: 'STR 68763', titulo: 'Unificação de Cálculo de Benefícios', prazoContratual: 100, prazoReal: 112, status: 'Entregue com Atraso', reaberturas: 0, categoria: 'Desenvolvimento', justificativaAtraso: 'Complexidade Técnica' },
    { id: 'STR 68766', titulo: 'Relatório de Participação em Comitês', prazoContratual: 30, prazoReal: null, status: 'Aguardando Aceite', reaberturas: 2, categoria: 'Desenvolvimento', naturezaReabertura: 'Bug' },
    { id: 'STR 68768', titulo: 'Views para Controle de Comitês', prazoContratual: 30, prazoReal: 21, status: 'Antecipado', reaberturas: 1, categoria: 'Desenvolvimento', naturezaReabertura: 'Suporte/Configuração' },
    { id: 'STR 68769', titulo: 'Novo Layout do Arquivo de VA', prazoContratual: 30, prazoReal: 108, status: 'Entregue com Atraso', reaberturas: 0, categoria: 'Melhoria', justificativaAtraso: 'Causa Interna' },
    { id: 'STR 68858', titulo: 'Arquivo Bancário - Outros Bancos', prazoContratual: 80, prazoReal: null, status: 'Aguardando Aceite', reaberturas: 0, categoria: 'Desenvolvimento' },
    { id: 'STR 68957', titulo: 'Ajustes em Relatório (Integração SOF)', prazoContratual: 15, prazoReal: 14, status: 'No Prazo', reaberturas: 2, categoria: 'Melhoria', naturezaReabertura: 'Bug' },
    { id: 'STR 68959', titulo: 'Assinatura em Declarações de Estágio', prazoContratual: 15, prazoReal: 44, status: 'Entregue com Atraso', reaberturas: 1, categoria: 'Melhoria', justificativaAtraso: 'Mudança de Escopo' },
    { id: 'STR 69259', titulo: 'Filtro de Simulações (Envio eSocial)', prazoContratual: 30, prazoReal: 31, status: 'Entregue com Atraso', reaberturas: 3, categoria: 'Melhoria', justificativaAtraso: 'Mudança de Escopo', naturezaReabertura: 'Bug' },
  ].sort((a, b) => a.id.localeCompare(b.id));

  // --- Cálculos para os Gráficos e KPIs ---

  const totalChamados = chamados.length;
  const chamadosFinalizados = chamados.filter(c => c.status === 'Antecipado' || c.status === 'No Prazo' || c.status === 'Entregue com Atraso');
  const chamadosEmAndamento = totalChamados - chamadosFinalizados.length;
  const entregasNoPrazoOuMelhor = chamados.filter(c => c.status === 'Antecipado' || c.status === 'No Prazo').length;
  const taxaSucessoPrazo = Math.round((entregasNoPrazoOuMelhor / chamadosFinalizados.length) * 100);

  const performanceEntrega = [
    { name: 'Antecipado', value: chamados.filter(c => c.status === 'Antecipado').length, fill: '#22c55e' },
    { name: 'No Prazo', value: chamados.filter(c => c.status === 'No Prazo').length, fill: '#3b82f6' },
    { name: 'Atraso Justificado', value: chamados.filter(c => c.status === 'Entregue com Atraso' && c.justificativaAtraso !== 'Causa Interna').length, fill: '#f97316' },
    { name: 'Atraso Interno', value: chamados.filter(c => c.status === 'Entregue com Atraso' && c.justificativaAtraso === 'Causa Interna').length, fill: '#ef4444' },
  ];
  
  const contagemCategorias = chamados.reduce((acc, c) => {
    acc[c.categoria] = (acc[c.categoria] || 0) + 1;
    return acc;
  }, {});
  const dadosCategorias = Object.keys(contagemCategorias).map(cat => ({ name: cat, value: contagemCategorias[cat] }));
  
  const contagemJustificativas = chamados.filter(c => c.justificativaAtraso).reduce((acc, c) => {
    acc[c.justificativaAtraso] = (acc[c.justificativaAtraso] || 0) + 1;
    return acc;
  }, {});
  const dadosJustificativas = Object.keys(contagemJustificativas).map((key, index) => ({
    name: key,
    value: contagemJustificativas[key],
    fill: ['#fb923c', '#fcd34d', '#a78bfa', '#f87171'][index % 4],
  }));

  const contagemReaberturas = chamados.filter(c => c.naturezaReabertura).reduce((acc, c) => {
    acc[c.naturezaReabertura] = (acc[c.naturezaReabertura] || 0) + 1;
    return acc;
  }, {});
  const dadosNaturezaReaberturas = Object.keys(contagemReaberturas).map((key, index) => ({
    name: key,
    value: contagemReaberturas[key],
    fill: ['#60a5fa', '#818cf8', '#c084fc', '#a3e635'][index % 4],
  }));


  const SideBar = () => (
    <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
      <div className="p-6">
        <h2 className="text-2xl font-bold">Análise CMSP</h2>
      </div>
      <nav className="mt-6">
        <ul>
          <MenuItem icon={LayoutDashboard} label="Dashboard Executivo" view="dashboard" />
          <MenuItem icon={Clock} label="Análise de Prazos" view="prazos" />
          <MenuItem icon={ShieldCheck} label="Análise de Qualidade" view="qualidade" />
          <MenuItem icon={List} label="Lista de Projetos" view="lista" />
        </ul>
      </nav>
    </aside>
  );

  const MenuItem = ({ icon: Icon, label, view }) => (
    <li>
      <button
        onClick={() => setActiveView(view)}
        className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${activeView === view ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}
      >
        <Icon className="h-5 w-5 mr-3" />
        <span>{label}</span>
      </button>
    </li>
  );

  const KpiCard = ({ title, value, icon: Icon, color, subtitle }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center">
        <div className={`p-3 rounded-full mr-4 ${color.bg}`}>
          <Icon className={`h-6 w-6 ${color.text}`} />
        </div>
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
          {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard': return <DashboardView />;
      case 'prazos': return <PrazosView />;
      case 'qualidade': return <QualidadeView />;
      case 'lista': return <ListaView />;
      default: return <DashboardView />;
    }
  };

  const DashboardView = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <KpiCard title="Total de Projetos" value={totalChamados} icon={BarChart3} color={{bg: 'bg-blue-100', text: 'text-blue-600'}} />
        <KpiCard title="Projetos em Andamento" value={chamadosEmAndamento} icon={Zap} color={{bg: 'bg-yellow-100', text: 'text-yellow-600'}} />
        <KpiCard title="Taxa de Sucesso no Prazo" value={`${taxaSucessoPrazo}%`} icon={Target} color={{bg: 'bg-green-100', text: 'text-green-600'}} subtitle={`${entregasNoPrazoOuMelhor} de ${chamadosFinalizados.length} projetos finalizados`} />
        <KpiCard title="Total de Reaberturas" value={chamados.reduce((a, b) => a + b.reaberturas, 0)} icon={AlertCircle} color={{bg: 'bg-orange-100', text: 'text-orange-600'}} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Performance de Entrega (Projetos Finalizados)">
          <PieChart>
            <Pie data={performanceEntrega} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={({ name, value }) => `${name}: ${value}`}>
              {performanceEntrega.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ChartCard>
        <ChartCard title="Foco do Cliente (Categorias)">
            <BarChart data={dadosCategorias} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" name="Nº de Chamados" />
            </BarChart>
        </ChartCard>
        <ChartCard title="Causas dos Atrasos">
             <RadialBarChart innerRadius="30%" outerRadius="100%" data={dadosJustificativas} startAngle={180} endAngle={0} cy="70%">
                <PolarAngleAxis type="number" domain={[0, 15]} angleAxisId={0} tick={false} />
                <RadialBar background dataKey="value" angleAxisId={0} data={dadosJustificativas} />
                <Tooltip />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
            </RadialBarChart>
        </ChartCard>
         <ChartCard title="Natureza das Reaberturas">
            <RadialBarChart innerRadius="30%" outerRadius="100%" data={dadosNaturezaReaberturas} startAngle={180} endAngle={0} cy="70%">
                <PolarAngleAxis type="number" domain={[0, 15]} angleAxisId={0} tick={false} />
                <RadialBar background dataKey="value" angleAxisId={0} data={dadosNaturezaReaberturas} />
                <Tooltip />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
            </RadialBarChart>
        </ChartCard>
      </div>
    </>
  );
  
  const PrazosView = () => (
     <div className="space-y-6">
        <ChartCard title="Comparativo de Prazos (Contratual vs. Real)">
             <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chamadosFinalizados.map(c => ({name: c.id.replace('STR ', ''), Contratual: c.prazoContratual, Real: c.prazoReal}))}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Contratual" fill="#3b82f6" />
                  <Bar dataKey="Real" fill="#ef4444" />
                </BarChart>
            </ResponsiveContainer>
        </ChartCard>
         <ChartCard title="Análise de Atrasos">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Chamado</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Atraso (dias)</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Justificativa</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {chamados.filter(c=> c.status === 'Entregue com Atraso').map(c => (
                      <tr key={c.id}>
                        <td className="px-4 py-2 whitespace-nowrap text-sm">{c.id}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm">{c.prazoReal - c.prazoContratual}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm">{c.justificativaAtraso || 'N/A'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
        </ChartCard>
     </div>
  );
  
  const QualidadeView = () => (
      <div className="space-y-6">
        <ChartCard title="Reaberturas por Projeto">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chamados.filter(c => c.reaberturas > 0).map(c => ({name: c.id.replace('STR ', ''), Reaberturas: c.reaberturas}))}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Reaberturas" fill="#f97316" />
                </BarChart>
            </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Análise da Natureza das Reaberturas">
            <div className="overflow-x-auto">
                 <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Chamado</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Reaberturas</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Natureza Principal</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {chamados.filter(c=> c.reaberturas > 0).map(c => (
                      <tr key={c.id}>
                        <td className="px-4 py-2 whitespace-nowrap text-sm">{c.id}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm">{c.reaberturas}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm">{c.naturezaReabertura || 'Não Classificada'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
        </ChartCard>
    </div>
  );

  const ListaView = () => (
     <ChartCard title="Lista Detalhada de Todos os Projetos">
         <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">ID</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">Título</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">Categoria</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">Prazo Real/Cont.</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">Reaberturas</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {chamados.map(c => (
                      <tr key={c.id}>
                        <td className="px-4 py-2 whitespace-nowrap font-medium">{c.id}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{c.titulo}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{c.categoria}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{c.status}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{c.prazoReal ? `${c.prazoReal}/${c.prazoContratual}`: `-/${c.prazoContratual}`}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{c.reaberturas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
     </ChartCard>
  );

  const ChartCard = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        {children}
      </ResponsiveContainer>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <SideBar />
      <main className="flex-1 p-8 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}
