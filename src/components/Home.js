import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './Style.css'

const Home = () => {
  return (
    <div className="text-center">

      <h1>HYDROPONICS FARMING</h1>

      <p>
        Hydroponics farming is a soil-less cultivation method that uses 
        nutrient-rich water solutions to grow plants, offering numerous benefits 
        such as higher yields, reduced water usage, and the ability to grow in 
        various environments.
      </p>

      <h2>Benefits</h2>

      <Container>

        <section>
          <div>
            <h3>Needs No Soil</h3>
            <p>
              Hydroponic crops don’t contribute to soil degradation, so they can 
              help slow land degradation. These crops aren’t affected by the 
              results of this crisis either since they don’t rely on healthy 
              topsoil for their nutrients.
            </p>

            <img
              src="https://media.istockphoto.com/id/939589406/photo/in-the-commercial-greenhouse-soilless-cultivation-of-vegetables.jpg?s=612x612&w=0&k=20&c=3oqrZuTgSFKMubEvyJSsA4UEpd2IzGisyp76WN01WMc="
              alt="Hydroponic soilless vegetable cultivation"
              className="img-fluid"
            />
          </div>
        </section>

        <section>
          <div>
            <h3>Conserves Water</h3>
            <p>
              Water conservation is a primary concern in today’s world. It may 
              seem counterintuitive to replace soil with water in a hydroponic 
              system. In reality, such a system uses far less water than 
              traditional soil-based growing methods because the water can be 
              recycled repeatedly.
            </p>

            <img
              src="https://media.istockphoto.com/id/1868481524/photo/green-house-for-cultivation-and-conservation-of-orchid-plants.jpg?s=612x612&w=0&k=20&c=RAUipOAeoEfkRn8UvNZ2PoTFGvmiR2fhqMPsWJG26Sc="
              alt="Hydroponic greenhouse water conservation"
              className="img-fluid"
            />
          </div>
        </section>

        <section>
          <div>
            <h3>Crops Grow Faster</h3>
            <p>
              Many hydroponic growers report that their crops grow in half the 
              time of soil-grown crops. This speed is most noticeable in leafy 
              vegetables, but improvements occur for many hydroponic plants.
            </p>

            <img
              src="https://media.istockphoto.com/id/1795056803/photo/mini-garden.jpg?s=612x612&w=0&k=20&c=xFjEKkiQdjZ-VEVnYSJs6eh5I2VIxb0iulcQVK-kWmw="
              alt="Fast growing hydroponic plants"
              className="img-fluid"
            />
          </div>
        </section>

        <section>
          <div>
            <h3>Produces Higher Yields</h3>
            <p>
              Hydroponic greenhouses grow crops faster and maximize the use of 
              space. They rarely lose crops to pests or contamination, leading 
              to higher productivity and better food supply.
            </p>

            <img
              src="https://media.istockphoto.com/id/534363917/photo/tomato-greenhouse.jpg?s=612x612&w=0&k=20&c=4BVUMfLdUBBDJpUuREmEAXC_gxSPtkIP1yx_W8gyT8A="
              alt="Hydroponic tomato greenhouse with high yield"
              className="img-fluid"
            />
          </div>
        </section>

        <section>
          <div>
            <h3>Requires Less Labor</h3>
            <p>
              Workers in hydroponic farms are not exposed to harmful pesticides. 
              These farms often operate in controlled environments that provide 
              safer and more efficient working conditions.
            </p>

            <img
              src="https://media.istockphoto.com/id/1447011239/photo/fully-automated-farm.jpg?s=612x612&w=0&k=20&c=hbzyz2C1KpVnAGq4nNmALHOVdCribQa6WFPOCFW4i-o="
              alt="Automated hydroponic farming system"
              className="img-fluid"
            />
          </div>
        </section>

      </Container>

    </div>
  )
}

export default Home
