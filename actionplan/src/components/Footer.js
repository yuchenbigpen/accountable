import React from "react";
import PropTypes from "prop-types";
import FilterLink from "../containers/FilterLink";
import { Popup } from "semantic-ui-react";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../constants/TodoFilters";
import Button from "@material-ui/core/Button";
import ToggleDisplay from "react-toggle-display";

const FILTER_TITLES = {
  [SHOW_ALL]: "All",
  [SHOW_ACTIVE]: "Active",
  [SHOW_COMPLETED]: "Completed"
};

const Popupcomp = () => (
  <Popup
    trigger={
      <Button
        variant="contained"
        color="default"
        style={{ margin: "8px auto", display: "block" }}
      >
        {" "}
        Claim My Money
      </Button>
    }
    content={
      <div>
        <h2 className="label-h">Honor Code</h2>
        <p className="honorcode">
          "I have kept myself accountable and finished all the tasks on my todo
          list. By click the button below, I affirm on my honor that I will
          abstain from dishonesty to myself."
        </p>
        <Button
          variant="contained"
          color="secondary"
          style={{ margin: "8px auto", display: "block" }}
          onClick={function(e) {
            window.location.reload();
          }}
        >
          {" "}
          Confirm
        </Button>
      </div>
    }
    on="click"
    position="bottom center"
  />
);

const Footer = props => {
  const { activeCount, completedCount, onClearCompleted, handleClaim } = props;
  const itemWord = activeCount === 1 ? "item" : "items";
  var show = false;
  if (activeCount === 0) {
    show = true;
  }

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount || "No"}</strong> {itemWord} left
        </span>
        <ul className="filters">
          {Object.keys(FILTER_TITLES).map(filter => (
            <li key={filter}>
              <FilterLink filter={filter}>{FILTER_TITLES[filter]}</FilterLink>
            </li>
          ))}
        </ul>
        {!!completedCount && (
          <button className="clear-completed" onClick={onClearCompleted}>
            Clear completed
          </button>
        )}
      </footer>
      <ToggleDisplay show={show}>
        <Popupcomp className="popup" />
      </ToggleDisplay>
    </div>
  );
};

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired
};

export default Footer;
