const getExpenseNameValidation = () => {
  return {
    required: "Please enter expense name",
    maxLength: {
      value: 15,
      message: "Maximum 15 characters required",
    },
    pattern: {
      value: /^[аa-яzАA-ЯZ\s]*$/,
      message: "The name of the expense can only contain letters. Please try again.",
    },
  };
};

const getExpenseCostValidation = () => {
  return {
    valueAsNumber: true,
    required: "Please enter expense cost",
    maxLength: {
      value: 5,
      message: "Maximum 5 characters required",
    },
    min: {
      value: 1,
      message: "The cost cannot be less than 1. Please try again.",
    },
  };
};

export { getExpenseCostValidation, getExpenseNameValidation };
