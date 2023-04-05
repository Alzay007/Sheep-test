import { Product } from '../../types/Product';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { ProductTableRow } from '../TableRow';

interface Props {
  productsList: Product[];
}

export const ProductList: React.FC<Props> = ({ productsList }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsList && productsList.map((product) => (
            <ProductTableRow key={product.id} product={product} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

