import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import Notification, { type } from '../../../../shared/toast/Toast'
import { fetchAddCustomer } from '../../../../store/addCustomer'

interface Props {
    setAddModal: Function,
    fetchGetData: () => void,
}

const AddCustomerModal: React.FC<Props> = ({setAddModal, fetchGetData}) => {

    const dispatch = useDispatch()

    const [data, setData] = useState({
        name: '',
        lastname: '',
        birthdate: '',
        gender: 1,
    })
    const {name, lastname, birthdate, gender} = data

    const onChangeInputs = (e:any) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    };

    const callback : any = () => {
        setAddModal(false)
        Notification(type.success, "Cliente agregado correctamente!")
    }

    const handleSubmitAdd = async (e: FormEvent) => {
        e.preventDefault()
        await dispatch(fetchAddCustomer(data, callback))
        fetchGetData()
    }

    const dateNow = () => {
        var now = new Date(),
        maxDate = now.toISOString().substring(0,10);  
        return maxDate
    }

    return (
        <form onSubmit={handleSubmitAdd}>
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
                <button type="button" onClick={() => setAddModal(false)}> Cancelar </button>
                <button type="submit"> Agregar </button>
            </div>
        </form>
    )
}

export default AddCustomerModal
