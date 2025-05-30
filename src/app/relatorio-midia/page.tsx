'use client';

import { useState } from 'react';
import Link from 'next/link';

const SideMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <>
      {/* Overlay para fechar o menu quando clicar fora */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Menu lateral */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4">
            {/* Links */}
            <div className="mb-6">
              <MenuItem icon="link" label="Links" />
              <MenuItem icon="ticket" label="Códigos Promocionais" />
              <MenuItem icon="layout" label="Criações De Mídia" />
              <MenuItem icon="target" label="Pixels" />
            </div>
            
            {/* ANÁLISE */}
            <div className="mb-6">
              <p className="text-xs text-gray-500 font-medium mb-2">ANÁLISE</p>
              <Link href="/relatorio-midia">
                <div className="flex items-center py-2 px-1 bg-gray-100 rounded">
                  <div className="w-6 mr-3">
                    <MenuIcon name="bar-chart" />
                  </div>
                  <span className="text-sm font-medium">Relatório De Mídia</span>
                </div>
              </Link>
              <MenuItem icon="users" label="Registros" />
              <MenuItem icon="activity" label="Registro De Pixels" />
            </div>
            
            {/* CONTA */}
            <div className="mb-6">
              <p className="text-xs text-gray-500 font-medium mb-2">CONTA</p>
              <MenuItem icon="settings" label="Configurações De Conta" />
              <MenuItem icon="credit-card" label="Detalhes De Pagamentos" />
            </div>
            
            {/* GERENCIAMENTO */}
            <div className="mb-6">
              <p className="text-xs text-gray-500 font-medium mb-2">GERENCIAMENTO</p>
              <MenuItem icon="dollar-sign" label="Pagamentos" />
              <MenuItem icon="check-circle" label="Acordos" />
              <MenuItem icon="log-in" label="Histórico De Login" />
            </div>
          </div>
          
          {/* Botão Deslogar */}
          <div className="p-4 border-t border-gray-200">
            <button className="w-full py-2 px-4 rounded-md bg-white border border-red-500 text-red-500 font-medium flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Deslogar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


const MenuItem = ({ icon, label }: { icon: string, label: string }) => {
  return (
    <div className="flex items-center py-2 px-1 hover:bg-gray-100 rounded">
      <div className="w-6 mr-3">
        <MenuIcon name={icon} />
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
};


const MenuIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'link':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      );
    case 'ticket':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 7v8.5A2.5 2.5 0 0 0 4.5 18H8"></path>
          <path d="M22 7v8.5a2.5 2.5 0 0 1-2.5 2.5H16"></path>
          <path d="M2 11v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1"></path>
          <path d="M11 18.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0Z"></path>
        </svg>
      );
    case 'layout':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" x2="21" y1="9" y2="9"></line>
          <line x1="9" x2="9" y1="21" y2="9"></line>
        </svg>
      );
    case 'target':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      );
    case 'bar-chart':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>
      );
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      );
    case 'activity':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      );
    case 'settings':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      );
    case 'credit-card':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <line x1="2" x2="22" y1="10" y2="10"></line>
        </svg>
      );
    case 'dollar-sign':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="2" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      );
    case 'check-circle':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      );
    case 'log-in':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10 17 15 12 10 7"></polyline>
          <line x1="15" x2="3" y1="12" y2="12"></line>
        </svg>
      );
    default:
      return null;
  }
};

