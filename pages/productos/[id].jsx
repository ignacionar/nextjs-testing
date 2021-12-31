import React from 'react'
import { useRouter } from 'next/router'

const Producto = () => {

  const router = useRouter();
  const {id} = router.query

  return (
    <div>
      <h1>Hola producto {id}</h1>
    </div>
  )
}

export default Producto

