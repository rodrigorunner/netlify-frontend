import './style.css'

const Home = () => {
    return (
        <section className='wraper'>
            <div className="landing">
                <h1>StudentHolder RESTFull API</h1>
                <p className='texto'>É fazendo que se aprende a fazer aquilo que se deve aprender a fazer.</p>
            </div>

                <div className='gap'>
                    <h3>Quando usar</h3>
                    <p>StudentHolder é uma API REST destinada para estudantes de Frontend usarem sempre que precisarem de dados fictícios.</p>
                </div>

                <div className="recursos">
                    <h3>Recursos</h3>
                    <div className="recursos-texto">
                        <p className="url-text">https://coacherun.herokuapp.com/api/v1</p>
                        <div className='recursos-display'>
                            <p className='routes-url'>GET <span>/api/v1</span></p>
                            <p className='routes-url'>GET <span>/api/v1/:id</span></p>
                            <p className='routes-url post'>POST <span>/api/v1</span></p>
                            <p className='routes-url'>PUT <span>/api/v1/:id</span></p>
                            <p className='routes-url delete'>DELETE <span>/api/v1/:id</span></p>
                        </div>
                    </div>
                </div>
        </section>
    );
  }
  
  export default Home;
  