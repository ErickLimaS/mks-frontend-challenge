import Image from "next/image";

export async function generateMetadata() {

  return {
    title: "Shopping | MKS Sistemas",
    description: `Seja bem-vindo(a) ao Shopping da MKS Sistemas! Aqui será utilizada uma API para mostrar produtos, podendo adicioná-los a um carrinho.`,
  }

}

export default function Home() {
  return (
    <main className="bg-[#F9F9F9]">
      home
    </main>
  );
}
