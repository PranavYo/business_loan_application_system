"use client"
import React, { useState } from 'react'
import AppContext from './AppContext'

export default function AppState(props) {

  const host = "http://localhost:5000/"

  const [loanForm, setLoanForm] = useState({name: '', year: '', amount: ''})
  const [balanceSheet, setBalanceSheet] = useState([])
  const [loanStatus, setLoanStatus] = useState(20)

  const getBalanceSheet = async (provider) =>  {
    const url = `${host}api/balance-sheet/${provider}`
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const sheet = await response.json()
    setBalanceSheet(sheet)
  }

  return (
    <AppContext.Provider value={{loanForm, setLoanForm, balanceSheet, setBalanceSheet, getBalanceSheet, loanStatus, setLoanStatus}}>
        {props.children}
    </AppContext.Provider>
  )
}
