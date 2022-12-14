import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ResponseJson {
  id: number;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  unidade: number;
  ibge: number;
  gia: string;
}

export default function Home() {
  const fetch = (): Promise<ResponseJson[]> =>
    axios.get("http://localhost:5200/v1/cep").then((response) => response.data);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["ceps"],
    queryFn: fetch,
  });

  if (isLoading) {
    return <div className="text-center">Carregando...</div>;
  }

  if (isError) {
    return (
      <div className="text-center">Ocorreu um erro ao buscar lista de cep</div>
    );
  }

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center font-semibold py-8">
          Todos os CEP já cadastrado no banco de dados
        </h2>
        <div className="flex justify-center flex-wrap gap-10">
          {data.map((cep) => (
            <div key={cep.id} className="bg-[#3253FF] w-[240px] rounded-md p-4 text-center">
              <div className="border-[#ccc] border-[1px] rounded-md p-1">
                <div className="font-semibold">CEP</div>
                <div>{cep.cep}</div>
              </div>
              <div className="border-[#ccc] border-[1px] mt-4 rounded-md p-1">
                <div className="font-semibold">Logradouro</div>
                <div>{cep.logradouro}</div>
              </div>
              <div className="border-[#ccc] border-[1px] mt-4 rounded-md p-1">
                <div className="font-semibold">Bairro</div>
                <div>{cep.bairro}</div>
              </div>
              <div className="border-[#ccc] border-[1px] mt-4 rounded-md p-1">
                <div className="font-semibold">Localidade</div>
                <div>{cep.localidade}</div>
              </div>
              <div className="border-[#ccc] border-[1px] mt-4 rounded-md p-1">
                <div className="font-semibold">UF</div>
                <div>{cep.uf}</div>
              </div>
              <div className="border-[#ccc] border-[1px] mt-4 rounded-md p-1">
                <div className="font-semibold">IBGE</div>
                <div>{cep.ibge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
