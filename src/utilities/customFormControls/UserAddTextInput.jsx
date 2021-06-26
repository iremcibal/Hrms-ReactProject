import { useField } from 'formik'
import React from 'react'
import { FormField } from 'semantic-ui-react'


export default function UserAddTextInput({...props}) {

    const[field,meta] = useField(props)

    
    return (
        <FormField>
            <input {...field} {...props}/>
            {meta.touched && !!meta.error ? (
                 <div className="input-feedback">{meta.error}</div>
            ):null}
        </FormField>
    )
}
