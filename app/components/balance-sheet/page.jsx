import React from 'react'
import BalanceSheetReq from './BalanceSheetReq'
import AppState from '@/app/context/AppState'

export default function page() {
  return (
    <AppState>
      <BalanceSheetReq />
    </AppState>
  )
}
