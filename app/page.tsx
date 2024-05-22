import { getProducts } from "./api/mksApi";
import ProductCard from "./components/ProductCard";

export async function generateMetadata() {

  return {
    title: "Shopping | MKS Sistemas",
    description: `Seja bem-vindo(a) ao Shopping da MKS Sistemas! Aqui será utilizada uma API para mostrar produtos, podendo adicioná-los a um carrinho.`,
  }

}

// temporary
const mockData = [{
  id: 2,
  name: 'AirPods',
  brand: 'Apple',
  description: 'Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.',
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
  price: '1200.00',
  createdAt: '2023-10-30T16:25:01.093Z',
  updatedAt: '2023-10-30T16:25:01.093Z'
},
{
  id: 5,
  name: 'Apple Watch Series 7',
  brand: 'Apple',
  description: 'O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.',
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp',
  price: '3200.00',
  createdAt: '2023-10-30T16:25:01.093Z',
  updatedAt: '2023-10-30T16:25:01.093Z'
},
{
  id: 7,
  name: 'Headset Cloud Revolver',
  brand: 'HyperX',
  description: 'A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.',
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp',
  price: '1000.00',
  createdAt: '2023-10-30T16:25:01.093Z',
  updatedAt: '2023-10-30T16:25:01.093Z'
},
{
  id: 8,
  name: 'Headset Cloud Stinger',
  brand: 'HyperX',
  description: 'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.',
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
  price: '600.00',
  createdAt: '2023-10-30T16:25:01.093Z',
  updatedAt: '2023-10-30T16:25:01.093Z'
},
{
  id: 6,
  name: 'iPad',
  brand: 'Apple',
  description: 'iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.',
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp',
  price: '4200.00',
  createdAt: '2023-10-30T16:25:01.093Z',
  updatedAt: '2023-10-30T16:25:01.093Z'
},
{
  id: 1,
  name: 'Iphone 11 128 GB',
  brand: 'Apple',
  description: 'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.',
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp',
  price: '5000.00',
  createdAt: '2023-10-30T16:25:01.093Z',
  updatedAt: '2023-10-30T16:25:01.093Z'
},
{
  id: 4,
  name: 'iPhone 12 64 GB',
  brand: 'Apple',
  description: 'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.',
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp',
  price: '6500.00',
  createdAt: '2023-10-30T16:25:01.093Z',
  updatedAt: '2023-10-30T16:25:01.093Z'
},
{
  id: 3,
  name: 'Macbook Air',
  brand: 'Apple',
  description: 'Processador intel Core i5 de dois núcleos e 1,8 GHz (Turbo Boost de até 2,9 GHz) com cache L3 compartilhado de 3 MB.',
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
  price: '8200.00',
  createdAt: '2023-10-30T16:25:01.093Z',
  updatedAt: '2023-10-30T16:25:01.093Z'
}]

export default async function Home() {

  // const products: ProductType[] = await getProducts("1", "10", "name", "ASC").then(res => res.products)

  return (
    <main className="bg-[#F9F9F9] pt-4 pb-9">

      <div className="md:min-h-[90vh] min-[1921px]:min-h-[70vh] md:flex md:my-auto">
        <ul className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">

          {mockData.map(item => (

            <li
              key={item.id}
              className="w-8/12 sm:w-4/5 md:w-full"
            >
              <ProductCard
                data={item}
              />
            </li>

          ))}

        </ul>
      </div>

    </main>
  );
}
