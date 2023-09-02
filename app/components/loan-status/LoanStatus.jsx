"use client"
import AppContext from '@/app/context/AppContext'
import { useEffect, useState } from 'react';
import './LoanStatus.scss'

export default function LoadStatus() {

  const [approved_amount, setApproved_amount] = useState(20)

  useEffect(() => {
    const amount = localStorage.getItem('approved_amount');
    if(amount) setApproved_amount(amount)
  }, [])
  
  return (
    <div className='container'>
      <div className="inner-container">
        <div className="header">Loan Application Status</div>
        <div className="container-0 text">Dear customer,</div>
        <div className="container-1 text">Your loan has been approved.</div>
        {approved_amount !== 100 && <div className="container-2 text">According to our company policy, we have approved <span className='bold'>{approved_amount}%</span> of the requested amount.</div> }
        <div className="container-3 text">Amount will be credited in your account in 3-5 business days.</div>
        <div className="container-4 text">Thank you.</div>
      </div>
    </div>
  )
}
