"use client"
import { useContext, useEffect } from 'react'
import './BusinessDetailsForm.scss'
import { useRouter } from 'next/navigation'
import AppContext from '@/app/context/AppContext'

export default function BusinessDetailsForm() {

  const router = useRouter()

  const {loanForm, setLoanForm} = useContext(AppContext)

  useEffect(() => {
    const savedFormData = localStorage.getItem('loanFormData');
    if (savedFormData) {
      setLoanForm(JSON.parse(savedFormData));
    }
  }, [])
  

  useEffect(() => {
    localStorage.setItem('loanFormData', JSON.stringify(loanForm));
  }, [loanForm])

  const handleOnChange = (e) => {
    setLoanForm({ ...loanForm, [e.target.name]: e.target.value })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    router.push('/components/balance-sheet')
  }

  return (
    <div className="mt-[10vh] h-[90%] w-[100%]" style={{maxWidth: '550px', margin: 'auto'}}>
      <div className='d-flex items-center flex-col gap-[3rem]'>
        <form onSubmit={handleOnSubmit} className="p-[1rem] bg-white form-container">
          <span className="section-header mb-4">Load Application Form</span>
          <div className="mb-3 w-[100%]">
            <label htmlFor="businessName" className="form-label">Business Name <span className='text-danger'>*</span> </label>
            <input type="text" name='name' value={loanForm.name} onChange={handleOnChange} className="form-control" id="businessName" required autoComplete='off'/>
          </div>
          <div className="mb-3 w-[100%]">
            <label htmlFor="yearOfEstablishment" className="form-label">Year of Establishment <span className='text-danger'>*</span> </label>
            <input type="number" name='year' value={loanForm.year} onChange={handleOnChange} className="form-control" id="yearOfEstablishment" required />
          </div>
          <div className="mb-3 w-[100%]">
            <label htmlFor="loanAmount" className="form-label">Loan Amount <span className='text-danger'>*</span> </label>
            <input type="number" min={100} max={100000} name='amount' value={loanForm.amount} onChange={handleOnChange} className="form-control" id="loanAmount" required />
          </div>
          
          <button type="submit" className="submit-btn">Proceed</button>
        </form>
      </div>
    </div>
  )
}
