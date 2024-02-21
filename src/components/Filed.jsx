import React from "react";

export default function Filed({ label, children, htmlFor, error }) {
  const id = htmlFor || getChildId(children);
  return (
    <div className="flex flex-col justify-start self-start">
      {label && (
        <label
          className="text-xl font-semibold mb-1 cursor-pointer"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div className="text-sm font-semibold text-red-600 mt-1">
          {error.message}
        </div>
      )}
    </div>
  );
}

const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child?.props?.id;
  }
};
