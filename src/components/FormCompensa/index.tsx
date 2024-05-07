import { GiWineBottle } from 'react-icons/gi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdProductionQuantityLimits } from 'react-icons/md';
import React, { ChangeEvent, useState } from 'react';
import { DataForm } from '../../interfaces/geral';
import classes from './FormCompensa.module.scss';

const FormCompensa = ({
  onDataChange,
}: {
  onDataChange: (datForm: DataForm) => void;
}) => {
  const [dataForm, setDataForm] = useState<DataForm>({
    valor1: '',
    valor2: '',
    quantidade1: '',
    quantidade2: '',
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm((prevDataForm) => {
      return {
        ...prevDataForm,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onDataChange(dataForm);
  };

  return (
    <form onSubmit={handleSubmit} className={classes['form-container']}>
      <div>
        <p>
          <MdProductionQuantityLimits size={20} /> <span>Produto 1</span>
        </p>
        <label>
          <input
            type="number"
            name="valor1"
            id="valor1"
            onChange={handleChangeInput}
            value={dataForm.valor1}
            required
          />
          <span>
            <BsCurrencyDollar /> Valor
          </span>
        </label>
        <label>
          <input
            type="number"
            name="quantidade1"
            id="quantidade1"
            onChange={handleChangeInput}
            value={dataForm.quantidade1}
            required
          />
          <span>
            <GiWineBottle /> Quantidade em Kg ou L
          </span>
        </label>
      </div>
      <div>
        <p>
          <MdProductionQuantityLimits size={20} /> <span>Produto 2</span>
        </p>
        <label>
          <input
            type="number"
            name="valor2"
            id="valor2"
            onChange={handleChangeInput}
            value={dataForm.valor2}
            required
          />
          <span>
            <BsCurrencyDollar /> Valor
          </span>
        </label>
        <label>
          <input
            type="number"
            name="quantidade2"
            id="quantidade2"
            onChange={handleChangeInput}
            value={dataForm.quantidade2}
            required
          />
          <span>
            <GiWineBottle /> Quantidade em Kg ou L
          </span>
        </label>
      </div>
      <div>
        <input type="submit" value="Calcular" />
      </div>
    </form>
  );
};

export default FormCompensa;
