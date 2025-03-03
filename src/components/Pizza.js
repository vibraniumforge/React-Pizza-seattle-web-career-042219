import React from "react";

const Pizza = props => {
  return (
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? "true" : "false"}</td>
      <td>
        <button
          type="button"
          onClick={props.handleOnEditClick}
          className="btn btn-primary"
          data-id={props.pizza.id}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
