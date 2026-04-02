import './Product.css';
import {Badge} from "../Badge/index.js";
import {formatMoney} from "../../utils/formatMoney.js";

/**
 * Компонент для отображения карточки товара
 * @param {string} imageUrl ссылка на изображение товара
 * @param {number} [oldPrice] старая цена @optional
 * @param {number} [discount] процент скидки (со знаком минус)
 * @param {number} price цена
 * @param {number} [cashback] кэшбэк
 * @param {string} brand название бренда
 * @param {string} name название товара
 * @returns {JSX.Element}
 * @constructor
 */
export function Product({ imageUrl, oldPrice, discount, price, cashback, brand, name }) {
  return (
    <div className='product'>
      <div className='imageBox'>
        <img className='image' src={imageUrl} alt={name} />
      </div>

      <div className='contentBox'>
        <div className='priceBox'>
          {!!oldPrice && (
            <div className='oldPriceBox'>
              <span className='oldPriceAmount'>{formatMoney(oldPrice)}</span>

              {!!discount && (
                <span className='oldPriceDiscount'>{discount}%</span>
              )}
            </div>
          )}

          <div className='realPriceBox'>
            <span className='realPriceAmount'>{formatMoney(price)}</span>

            {!!cashback && (
              <Badge>{formatMoney(cashback, { withoutCurrency: true })}</Badge>
            )}
          </div>
        </div>

        <span className='productBrand'>{brand}</span>
        <span className='productName'>{name}</span>
      </div>
    </div>
  )
}