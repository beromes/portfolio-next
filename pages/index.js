import Head from 'next/head'
import MenuHeader from '../components/menu-header'
import Content from '../components/content'
import About from '../components/about'

export default function Home() {
  return (
    <>
      <Head>        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
        <title>Bernardo Nunes - Porfolio</title>
      </Head>
      
      <MenuHeader />

      <Content>
        
        <About />

      </Content>
    </>
  )
}