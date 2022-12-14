import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";

interface IFormInput {
  cep: string;
}

const schema = yup
  .object({
    cep: yup
      .string()
      .matches(/^\d+$/, 'Esse campo só aceita numeros')
      .required("Campo obrigatório")
      .length(8, "O cep precisa conter 8 numeros (Ex: 72930000)"),
  })
  .required();

export default function Cadastrar() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: IFormInput) {
    setIsLoading(true);
    try {
      axios
        .post("http://localhost:5200/v1/cep", {
          cep: data.cep,
        })
        .then((res) => {
          setMessage("CEP adicionado ao banco de dados");
        })
        .catch((e) => {
            setMessage("Esse CEP não existe na API");
        });
      reset();
      setIsLoading(false);
    } catch (e) {
      setMessage("Ocorreu um erro ao buscar esse CEP na api");
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="container mx-auto h-[70vh] flex flex-col justify-center gap-4">
        <div className="text-center">
          <h1 className="font-semibold text-xl">
            Cadastrar novo CEP no banco de dados
          </h1>
          <p>Preencha o campo informando o CEP</p>
        </div>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-[340px]"
          >
            <label htmlFor="CEP">CEP</label>
            <input
              {...register("cep")}
              className="border-[1px] border-black rounded-sm p-1"
              type="text"
              id="CEP"
            />
            <p className="text-red-600 text-sm">{errors.cep?.message}</p>
            <pre className="text-md text-center">{message ? message : ""}</pre>
            <button className="bg-[#3253FF] mt-4 rounded-sm p-2 hover:bg-[#001db7]">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
