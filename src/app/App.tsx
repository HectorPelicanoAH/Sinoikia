import { Route, Routes } from 'react-router-dom'
import { AppShell } from '../components/AppShell'
import { DiscoveryPage } from '../features/discovery/DiscoveryPage'
import { HomePage } from '../features/home/HomePage'
import { TerritoriesPage } from '../features/territories/TerritoriesPage'
import { MunicipalityPage } from '../features/municipalities/MunicipalityPage'
import { ContactPage } from '../features/contact/ContactPage'
import { LegalPage } from './LegalPage'
import { NotFoundPage } from './NotFoundPage'

export function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="pueblos" element={<TerritoriesPage />} />
        <Route path="descubrir" element={<DiscoveryPage />} />
        <Route path="municipios" element={<MunicipalityPage />} />
        <Route path="contacto" element={<ContactPage />} />
        <Route path="privacidad" element={<LegalPage type="privacy" />} />
        <Route path="terminos" element={<LegalPage type="terms" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
