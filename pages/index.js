import Head from 'next/head'
import MenuHeader from '../components/menu-header'
import Content from '../components/content'
import About from '../components/about'
import Progress from '../components/progress'

export default function Home() {
  return (
    <>
      <Head>        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
        {/* <script>{`              
              const debounce = (fn) => {

                // This holds the requestAnimationFrame reference, so we can cancel it if we wish
                let frame;

                // The debounce function returns a new function that can receive a variable number of arguments
                return (...params) => {
                  
                  // If the frame variable has been defined, clear it now, and queue for next frame
                  if (frame) { 
                    cancelAnimationFrame(frame);
                  }

                  // Queue our function call for the next frame
                  frame = requestAnimationFrame(() => {
                    
                    // Call our function and pass any params we received
                    fn(...params);
                  });

                } 
              };


              // Reads out the scroll position and stores it in the data attribute
              // so we can use it in our stylesheets
              const storeScroll = () => {
                document.documentElement.dataset.scroll = window.scrollY;
              }

              document.addEventListener('scroll', debounce(storeScroll), { passive: true });

              // Update scroll position for first time
              storeScroll();
        `}</script> */}
        <title>Bernardo Nunes - Porfolio</title>
      </Head>
      
      <MenuHeader />

      <Content>
        
        <About />

        <Progress />

        {/* <Knowledges />

        <Projects /> */}

      </Content>
    </>
  )
}