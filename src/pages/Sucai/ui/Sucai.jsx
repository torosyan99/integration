import React from 'react'
import SucaiAbout from '../../../widgets/SucaiAbout/ui/SucaiAbout'
import { Mission } from '../../../widgets/Mission'
import { MatrixTable } from '../../../widgets/MatrixTable'
import FinancialCod from '../../../widgets/FinancialCod/ui/FinancialCod'

const Sucai = () => {
  return (
    <>
    <SucaiAbout />
    <Mission />
    <MatrixTable />
    <FinancialCod />
    </>
  )
}

export default Sucai