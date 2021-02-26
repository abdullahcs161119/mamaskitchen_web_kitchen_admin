import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  InputAdornment,
  SvgIcon,
  Divider,
  Grid,
  Typography,
  makeStyles,
  OutlinedInput,
  Container
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const useStyles = makeStyles(theme => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = React.useState({
    ProductName: '',
    Discription: '',
    price: ''
  });
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" justifyContent="flex-end">
        <Button className={classes.importButton}>Import</Button>
        <Button className={classes.exportButton}>Export</Button>
        <Button onClick={handleOpen} color="primary" variant="contained">
          Add product
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Kitchen Menu</h2>
              <p id="transition-modal-description">
                <form
                  autoComplete="off"
                  noValidate
                  className={clsx(classes.root, className)}
                  {...rest}
                >
                  <Card>
                    <CardHeader
                      subheader="The taste that brings you together"
                      title="Menu"
                    />
                    <Divider />
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                          <TextField
                            fullWidth
                            helperText="Please specify the first name"
                            label="Product Name"
                            name="ProductName"
                            onChange={handleChange}
                            required
                            value={values.ProductName}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item md={12} xs={12}>
                          <TextField
                            fullWidth
                            label="Discription"
                            name="Discription"
                            multiline
                            rowsMax={4}
                            onChange={handleChange}
                            required
                            value={values.Discription}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item md={12} xs={12}>
                          <Card>
                            <CardHeader title="Upload Image" />
                            <Divider />
                            <Container>
                              <CardContent>
                                <OutlinedInput
                                  style={{ border: '2px #fc0 dotted' }}
                                  type="file"
                                />
                              </CardContent>
                            </Container>
                          </Card>
                          {/*<TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            onChange={handleChange}
                            required
                            value={values.email}
                            variant="outlined"
                          />*/}
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <TextField
                            fullWidth
                            label="Price"
                            name="price"
                            onChange={handleChange}
                            type="number"
                            value={values.price}
                            variant="outlined"
                          />
                        </Grid>
                        {/*<Grid item md={6} xs={12}>
                          <TextField
                            fullWidth
                            label="Country"
                            name="country"
                            onChange={handleChange}
                            required
                            value={values.country}
                            variant="outlined"
                          />
                        </Grid>*/}
                        {/*<Grid item md={6} xs={12}>
                          <TextField
                            fullWidth
                            label="Select State"
                            name="state"
                            onChange={handleChange}
                            required
                            select
                            SelectProps={{ native: true }}
                            value={values.state}
                            variant="outlined"
                          >
                            {states.map(option => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </TextField>
                            </Grid>*/}
                      </Grid>
                    </CardContent>
                    <Divider />
                    <Box display="flex" justifyContent="flex-end" p={2}>
                      <Button color="primary" variant="contained">
                        Create Menu
                      </Button>
                    </Box>
                  </Card>
                </form>
              </p>
            </div>
          </Fade>
        </Modal>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search product"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
