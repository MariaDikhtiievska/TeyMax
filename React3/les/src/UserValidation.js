import * as yup from 'yup'

export const userShema = yup.object().shape({
  
    email: yup.string().email().required()
})