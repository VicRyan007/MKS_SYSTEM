import { useState, useEffect } from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Header from "./components/Header"
import Card from "./components/Card";
import '../css/general.css'
import CardSkeleton from "./components/CardSkeleton";






function App() {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {

      fetch("https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC")
        .then(res => res.json())
        .then(res => {
          const resp = res.products.map(res => {
            return {
              'id': res.id,
              'nome': res.name,
              'foto': res.photo,
              'preco': res.price
            }
          })
          setProducts(resp)
          setIsLoading(false)
        })
    }, 2000)

  }, [])



  return (

    <>

      <Header />
      <SkeletonTheme highlightColor="#e8ffd1">

        {
          isLoading
            ?
            <>
              <div className="grid text-center">
                <div className="row justify-content-around">
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </div>
              </div>
            </>
            :
            <div className="grid text-center">
              <div className="row justify-content-around">
                {
                  products.map((p) => (
                    <Card id={p.id} foto={p.foto}
                      nome={p.nome} preco={p.preco} />
                  ))
                }
              </div>
            </div>
        }

      </SkeletonTheme>
    </>
  );
}

export default App
