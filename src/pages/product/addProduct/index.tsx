import React from 'react'
import ProductInfo from '@/components/ProductInfo'
import { Button } from 'antd'
import { history } from 'umi'

const formInput = () => {

  return (
    <div>
      <p>
      <Button type="primary" onClick={()=>{
        history.goBack()
      }}>返回 </Button>
      </p>
      <ProductInfo />
      <Button type="primary">保存 </Button>
    </div>
  )
}

export default formInput