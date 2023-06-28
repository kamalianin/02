import React, {useState} from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import '../../assets/scss/Forms.scss'
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import {Formik, useFormik, ErrorMessage} from 'formik';

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
        validate:  (values) => {
            const errors = {};
            if(values.Login.length < 6) {
                errors.Login = 'Логин слишком короткий, минимум 6 символов';
            }
            if (values.Password !== values.PasswordRepeat) {
              errors.PasswordRepeat = 'Пароли не совпадают';
            }
            if(values.Password === '') {
                errors.Password = 'Пожалуйста, введите пароль';
            }
            if(values.Password.length < 8) {
                errors.Password = 'Пароль слишком короткий, минимум 8 символов';
            }
            if(!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/g.test(values.Password)) {
                errors.Password = 'В пароле должна содержаться как минимум одна строчная и заглавные буквы, 1 цифра и 1 символ.'
            }
            if (values.Role === undefined || values.Role === '') {
                errors.Role = 'Не выбрана роль';
            }
            if (values.Date === '') {
                errors.Date = 'Дата не выбрана';
            }
            if (values.Date) {
                let date = values.Date;
                let firstHolidayDate = new Date(date.getFullYear(), 12, 31, 0,0,0,0);
                let secondHolidayDate = new Date(date.getFullYear(), 0, 1, 0,0,0,0);
                let thirdHolidayDate = new Date(date.getFullYear(), 0,10, 23,59,59,999);
                console.log(date - firstHolidayDate, date - secondHolidayDate, date - thirdHolidayDate)
                if (date >= firstHolidayDate || (date >= secondHolidayDate && date <= thirdHolidayDate)) {
                    errors.Date = 'Пожалуйста, выберите дату, не выпадающую на новогодние праздники!'
                }
            }
            if (values.Agreement === false) {
                errors.Agreement = 'Вам необходимо согласиться с правилами!';
            }
            console.log(errors)
            return errors;
        }
    })
    return (
        <form className="formContainer" onSubmit={formik.handleSubmit}>
            <div className="inputGroup">
                <InputText className={formik.submitCount && formik.errors.Login ? 'p-invalid': ''}  id="Login" name="Login" placeholder="Логин" keyfilter="alphanum" size="32" maxLength="32" required  onChange={formik.handleChange} value={formik.values.Login} />
                {formik.submitCount && formik.errors.Login ? <div className="errors">{formik.errors.Login}</div>:''}
            </div>

            <div className="inputGroup">
                <Password className={formik.submitCount && formik.errors.Password ? 'p-invalid passwordGroup': 'passwordGroup'} id="Password" name="Password" keyfilter={/(?=.*[0-9])|(?=.*[!@#$%^&*])|(?=.*[a-z])|(?=.*[A-Z])/g} required  placeholder="Пароль"   onChange={formik.handleChange} value={formik.values.Password} toggleMask  promptLabel="Введите сложный пароль" weakLabel="Слабый пароль" mediumLabel="Средний пароль" strongLabel="Сложный пароль" />
                {formik.submitCount && formik.errors.Password ? <div className="errors">{formik.errors.Password}</div>:''}
            </div>
            <div className="inputGroup">
                <Password className={formik.submitCount && formik.errors.PasswordRepeat ? 'p-invalid passwordGroup': 'passwordGroup'} id="PasswordRepeat"  name="PasswordRepeat" keyfilter={/(?=.*[0-9])|(?=.*[!@#$%^&*])|(?=.*[a-z])|(?=.*[A-Z])/g} placeholder="Повторите пароль"  required onChange={formik.handleChange} value={formik.values.PasswordRepeat} feedback={false} toggleMask />
                {formik.submitCount && formik.errors.PasswordRepeat ? <div className="errors">{formik.errors.PasswordRepeat}</div>:''}
            </div>
            <div className="dropdownGroup">
                <Dropdown className={formik.submitCount && formik.errors.Role ? 'p-invalid': ''} id="Role" name="Role" showClear filter   onChange={formik.handleChange} value={formik.values.Role}  required options={dropdownOptions1} optionLabel="role" placeholder="Выберите роль" />
                {formik.submitCount && formik.errors.Role ? <div className="errors">{formik.errors.Role}</div>:''}
            </div>
            <div className="inputGroup">
                 <Calendar className={formik.submitCount && formik.errors.Date ? 'p-invalid': ''} id="Date" name="Date" placeholder="Выберите дату"  minDate={minDateValue} maxDate={maxDateValue} dateFormat="dd/mm/yy"  required onChange={formik.handleChange} value={formik.values.Date} />
                {formik.submitCount && formik.errors.Date ? <div className="errors">{formik.errors.Date}</div>:''}
            </div>
            <div className="flex align-items-center mb-3">
                <Checkbox  className={formik.submitCount && formik.errors.Agreement ? 'p-invalid': ''}
                    id="Agreement"
                    name="Agreement"
                    required
                    checked={formik.values.Agreement}
                    onChange={(e) => {
                        formik.setFieldValue('Agreement', e.checked);
                    }}
                ></Checkbox>
                <label htmlFor="agreement" className="ml-2">Согласен с правилами</label>
                {formik.submitCount && formik.errors.Agreement ? <div className="errors">{formik.errors.Agreement}</div>:''}
            </div>
            <Button onClick={formik.submitForm} type="button" label="Зарегистрироваться"></Button>
        </form>
    );
};

export default Forms;