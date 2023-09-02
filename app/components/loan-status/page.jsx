import AppState from '@/app/context/AppState'
import React from 'react'
import LoanStatus from './LoanStatus'

export default function page() {
  return (
    <AppState>
      <LoanStatus />
    </AppState>
  )
}
