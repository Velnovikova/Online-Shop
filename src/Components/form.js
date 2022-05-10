import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import '../css/Form.css'

export default function ModalButton() {
    const [isModalVisible, setIsModalVisible] = useState('invisible');
    const modalClick = () => {
        setIsModalVisible('visible');
    }
    const handleOk = () => {
        setIsModalVisible('invisible')
    }
    const handleCancel = () => {
        setIsModalVisible('invisible')
    }
    const { register, formState: { errors, }, handleSubmit, reset, } = useForm({
        mode: "onBlur"
    });
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }
    return (
        <div><button type='primary' onClick={modalClick} className='order-button'>Confirm the order</button>
            <div className={isModalVisible}>
                <h3>Оформление заказа</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="order-form">
                    <label>
                        Имя:
                        <input
                            {...register('firstName', {
                                required: "Поле обязательно к заполнению",
                            })} />
                    </label>
                    <div>
                        {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
                    </div>
                    <label>
                        Фамилия:
                        <input
                            {...register('secondName',)} />

                    </label>
                    <label>
                        Адрес доставки:
                        <input
                            {...register('adress', {
                                required: "Поле обязательно к заполнению",
                            })} />
                    </label>
                    <div>
                        {errors?.adress && <p>{errors?.adress?.message || "Error!"}</p>}
                    </div>
                    <label>
                        Номер телефона:
                        <InputMask mask="+7\(999) 999-99-99" maskChar=" "
                            {...register('number', {
                                required: "Поле обязательно для заполнения",
                            })} />
                    </label>
                    <div>
                        {errors?.number && <p>{errors?.number?.message || "Error!"}</p>}
                    </div>
                    <div className='button-group'>
                        <button type='submit' className="modal-button" onClick={handleOk}>Отправить</button>
                        <button className="modal-button" onClick={handleCancel}>Отмена</button>
                    </div>
                </form>
            </div>
        </div>
    )
}