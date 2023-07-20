import { Formik } from 'formik';
import validateRegisterForm from './validateForm';

const FormHandling = () => {

    const handleFormSubmit = (values) => alert(JSON.stringify(values))

return(
    <Formik
        initialValues={{
            username: '',
            email: '',
            phone: '',
            message: ''
        }}
        validateOnBlur={false}
        onSubmit={handleFormSubmit}
        validationSchema={validateRegisterForm}
        validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
    >
        {({handleSubmit, values, errors, handleChange, handleBlur}) =>(
            <>
                <div>
                    <label>Name</label>
                    <input type="text" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={handleChange} value={values.email}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <label>Phone</label>
                    <input type="text" name="phone" onChange={handleChange} value={values.phone}/>
                    {errors.phone && <p>{errors.phone}</p>}
                </div>

                <div>
                    <label>Message</label>
                    <input type="text" name="message" onChange={handleChange} value={values.message}/>
                </div>

                <button onClick={handleSubmit}>Submit</button>
            </>
            
        )
        }

    </Formik>
)

}

export default FormHandling