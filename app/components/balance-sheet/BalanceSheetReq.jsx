"use client"
import React, { useContext, useEffect } from 'react'
import './BalanceSheet.scss'
import AppContext from '@/app/context/AppContext'
import { useRouter } from 'next/navigation'

export default function BalanceSheetReq() {

  const router = useRouter();

  const {balanceSheet, getBalanceSheet} = useContext(AppContext);
  

  const balanceSheetProviders = [
    {
      id: 'xero',
      name: 'Xero'
    },
    {
      id: 'myob',
      name: 'MYOB'
    }
  ];

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    if(selectedOption === 'default' || selectedOption === 'moreInFuture') return;

    getBalanceSheet(selectedOption);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let sumAssetValue = 0;
    let sumProfitOrLoss = 0;

    if(balanceSheet.length === 0) return;

    balanceSheet.forEach((item) => {
      sumAssetValue += item.assetsValue;
      sumProfitOrLoss += item.profitOrLoss;
    })

    const avgAssetValue = sumAssetValue / balanceSheet.length;

    console.log(avgAssetValue, sumAssetValue);

    const loanForm = JSON.parse(localStorage.getItem('loanFormData'))
    if(!loanForm) return;

    if(avgAssetValue > parseInt(loanForm.amount)) localStorage.setItem('approved_amount', 100);
    else if(sumProfitOrLoss > 0) localStorage.setItem('approved_amount', 60);
    else localStorage.setItem('approved_amount', 20);

    router.push('/components/loan-status')
  }

  return (
    <div className='container'>
      <form className="form-container-balance-sheet" onSubmit={handleSubmit}>
        <span className='heading'>Fetch your balance sheet</span>
        <div className="accounting-provider-container">
          <select name="balanceSheetProvider" id="balanceSheetProvider" defaultValue={"default"} onChange={handleSelectChange}>
            <option value="default" disabled>Select your accounting provider</option>
            {
              balanceSheetProviders.map((item, index) => {
                return (
                  <option key={index} value={item.id}>{item.name}</option>
                )
              })
            }
            <option value="moreInFuture" disabled>More in future</option>
          </select>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>SI No.</th>
                <th>Year</th>
                <th>Month</th>
                <th>Profit/Loss</th>
                <th>Asset value</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr> */}
              {
                balanceSheet.length === 0 &&
                <tr>
                  <td className='no-display-data' colSpan={5}>No data to display</td>
                </tr>
              }
              {
                balanceSheet.length > 0 &&
                balanceSheet.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className='display-data'>{index+1}</td>
                      <td className='display-data'>{item.year}</td>
                      <td className='display-data'>{item.month}</td>
                      <td className='display-data'>{item.profitOrLoss}</td>
                      <td className='display-data'>{item.assetsValue}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <button 
          type='submit'
          disabled={balanceSheet.length === 0}
          style={{opacity: (balanceSheet.length === 0) ? '0.5' : '1'}}
          className='btn confirm-btn'
        >
          Submit Application
        </button>
      </form>
    </div>
  )
}
