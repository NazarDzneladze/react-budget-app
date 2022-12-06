import { FormErrorMessage, StyledForm } from "./styles";
import { Title } from "components/Title/Title";
import { Input } from "components/Input/Input";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button } from "components/Button/Button";
import { getExpenseCostValidation, getExpenseNameValidation } from "./validation";
import { useExpensesContext } from "context/ExpensesContext/ExpensesContext";
import { v4 as uuidv4 } from "uuid";

export interface IFormProps {
  expenseName: string;
  expenseCost: string;
}

export const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormProps>();
  const { addNewExpense } = useExpensesContext();

  const onSubmit: SubmitHandler<IFormProps> = (data) => {
    addNewExpense({ expenseName: data.expenseName, expenseCost: +data.expenseCost, id: uuidv4() });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Expense</Title>
      <Controller
        control={control}
        name="expenseName"
        defaultValue=""
        rules={getExpenseNameValidation()}
        render={({ field: { value, onChange } }) => (
          <Input placeholder="enter name ..." onChange={onChange} value={value} />
        )}
      />
      {errors.expenseName && <FormErrorMessage>{errors.expenseName.message}</FormErrorMessage>}
      <Controller
        control={control}
        name="expenseCost"
        defaultValue=""
        rules={getExpenseCostValidation()}
        render={({ field: { value, onChange } }) => (
          <Input placeholder="enter cost ..." onChange={onChange} value={value} type="number" />
        )}
      />
      {errors.expenseCost && <FormErrorMessage>{errors.expenseCost.message}</FormErrorMessage>}
      <Button $formButton>Done</Button>
    </StyledForm>
  );
};
