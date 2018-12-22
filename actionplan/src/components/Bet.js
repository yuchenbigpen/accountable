import React from "react";
import PropTypes from "prop-types";
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe
} from "react-stripe-elements";

import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

class _CardForm extends React.Component {
  render() {
    return (
      <form
        onSubmit={() =>
          this.props.stripe.createToken().then(payload => console.log(payload))
        }
      >
        <CardElement />
      </form>
    );
  }
}
const CardForm = injectStripe(_CardForm);

class Checkout extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <Elements>
          <CardForm />
        </Elements>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class Bet extends React.Component {
  state = {};
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <label className="instructions">
          *How much you want to bet on yourself?
        </label>

        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-email-input"
            label="$"
            className={classes.textField}
            type="number"
            name="amount"
            margin="normal"
            variant="outlined"
          />
        </form>
        <label className="instructions">
          *You have to finish all the tasks by:
        </label>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="date"
            type="date"
            label=" "
            defaultValue={Date.now()}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </form>
        <StripeProvider apiKey="pk_test_hERQ1BZnsCIySfDSC6Jxh3gw">
          <Checkout />
        </StripeProvider>
      </div>
    );
  }
}

Bet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bet);
