import * as yup from 'yup'

const validateRegisterForm = yup.object().shape({
    username: yup.string().required(),
    phone: yup.string().required(),
    message:yup.string().required(),
})

export default validateRegisterForm