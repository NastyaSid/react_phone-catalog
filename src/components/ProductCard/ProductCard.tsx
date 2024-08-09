import classNames from 'classnames';
import { Button } from '../Button/Button';
import styles from './ProductCard.module.scss';

import { Product } from '../../types/Product';
import { useFavouriteProducts } from '../../store/FavouriteProductsContext';

import { FavouritesButton } from '../FavouritesButton/FavouritesButton';
import { Link } from 'react-router-dom';
import { PriceBlock } from '../PriceBlock';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    id,
    category,
    itemId,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
  } = product;

  const techValueClassName = classNames(
    'text-small',
    styles.productCard__techValue,
  );

  const { handleFavourites } = useFavouriteProducts();

  const link = `/${category}/${itemId}`;

  return (
    <div className={styles.productCard}>
      <Link to={link} className={styles.productCard__imgWrapper}>
        <img className={styles.productCard__img} src={image} alt="product" />
      </Link>
      <div>
        <Link to={link}>
          <p className="text-body">{name}</p>
        </Link>

        <PriceBlock price={fullPrice} priceDiscount={price} />

        <div className={styles.productCard__divider}></div>

        <div className={styles.productCard__information}>
          <div className={styles.productCard__info}>
            <p className="text-small">Screen</p>
            <p className={techValueClassName}>{screen}</p>
          </div>
          <div className={styles.productCard__info}>
            <p className="text-small">Capacity</p>
            <p className={techValueClassName}>{capacity}</p>
          </div>
          <div className={styles.productCard__info}>
            <p className="text-small">RAM</p>
            <p className={techValueClassName}>{ram}</p>
          </div>
        </div>
        <div className={styles.productCard__btns}>
          <Button text="Add to cart" />
          <div onClick={() => handleFavourites(product)}>
            <FavouritesButton productId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};
