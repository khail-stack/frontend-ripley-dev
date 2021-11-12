import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Customer } from '../../../../services/customer'
import Notification, { type } from '../../../../shared/toast/Toast'
import { fetchUpdateCustomer } from '../../../../store/updateCustomer'

interface Props {
    setEditModal : Function,
    customer: Customer,
    fetchGetData: () => void
}
const EditCustomerModal: React.FC<Props> = ({setEditModal, customer, fetchGetData}) => {
    
    const dispatch = useDispatch()

    const [data, setData] = useState({
        name: customer.name,
        lastname: customer.lastname,
        birthdate: customer.birthdate,
        gender: customer.gender
    })

    const {name, lastname, birthdate, gender} = data

    const onChangeInputs = (e:any) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    };

    const callback : any = () => {
        setEditModal(false)
        Notification(type.success, "Cliente actualizado correctamente!")
    }

    const handleSubmitEdit = async (e: FormEvent) => {
        e.preventDefault()
        await dispatch(fetchUpdateCustomer(customer.id!, data, callback))
        fetchGetData()
    }

    const dateNow = () => {
        var now = new Date(),
        maxDate = now.toISOString().substring(0,10);  
        return maxDate
    }
    
    return (
        <form onSubmit={handleSubmitEdit}>
            <div>
                <label htmlFor="">
                    <p>Nombre:</p>
                    <input name="name" type="text" value={name} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label htmlFor="">
                    <p>Apellido:</p>
                    <input name="lastname" type="text" value={lastname} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label htmlFor="">
                    <p>Género:</p>
                    <select name="gender" value={gender} required onChange={onChangeInputs}>
                        <option value={1}>Masculino</option>
                        <option value={2}>Femenino</option>
                    </select>
                </label>
                <label htmlFor="">
                    <p>Fecha de nacimiento:</p>
                    <input name="birthdate" type="date" min="1950-12-31" max={dateNow()} value={birthdate} onChange={onChangeInputs} required autoComplete="off" />
                </label>
            </div>
            <div>
                <button type="button" onClick={() => setEditModal(false)}> Cancelar </button>
                <button type="submit"> Guardar </button>
            </div>
        </form>
    )
}

export default EditCustomerModal
