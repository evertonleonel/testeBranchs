import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  nome: string;
  senha: string;
  confirmarSenha: string;
  email: string;
  confirmarEmail: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {} as FormValues,
  });

  const handleSubmitData: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const teste = "TESTANDO TUDO CARAAAAAAAAAAAAAAAA";

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSubmitData)}
        style={{ display: "flex", flexDirection: "column", gap: 20 }}
      >
        <input
          {...register("nome", {
            required: "Campo obrigatório",
            minLength: { value: 4, message: "No minimo 4 tio" },
          })}
          name="nome"
          placeholder="nome"
        />

        <input
          {...(register("senha"), { required: "Este campo é obrigatoio" })}
          name="senha"
          type="password"
          placeholder="senha"
        />
        <input
          {...register("confirmarSenha")}
          name="confirmarSenha"
          type="password"
          placeholder="confirmar senha"
        />
        <input {...register("email")} name="email" placeholder="email" />
        <input
          {...register("confirmarEmail")}
          name="confirmarEmail"
          placeholder="confirmar email"
        />

        <p>{errors && errors.confirmarSenha?.message}</p>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;
