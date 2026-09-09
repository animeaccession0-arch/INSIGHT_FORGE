import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import DataUploader from './components/DataUploader'
import DataTable from './components/DataTable'
import ChartControls from './components/ChartControls'
import ChartRenderer from './components/ChartRenderer'
import InsightPanel from './components/InsightPanel'
import ExportPanel from './components/ExportPanel'
import HeritageQCPanel from './modules/heritage-qc/HeritageQCPanel'
import ReviewsPanel from './modules/admin-reviews/ReviewsPanel'
import AdminPanel from './modules/admin-reviews/AdminPanel'
import { useData } from './hooks/useData'
import { useAnalysis } from './hooks/useAnalysis'
import { ChartType } from './types/charts'
import './styles/globals.css'
import ProductPanel from './modules/product-inspection/ProductPanel'
import PredictivePanel from './modules/predictive-vending/PredictivePanel'
import AcademicPanel from './modules/academic-inbound/AcademicPanel'
import LanguageLabPanel from './modules/language-lab/LanguageLabPanel'
function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeModule, setActiveModule] = useState('dashboard')
  const [selectedColumn, setSelectedColumn] = useState('')
  const [chartType, setChartType] = useState<ChartType>('bar')

  const { data, headers, fileName, hasData, loadFile, isLoading, error } = useData()
  const { basicStats, insights, numericColumns } = useAnalysis(data, headers)

  // Auto-select first numeric column
  React.useEffect(() => {
    if (numericColumns.length > 0 && !selectedColumn) {
      setSelectedColumn(numericColumns[0])
    }
  }, [numericColumns, selectedColumn])

  const handleFileLoaded = async (file: File) => {
    await loadFile(file)
    setActiveModule('dashboard')
  }

  const renderContent = () => {
    switch (activeModule) {
      case 'dashboard':
        return (
          <Dashboard
            hasData={hasData}
            onUploadClick={() => setActiveModule('upload')}
          />
        )
      case 'upload':
        return <DataUploader onFileLoaded={(d, h, name) => {
          // fallback if needed
        }} />
      case 'analysis':
        return hasData ? (
          <div>
            <h2 className="page-title">Data Analysis</h2>
            <DataTable data={data} headers={headers} />
          </div>
        ) : <Dashboard hasData={false} onUploadClick={() => setActiveModule('upload')} />
      case 'charts':
        return hasData ? (
          <div>
            <h2 className="page-title">Charts</h2>
            <ChartControls
              columns={numericColumns}
              selectedColumn={selectedColumn}
              chartType={chartType}
              onColumnChange={setSelectedColumn}
              onChartTypeChange={setChartType}
            />
            <ChartRenderer data={data} column={selectedColumn} chartType={chartType} />
          </div>
        ) : <Dashboard hasData={false} onUploadClick={() => setActiveModule('upload')} />
      case 'insights':
        return <InsightPanel insights={insights} />
      case 'heritage-qc':
        return <HeritageQCPanel data={data} headers={headers} />
      case 'reviews':
        return <ReviewsPanel />
      case 'admin':
        return <AdminPanel />
      case 'export':
        return <ExportPanel data={data} headers={headers} fileName={fileName} insights={insights} />
      default:
        return <Dashboard hasData={hasData} onUploadClick={() => setActiveModule('upload')} />
    case 'product':
      return <ProductPanel data={data} headers={headers} />
    case 'predictive':
      return <PredictivePanel data={data} headers={headers} />
    case 'academic':
      return <AcademicPanel data={data} headers={headers} />
    case 'language-lab':
      return <LanguageLabPanel />
    }
  }

  return (
    <div className="app">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="main-layout">
        <Sidebar
          isOpen={sidebarOpen}
          activeModule={activeModule}
          onModuleChange={setActiveModule}
        />
        <main className="content">
          {isLoading && <p>Loading...</p>}
          {error && <p className="error-text">{error}</p>}
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App
