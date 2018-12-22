import React, { Component } from "react";
import Header from "../containers/Header";
import MainSection from "../containers/MainSection";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Bet from "./Bet";
import ToggleDisplay from "react-toggle-display";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, submit: true };
    const { activeCount } = props;

    console.log(activeCount);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }
  handleSubmit() {
    this.setState({ submit: !this.state.submit });
  }

  render() {
    return (
      <div>
        <div>
          <Header />
          <MainSection />
        </div>
        <div>
          <ToggleDisplay show={this.state.submit}>
            {" "}
            <Button
              variant="contained"
              color="default"
              style={{ margin: "8px auto", display: "block" }}
              onClick={() => {
                this.handleClick();
              }}
            >
              Place a Bet
            </Button>
            <ToggleDisplay show={this.state.show}>
              <Bet />
              <Button
                variant="extendedFab"
                color="secondary"
                style={{ margin: "8px auto", display: "block" }}
                onClick={() => {
                  this.handleSubmit();
                }}
              >
                Confirm
              </Button>
            </ToggleDisplay>
          </ToggleDisplay>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
