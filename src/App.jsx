import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cases from './pages/Cases'
import CaseDetails from './pages/CaseDetails'
import Report from './pages/Report'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
export default function App(){return <><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/cases" element={<Cases/>}/><Route path="/cases/:id" element={<CaseDetails/>}/><Route path="/report" element={<Report/>}/><Route path="/login" element={<Login/>}/><Route path="/dashboard" element={<Dashboard/>}/></Routes></main><footer className="bg-ink px-5 py-9 text-center text-sm text-slate-300">TRACE · Connecting communities to bring people home safely.</footer></>}
