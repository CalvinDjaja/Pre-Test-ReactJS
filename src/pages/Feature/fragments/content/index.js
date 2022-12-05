import "./styles.css";
import LegoBatman from "../../../../Image/lego_batman.png";
import Beyblade from "../../../../Image/Beyblade.jpg";

function Content(prop) {
  return (
    <div>
      <h1 className="content">{prop.data}</h1>

      <table className="margin-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tr>
          <td>Lego Batman</td>
          <img class="img-size" src={LegoBatman} alt="Beyblade" />
          <td>Rp. 300.000</td>
        </tr>
        <tr>
          <td>Beyblade</td>
          <td>
            <img class="img-size" src={Beyblade} alt="Beyblade" />
          </td>
          <td>Rp. 200.000</td>
        </tr>
      </table>
    </div>
  );
}

export default Content;
