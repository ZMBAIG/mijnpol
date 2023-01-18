import React from "react";
import vuurwerk from "./images/vuurwerk.jpg";
import politiemotor from "./images/politiemotor.jpg";
import embleem from "./images/embleem.png";

function Gallery(props) {
  return (
    <div>
      <h2>Uitgelicht</h2>
      <div class="gallery-container">
        <div class="gallery 01">
          <img id="vuurwerk" alt="pic" src={vuurwerk} />
          <div class="desc">
            <h3>Minder incidenten, meer annhoudingen tijdens oud en nieuwe.</h3>
            <p>
              Minder incidenten, lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Repellendus provident dolorem quas iusto
              repudiandae aliquid voluptate,Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Consectetur suscipit at magnam,
              rerum quod distinctio esse ullam dolor omnis. Id obcaecati alias
              illo ut, repudiandae hic fuga pariatur in voluptatibus! sit saepe
              rem cumque deleniti ipsa sint veritatis ab repellat similique illo
              minus. Placeat. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Aliquid obcaecati id a delectus rem sapiente
              perferendis, nam, facere molestias non est doloremque accusantium
              omnis nemo praesentium. Ipsam veniam quis et. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nisi quibusdam iste, quas
              accusantium fugiat cumque esse dolorem. Iste delectus deleniti ab
              eaque ipsum itaque incidunt dolorum. Qui est consequatur amet!
            </p>
          </div>
        </div>

        <div class="gallery 02">
          <img id="politiemotor" alt="pic" src={politiemotor} />

          <div class="desc">
            <h3>
              Politieagent zwaargewond na aanriding door spookrijder, verdachte
              aangehouden
            </h3>
            <p>
              Politieagent zwaargewond lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Repellendus provident dolorem quas iusto
              repudiandae aliquid voluptate,Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Consectetur suscipit at magnam,
              rerum quod distinctio esse ullam dolor omnis. Id obcaecati alias
              illo ut, repudiandae hic fuga pariatur in voluptatibus! sit saepe
              rem cumque deleniti ipsa sint veritatis ab repellat similique illo
              minus. Placeat. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Aliquid obcaecati id a delectus rem sapiente
              perferendis, nam, facere molestias non est doloremque accusantium
              omnis nemo praesentium. Ipsam veniam quis et. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nisi quibusdam iste, quas
              accusantium fugiat cumque esse dolorem. Iste delectus deleniti ab
              eaque ipsum itaque incidunt dolorum. Qui est consequatur amet!
            </p>
          </div>
        </div>
        <div class="gallery 03">
          <img id="embleem" alt="pic" src={embleem} />
          <div class="desc">
            <h3>
              Onderzoek gestart na belagen politie tijdens jaarwisseling
              's-Gravendeel
            </h3>
            <p>
              Onderzoek gestart na belagen lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Repellendus provident dolorem quas
              iusto repudiandae aliquid voluptate,Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Consectetur suscipit at magnam,
              rerum quod distinctio esse ullam dolor omnis. Id obcaecati alias
              illo ut, repudiandae hic fuga pariatur in voluptatibus! sit saepe
              rem cumque deleniti ipsa sint veritatis ab repellat similique illo
              minus. Placeat. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Aliquid obcaecati id a delectus rem sapiente
              perferendis, nam, facere molestias non est doloremque accusantium
              omnis nemo praesentium. Ipsam veniam quis et. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nisi quibusdam iste, quas
              accusantium fugiat cumque esse dolorem. Iste delectus deleniti ab
              eaque ipsum itaque incidunt dolorum. Qui est consequatur amet!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Gallery;
