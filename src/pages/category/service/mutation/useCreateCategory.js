import { useMutation, useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"


const useCreateCategory = () => {
  return useMutation({
    mutationFn:(data) => request.post('/category',data).then((res)=> res.data)
  })
}

export default useCreateCategory
