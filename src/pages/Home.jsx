import { useEffect, useState } from "react"
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import Container from "components/reuse/Container/Container";
import ProductList from "components/ProductList/ProductList";
import Error  from "components/reuse/Error/Error";
import Section from "components/reuse/Section/Section";
import Title from "components/reuse/Title/Title";

import { getAllTrending } from "api/trending";


const Home = () => {
    const [trendList, setTrendList] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const getData = async () => {
        try {
            Loading.circle()
            setError("");
            const { results } = await getAllTrending();
            setTrendList([...results]);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }finally {
      Loading.remove(300);
    }
}

getData()
}, [])
    
    return (
      <Section>
        <Container>
          {error&& <Error>{error}</Error>}
          {trendList.length !== 0 && <Title level={2} title="Trending today"/>}
          {trendList.length !== 0 && <ProductList data={trendList} />}
        </Container>
      </Section>
  )
}

export default Home