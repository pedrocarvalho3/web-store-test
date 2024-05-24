import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { reduxForm, Field } from "redux-form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { saveUserData } from "../../store/action";
import { calcTotal, formatPrice } from "../../utils";

// Opções para o campo de seleção de gênero
const options = ["F", "M", "Outro"];

// Componente para renderizar um campo de texto
const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <TextField
      size="small"
      label={label}
      error={touched && error}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  </div>
);

// Componente para renderizar um campo de seleção com autocompletar
const renderAutocomplete = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <Autocomplete
      size="small"
      {...input}
      {...custom}
      disablePortal
      options={options}
      onChange={(event, value) => input.onChange(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={touched && error}
          helperText={touched && error}
        />
      )}
    />
  </div>
);

// Componente principal do formulário
let Form = (props) => {
  const { handleSubmit } = props;
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const total = calcTotal(products);

  const dispatch = useDispatch();

  // Função para lidar com a submissão do formulário
  function handlePurchase(data) {
    if (total === 0) {
      // Alerta se nenhum produto foi adicionado ao carrinho
      alert("Nenhum produto adicionado!");
    } else {
      // Salvando os dados do usuário e navegando para a página de finalização
      dispatch(saveUserData(data));
      navigate("/finalized");
    }
  }

  return (
    <Box>
      {/* Formulário */}
      <form onSubmit={handleSubmit(handlePurchase)}>
        <Grid container spacing={1}>
          {/* Campo de nome */}
          <Grid item xs={12} sm={5}>
            <Field
              name="name"
              component={renderTextField}
              variant="outlined"
              label="Nome"
              placeholder="Nome do cliente aqui"
              fullWidth
            />
          </Grid>
          {/* Campo de e-mail */}
          <Grid item xs={12} sm={5}>
            <Field
              name="email"
              component={renderTextField}
              variant="outlined"
              label="Email"
              placeholder="Email do cliente aqui"
              fullWidth
            />
          </Grid>
          {/* Campo de gênero */}
          <Grid item xs={12} sm={2}>
            <Field
              name="gender"
              component={renderAutocomplete}
              variant="outlined"
              label="Sexo"
              placeholder="Selecione"
            />
          </Grid>
        </Grid>
        {/* Seção de total e botão de finalizar compra */}
        <Box my={4} textAlign="end">
          <Typography variant="h5" fontWeight={700} mb={1}>
            Total: {formatPrice(total)}
          </Typography>
          <Button type="submit" variant="contained" color="warning">
            FINALIZAR COMPRA
          </Button>
        </Box>
      </form>
    </Box>
  );
};

// Função para validar os campos do formulário
const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Campo obrigatório!";
  }

  if (!values.email) {
    errors.email = "Campo obrigatório!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Formato de e-mail inválido!";
  }

  if (!values.gender) {
    errors.gender = "Campo obrigatório!";
  }

  return errors;
};

// Conectando o formulário ao Redux
Form = reduxForm({
  form: "form",
  validate,
})(Form);

export default Form;
