import React, {useState} from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import '../../assets/scss/Forms.scss'
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import {Formik, useFormik} from 'formik';

const Forms = () => {
    const dropdownOptions1 = [{role: 'Клиент', value: 1},
                            {role: 'Сотрудник офиса', value: 2},
                            {role: 'Менеджер по продажам', value: 3}]
    const minDateValue = new Date(2022, 0, 1);
    const maxDateValue = new Date()
    const formik = useFormik({
        initialValues: {
            Login: '',
            Password: '',
            PasswordRepeat: '',
            Role: '',
            Date: '',
            Agreement: false,
        },
        onSubmit: () => {console.log(formik.values)},
    })
    return (
        <form className="formContainer" onSubmit={formik.handleSubmit}>
            <div className="inputGroup">
                <InputText id="Login" placeholder="Логин" keyfilter="alphanum" size="32" maxLength="32" required  onChange={formik.handleChange} value={formik.values.Login} />
            </div>
            <div className="inputGroup">
                <Password id="Password" name="Password"  className="passwordGroup" keyfilter="alphanum" required  placeholder="Пароль"   onChange={formik.handleChange} value={formik.values.Password} toggleMask  promptLabel="Введите сложный пароль" weakLabel="Слабый пароль" mediumLabel="Средний пароль" strongLabel="Сложный пароль" />
            </div>
            <div className="inputGroup">
                <Password id="PasswordRepeat"  name="PasswordRepeat"   className="passwordGroup" keyfilter="alphanum" placeholder="Повторите пароль"  required onChange={formik.handleChange} value={formik.values.PasswordRepeat} feedback={false} toggleMask />
            </div>
            <div className="dropdownGroup">
                <Dropdown id="Role" name="Role" showClear filter   onChange={formik.handleChange} value={formik.values.Role}  required options={dropdownOptions1} optionLabel="role" placeholder="Выберите роль" />
            </div>
            <div className="inputGroup">
                 <Calendar id="Date" name="Date" placeholder="Выберите дату" minDate={minDateValue} maxDate={maxDateValue} dateFormat="dd/mm/yy"  required onChange={formik.handleChange} value={formik.values.Date} />
            </div>
            <div className="flex align-items-center mb-3">
                {/*<Checkbox id="checked" name="checked"  className={({ 'p-invalid': formik.values.Agreement === false })} required checked={formik.values.checked === 'checked'} onChange={(e) => {formik.setFieldValue('checked', e.checked);}} />*/}
                <Checkbox
                    id="Agreement"
                    name="Agreement"
                    required
                    checked={formik.values.Agreement}
                    className={{}}
                    onChange={(e) => {
                        formik.setFieldValue('Agreement', e.checked);
                    }}
                ></Checkbox>
                <label htmlFor="agreement" className="ml-2">Согласен с правилами</label>
            </div>
            <Button type="submit" label="Зарегистрироваться"></Button>
        </form>
    );
};

export default Forms;