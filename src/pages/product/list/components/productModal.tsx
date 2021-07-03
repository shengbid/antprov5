import React from 'react'
import { Modal } from 'antd'
import ProductInfo from '@/components/ProductInfo'

export type productProps = {
  modalVisible: boolean
  infoData?: any
  onCancel: () => void
}

const ProductModal = ({modalVisible, infoData, onCancel}: productProps) => {

  const onSubmit = () => {

  }

  return (
    <Modal
      title='产品信息'
      width={1000}
      visible={modalVisible}
      onOk={onSubmit}
      onCancel={onCancel}
    >
      <ProductInfo infoData={infoData} />
    </Modal>
  )
}

export default ProductModal