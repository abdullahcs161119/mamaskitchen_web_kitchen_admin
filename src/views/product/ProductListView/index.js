import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import ProductCard from './ProductCard';
import data from './data';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <Page className={classes.root} title="Products">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid container spacing={3}>
            {products.length >= 1 ? (
              products.map(product => (
                <Grid item key={product.id} lg={4} md={6} xs={12}>
                  <ProductCard
                    className={classes.productCard}
                    product={product}
                  />
                </Grid>
              ))
            ) : (
              <Box display="flex" width="100%" justifyContent="center">
                <Grid lg={12}>
                  <Card>
                    <CardContent>
                      <Divider />
                      <Typography
                        align="center"
                        color="textPrimary"
                        gutterBottom
                        variant="h4"
                      >
                        No menu has been added !
                      </Typography>
                      <Divider />
                      <Typography
                        align="center"
                        color="textPrimary"
                        gutterBottom
                        variant="p"
                      >
                        Click "Add Product" button to add menu
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Box>
            )}
          </Grid>
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Page>
  );
};

export default ProductList;
