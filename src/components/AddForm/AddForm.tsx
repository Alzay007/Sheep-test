import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@material-ui/core";
import { addProduct } from "../../features/reducers/productsSlice";
import { useAppDispatch } from "../../features/hooks/hooks";
import styles from './AddForm.module.scss';

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  author: Yup.string().required("Required"),
  year: Yup.number()
    .required("Required")
    .min(2023, "Рік не може бути меншим за 2023"),
  rating: Yup.number()
    .required("Required")
    .min(0, "Рейтинг не може бути меншим за 0")
    .max(5, "Рейтинг не може бути більшим за 5"),
});

interface Props {
  handleClose: () => void;
}

export const AddProductForm: React.FC<Props> = ({ handleClose }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      year: "",
      rating: 0,
      description: "",
      price: 0,
      category: "",
      stock: 0,
      discountPercentage: 0,
      brand: "",
      thumbnail: "",
      images: [],
      id: 0

    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(addProduct(values));
      formik.resetForm();
      handleClose();
    }
  });

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="title"
          name="title"
          label="Title"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />

        <TextField
          id="author"
          name="author"
          label="Author"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
        />

        <TextField
          id="year"
          name="year"
          label="Year"
          variant="outlined"
          margin="normal"
          fullWidth
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.year}
          error={formik.touched.year && Boolean(formik.errors.year)}
          helperText={formik.touched.year && formik.errors.year}
        />

        <TextField
          id="rating"
          name="rating"
          label="Rating"
          variant="outlined"
          margin="normal"
          fullWidth
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rating}
          error={formik.touched.rating && Boolean(formik.errors.rating)}
          helperText={formik.touched.rating && formik.errors.rating}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!formik.isValid}
        >
          Add Product
        </Button>
      </form>
    </div>
  );
};

