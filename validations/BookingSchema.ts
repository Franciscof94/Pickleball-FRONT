import * as Yup from "yup";



export const BookingSchema = Yup.object({
    dateAndTime: Yup.string().required(''),
    shiftCancel: Yup.string(),
    name: Yup.string().required('The name is required'),
    lastName: Yup.string().required('the last name is required'),
    email: Yup.string().email().required('the email is required'),
    numberOne: Yup.string().required("El campo es obligatorio").matches(/^[a-zA-Z0-9]*$/, 'carácter invalida'),
    numberTwo: Yup.string().required("El campo es obligatorio").matches(/^[a-zA-Z0-9]*$/, 'carácter invalida'),
    numberThree: Yup.string().required("El campo es obligatorio").matches(/^[a-zA-Z0-9]*$/, 'carácter invalida'),
    numberFour: Yup.string().required("El campo es obligatorio").matches(/^[a-zA-Z0-9]*$/, 'carácter invalida'),
    numberFive: Yup.string().required("El campo es obligatorio").matches(/^[a-zA-Z0-9]*$/, 'carácter invalida'),
    numberSix: Yup.string().required("El campo es obligatorio").matches(/^[a-zA-Z0-9]*$/, 'carácter invalida'),

})