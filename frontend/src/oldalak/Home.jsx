import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const Home = (() =>{

    return(
        
        <div>
          
          <div className="containerH">

                <div className="haromMusketas barna">

                <h3>Központi felvételi tájékoztató</h3>
                <p>A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el. A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján rangsorolja az iskolába jelentkezőket.</p>
                <a id="link" href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi">Tájékoztató oldal</a>
                <br />
                <img id="bagoly" src="/public/logo.png" alt="" />

                </div>

                <div className="haromMusketas">

                <h1>Tájékoztatás</h1>
                <h3>Jószakma Szakgimnázium</h3>
                <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.
                </p>
                <img src="/public/e-mail-marketing-2745489__340.jpg" alt="" />

                </div>


                <div className="haromMusketas barna">

                <h3>Az oldal használatáról</h3>
                <p>Ön az oldal használatával a következő információkhoz juthat hozzá</p>
                <div><p>Előzetes rangsor:</p>

                </div>

                <div>

                <div><p>Tanuló neve</p><div/>
                <div><p>Ágazat</p></div>
                <div><p>Összes</p></div>

                </div>

                <div><p>Előzetes rangsor nyelvi előkészítő</p></div>
                <div><p>A felvettek névsora</p></div>
                </div>   

           
            </div>

            <div>
                <h3>A felvételt nyert tanulók névsora a nyelvi előkészítőre</h3>
                <p>Válassza ki melyik ágazat adatait szeretné látni:</p>
                <select name="" id="">
                    <option value="elektronika">elektronika</option>
                    <option value="informatika">informatika</option>
                </select>


            </div>
        
            <div id="tablazat">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Tanuló neve</th>
                    <th scope="col">Ágazat</th>
                    <th scope="col">Összes</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>Antal Olga</td>
                    <td>informatika</td>
                    <td>106 pont</td>
                    </tr>
                    <tr>
                    <td>Antal Olivér</td>
                    <td>elektronika</td>
                    <td>145 pont</td>
                    </tr>
                    <tr>
                    <td>Antal Vilmos</td>
                    <td>elektronika</td>
                    <td>125 pont</td>
                    </tr>
                    <tr>
                    <td>Bakos Tivadar</td>
                    <td>informatika</td>
                    <td>107 pont</td>
                    </tr>
                </tbody>
            </table>
                </div>
            </div>

            
        </div>
        
    )

})

export default Home
