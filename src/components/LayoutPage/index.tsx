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
  const [unitMeasurementProducts, setUnitMeasurementProducts] = useState({
    product1: '',
    product2: '',
  });

  const handleChangeData = (
    dataForm: DataForm,
    unitMeasurementProducts: { product1: string; product2: string }
  ) => {
    setData(dataForm);
    setUnitMeasurementProducts(unitMeasurementProducts);
    console.log(dataForm, unitMeasurementProducts);
  };

  const productVantage = () => {
    const valor1 = Number(data.valor1);
    let quantidade1 = Number(data.quantidade1);
    const valor2 = Number(data.valor2);
    let quantidade2 = Number(data.quantidade2);

    if (
      isNaN(valor1) ||
      isNaN(quantidade1) ||
      isNaN(valor2) ||
      isNaN(quantidade2)
    ) {
      return 'Valores inválidos fornecidos.';
    }

    if (
      unitMeasurementProducts.product1 === 'grama' ||
      unitMeasurementProducts.product1 === 'mililitro'
    ) {
      quantidade1 = quantidade1 / 1000;
    }
    if (
      unitMeasurementProducts.product2 === 'grama' ||
      unitMeasurementProducts.product2 === 'mililitro'
    ) {
      quantidade2 = quantidade2 / 1000;
    }

    const product1Price = valor1 / quantidade1;
    const product2Price = valor2 / quantidade2;

    const calc =
      product1Price === product2Price
        ? `Ambos os produtos têm o mesmo preço. Cada Kg ou L sai por R$ ${Number(
            product1Price
          ).toFixed(2)}.`
        : product1Price < product2Price
        ? `O primeiro produto tem a vantagem no preço. Cada Kg ou L sai por R$ ${Number(
            product1Price
          ).toFixed(2)}, enquanto o segundo sai por R$ ${Number(
            product2Price
          ).toFixed(2)}.`
        : `O segundo produto tem a vantagem no preço. Cada Kg ou L sai por R$ ${Number(
            product2Price
          ).toFixed(2)}, enquanto o primeiro sai por R$ ${Number(
            product1Price
          ).toFixed(2)}.`;

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