// Componente para cada métrica do relatório
const MetricCard = ({ title, value, activeTab }: { title: string, value: string | number, activeTab: string }) => {
  // Calculando os valores
  const currentValue = typeof value === 'string' && value.includes('%') 
    ? parseFloat(value) 
    : typeof value === 'string' && value.includes(',') 
      ? parseFloat(value.replace(',', '')) 
      : Number(value);
  
  const previousValue = typeof value === 'string' && value.includes('%')
    ? (currentValue * 1.8).toFixed(2) + '%'
    : typeof value === 'string' && value.includes(',')
      ? (currentValue * 1.8).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
      : Math.round(currentValue * 1.8);
  
  const totalValue = typeof value === 'string' && value.includes('%')
    ? ((currentValue + parseFloat(previousValue as string)) / 2).toFixed(2) + '%'
    : typeof value === 'string' && value.includes(',')
      ? (currentValue + currentValue * 1.8).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
      : Math.round(currentValue + currentValue * 1.8);

  // Valor a ser exibido com base na aba ativa
  let displayValue = activeTab === 'atual' 
    ? value 
    : activeTab === 'anterior' 
      ? previousValue 
      : totalValue;

  // Convertendo valores monetários para o formato brasileiro
  if (typeof displayValue === 'string' && displayValue.includes(',') && !displayValue.includes('%')) {
    // Converte de 238,801.95 para 238.801,95
    const numericValue = parseFloat(displayValue.replace(',', ''));
    displayValue = numericValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <p className="text-gray-400 text-sm mb-2">{title}</p>
      <p className="text-2xl text-black text-center">{displayValue}</p>
    </div>
  );
};

export default function RelatorioMidia() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('atual');

  return (
    <main className="flex min-h-screen flex-col bg-[#f7f7f7] w-full md:max-w-4xl lg:max-w-5xl mx-auto">
      {/* Menu Lateral */}
      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      {/* Header */}
      <header className="bg-white py-3 px-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center">
          <button 
            className="mr-4"
            onClick={() => setMenuOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <h1 className="text-lg font-medium">Relatório de Mídia</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/" className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2"></path>
              <path d="M22 6v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6"></path>
              <path d="m2 6 10 7 10-7"></path>
            </svg>
          </Link>
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-medium">
            BR
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="p-4">
        {/* Barra de pesquisa */}
        <div className="flex mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="ID, search..."
              className="w-full px-3 py-2 pl-9 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
          <button className="ml-2 bg-gray-100 p-2 rounded-lg text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </button>
        </div>

        {/* Abas principais */}
        <div className="flex border-b mb-4 bg-white p-3 rounded-t-lg">
          <button 
            onClick={() => setActiveTab('atual')}
            className={`py-2 px-4 text-sm ${activeTab === 'atual' ? 'border-b-2 border-green-500 text-green-500 font-medium' : 'text-gray-500'}`}
          >
            Current Month
          </button>
          <button 
            onClick={() => setActiveTab('anterior')}
            className={`py-2 px-4 text-sm ${activeTab === 'anterior' ? 'border-b-2 border-green-500 text-green-500 font-medium' : 'text-gray-500'}`}
          >
            Previous Month
          </button>
          <button 
            onClick={() => setActiveTab('total')}
            className={`py-2 px-4 text-sm ${activeTab === 'total' ? 'border-b-2 border-green-500 text-green-500 font-medium' : 'text-gray-500'}`}
          >
            Total
          </button>
        </div>

        {/* Grid de métricas - 2 colunas conforme imagem */}
        <div className="grid grid-cols-2 gap-4 px-1">
          <MetricCard title="Visits (unique)" value="4532" activeTab={activeTab} />
          <MetricCard title="Registrations" value="4453" activeTab={activeTab} />
          
          <MetricCard title="FTD to Lead %" value="15.56%" activeTab={activeTab} />
          <MetricCard title="Deposits" value="1424" activeTab={activeTab} />
          
          <MetricCard title="Deposits amount" value="238,801.95" activeTab={activeTab} />
          <MetricCard title="FTDs" value="693" activeTab={activeTab} />
          
          <MetricCard title="FTDs amount" value="21,381.02" activeTab={activeTab} />
          <MetricCard title="CPA" value="0" activeTab={activeTab} />
          
          <MetricCard title="RevShare" value="0" activeTab={activeTab} />
          <MetricCard title="Commissions" value="0" activeTab={activeTab} />
          
          <MetricCard title="Adjustments" value="0" activeTab={activeTab} />
          <MetricCard title="Payments" value="0" activeTab={activeTab} />
          
          <MetricCard title="Balance" value="0" activeTab={activeTab} />
          <MetricCard title="Activities count" value="317,825" activeTab={activeTab} />
        </div>

        {/* Footer */}
        <footer className="text-xs text-gray-400 text-center mt-6 pb-4">
          © admin.affl-tron.bet br • Privado
        </footer>
      </div>
    </main>
  );
} 