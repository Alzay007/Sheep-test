import React from 'react';
import { TableRow, TableCell, IconButton, Avatar, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { Product } from '../../types/Product';
import styles from './TableRow.module.scss';
import { useAppDispatch } from '../../features/hooks/hooks';
import { removeProduct } from '../../features/reducers/productsSlice';
import { openSnackBar } from '../../features/reducers/snackSlice';
import { useAuth } from '../../features/hooks/useAuth';
import { NavLink } from 'react-router-dom';

interface Props {
  product: Product;
}

export const ProductTableRow: React.FC<Props> = ({ product }) => {
  const { id, title, description, price, thumbnail, rating, stock, category } = product;

  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();

  const handleDelete = (id: number) => {
    dispatch(removeProduct(id));
  };

  const handleSetOpenSnack = () => {
    dispatch(openSnackBar())
  }

  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <NavLink to={`/products/${product.id}`}>
          {title}
        </NavLink>
      </TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>${price}</TableCell>
      <TableCell>
        <Avatar alt={title} src={thumbnail} />
      </TableCell>
      <TableCell>
        <div color="textSecondary" className={styles.table__rating}>
          <span>{rating}</span>
          <span className={styles.table__star}></span>
        </div>
      </TableCell>
      <TableCell>
        <Typography variant="body1" color="textSecondary">
          {stock ? 'In stock' : 'Out of stock'}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1" color="textSecondary">
          {category}
        </Typography>
      </TableCell>
      <TableCell>
        {isAuth ? (
          <IconButton onClick={() => handleDelete(id)}>
            <Delete />
          </IconButton>
        ) : (
          <IconButton onClick={() => handleSetOpenSnack()}>
            <Delete />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
};
