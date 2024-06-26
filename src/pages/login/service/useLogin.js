import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../config/request'

const useLogin = () => {
  return (
    useMutation({
        mutationFn:(data)=> request.post("/login",data).then((res) => res.data )
    })
  )
}

export default useLogin
