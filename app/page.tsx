import ProductsGrid from "./components/ProductsGrid";

export async function generateMetadata() {

  return {
    title: "Shopping | MKS Sistemas",
    description: `Seja bem-vindo(a) ao Shopping da MKS Sistemas! Aqui será utilizada uma API para mostrar produtos, podendo adicioná-los a um carrinho.`,
  }

}

export default async function Home() {

  return (
    <main className="bg-[#F9F9F9] pt-4 pb-9">

      <div className="md:min-h-[90vh] md:flex md:my-auto">

        <ProductsGrid />

      </div>

    </main>
  );
}
