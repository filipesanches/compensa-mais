import { GiWineBottle } from 'react-icons/gi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdProductionQuantityLimits } from 'react-icons/md';
import React, { ChangeEvent, useState } from 'react';
import { DataForm } from '../../interfaces/geral';
import classes from './FormCompensa.module.scss';

const FormCompensa = ({
  onDataChange,
}: {
  onDataChange: (
    datForm: DataForm,
    unitMeasurementProducts: { product1: string; product2: string }
  ) => void;
}) => {
  const [dataForm, setDataForm] = useState<DataForm>({
    valor1: '',
    valor2: '',
    quantidade1: '',
    quantidade2: '',
  });
  const [unitMeasurementProduct1, setUnitMeasurementProduct1] = useState('');
  const [unitMeasurementProduct2, setUnitMeasurementProduct2] = useState('');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm((prevDataForm) => {
      return {
        ...prevDataForm,
        [name]: value.toString().includes(',')
          ? value.replace(',', '.')
          : value,
      };
    });
  };

  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'product1') {
      setUnitMeasurementProduct1(value);
    } else {
      setUnitMeasurementProduct2(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const measurementProducts = {
      product1: unitMeasurementProduct1,
      product2: unitMeasurementProduct2,
    };
    onDataChange(dataForm, measurementProducts);
  };

  return (
    <form onSubmit={handleSubmit} className={classes['form-container']}>
      <div>
        <p>
          <MdProductionQuantityLimits size={20} /> <span>Produto 1</span>
        </p>
        <div className={classes['radio-container']}>
          <label>
            <input
              type="radio"
              name="product1"
              id="kilo"
              value="kilo"
              onChange={handleChangeRadio}
            />
            <span>Kg</span>
          </label>
          <label>
            <input
              type="radio"
              name="product1"
              id="grama"
              value="grama"
              onChange={handleChangeRadio}
            />
            <span>G</span>
          </label>
          <label>
            <input
              type="radio"
              name="product1"
              id="litro"
              value="litro"
              onChange={handleChangeRadio}
            />
            <span>L</span>
          </label>
          <label>
            <input
              type="radio"
              name="product1"
              id="mililitro"
              value="mililitro"
              onChange={handleChangeRadio}
            />
            <span>ML</span>
          </label>
        </div>
        <label>
          <input
            type="number"
            name="valor1"
            id="valor1"
            onChange={handleChangeInput}
            value={dataForm.valor1}
            required
            min={0}
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
            min={0}
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
        <div className={classes['radio-container']}>
          <label>
            <input
              type="radio"
              name="product2"
              id="kilo"
              value="kilo"
              onChange={handleChangeRadio}
            />
            <span>Kg</span>
          </label>
          <label>
            <input
              type="radio"
              name="product2"
              id="grama"
              value="grama"
              onChange={handleChangeRadio}
            />
            <span>G</span>
          </label>
          <label>
            <input
              type="radio"
              name="product2"
              id="litro"
              value="litro"
              onChange={handleChangeRadio}
            />
            <span>L</span>
          </label>
          <label>
            <input
              type="radio"
              name="product2"
              id="mililitro"
              value="mililitro"
              onChange={handleChangeRadio}
            />
            <span>ML</span>
          </label>
        </div>
        <label>
          <input
            type="number"
            name="valor2"
            id="valor2"
            onChange={handleChangeInput}
            value={dataForm.valor2}
            required
            min={0}
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
            min={0}
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
