import { useState } from 'react';
import FormCompensa from '../FormCompensa';
import { DataForm } from '../../interfaces/geral';
import classes from './LayoutPage.module.scss';

function LayoutPage() {
  const [data, setData] = useState<DataForm>({
    valor1: 0,
    quantidade1: 0,
    valor2: 0,
    quantidade2: 0,
  });

  const handleChangeData = (dataForm: DataForm) => {
    setData(dataForm);
  };

  const productVantage = () => {
    const valor1 = Number(data.valor1);
    const quantidade1 = Number(data.quantidade1);
    const valor2 = Number(data.valor2);
    const quantidade2 = Number(data.quantidade2);

    if (
      isNaN(valor1) ||
      isNaN(quantidade1) ||
      isNaN(valor2) ||
      isNaN(quantidade2)
    ) {
      return 'Valores inválidos fornecidos.';
    }

    const product1Price = valor1 / (quantidade1 * 1000);
    const product2Price = valor2 / (quantidade2 * 1000);

    const calc =
      product1Price < product2Price
        ? `O primeiro produto tem mais vantagem`
        : `O segundo produto tem mais vantagem`;

    return calc;
  };

  return (
    <>
      <div className={classes['container']}>
        <div>
          <h2>Qual compensa mais ?</h2>
          <p>Quantidade dever ser inserida em Kg ou L.</p>
        </div>
        <FormCompensa onDataChange={handleChangeData} />
        <div>
          <p>
            {Number(data.quantidade1) > 0 &&
              Number(data.quantidade2) > 0 &&
              Number(data.valor2) > 0 &&
              Number(data.valor2) > 0 &&
              productVantage()}
          </p>
        </div>
      </div>
    </>
  );
}

export default LayoutPage;
