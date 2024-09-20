import React, { useState, useEffect } from "react";
import Tags from "../Tags/Tags";
import "./ContentStyle.css";
import CardVideo from "../Card/CardVideo";
import CardShort from "../Card/CardShort";

function Content() {
  const [videos, setVideos] = useState([]);
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await fetch("http://localhost:3000");
      // console.log(data);
      const json = await data.json();
      // console.log(json);

      setVideos(json);
    };

    const fetchShorts = async () => {
      const data = await fetch("http://localhost:3000/short");
      // console.log(data);
      const json = await data.json();
      // console.log(json);

      setShorts(json);
    };

    fetchVideos();
    fetchShorts();
  }, []);
  return (
    <section id="content">
      <Tags></Tags>
      <section id="the-cards">
        {videos.map((video, index) => (
          <CardVideo key={index} content={video}></CardVideo>
        ))}
        <div className="card">
          <div className="-thumb">
            <img src="https://via.placeholder.com/480x270" />
          </div>
          <div className="-about">
            <div className="-channel-img">
              <img src="https://via.placeholder.com/36x36" />
            </div>
            <div className="-detail">
              <div className="-title">
                มาฝึกออกแบบ Front-end ด้วยกัน โดยวันนี้พี่นิวจะพาพวกเราไป Clone
                YouTube ซึ่งคลิปนี้จะลงมือพาทำกันจริง ๆ
                เลยมาดูกันว่าขั้นตอนในการทำเนี่ยมันยากแค่ไหนกว่าจะได้เป็นแอปพลิเคชันนี้ให้พวกเราได้ดูกัน
                ถ้าพร้อมแล้วอย่ารอช้าไปรับชมกันเลย
              </div>
              <div className="-channel">Andy CK</div>
              <div className="-view">การดู 4.6 แสนครั้ง. 4 วันที่ผ่านมา</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="-thumb">
            <img src="https://via.placeholder.com/480x270" />
          </div>
          <div className="-about">
            <div className="-channel-img">
              <img src="https://via.placeholder.com/36x36" />
            </div>
            <div className="-detail">
              <div className="-title">
                มาฝึกออกแบบ Front-end ด้วยกัน โดยวันนี้พี่นิวจะพาพวกเราไป Clone
                YouTube ซึ่งคลิปนี้จะลงมือพาทำกันจริง ๆ
                เลยมาดูกันว่าขั้นตอนในการทำเนี่ยมันยากแค่ไหนกว่าจะได้เป็นแอปพลิเคชันนี้ให้พวกเราได้ดูกัน
                ถ้าพร้อมแล้วอย่ารอช้าไปรับชมกันเลย
              </div>
              <div className="-channel">Andy CK</div>
              <div className="-view">การดู 4.6 แสนครั้ง. 4 วันที่ผ่านมา</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="-thumb">
            <img src="https://via.placeholder.com/480x270" />
          </div>
          <div className="-about">
            <div className="-channel-img">
              <img src="https://via.placeholder.com/36x36" />
            </div>
            <div className="-detail">
              <div className="-title">
                มาฝึกออกแบบ Front-end ด้วยกัน โดยวันนี้พี่นิวจะพาพวกเราไป Clone
                YouTube ซึ่งคลิปนี้จะลงมือพาทำกันจริง ๆ
                เลยมาดูกันว่าขั้นตอนในการทำเนี่ยมันยากแค่ไหนกว่าจะได้เป็นแอปพลิเคชันนี้ให้พวกเราได้ดูกัน
                ถ้าพร้อมแล้วอย่ารอช้าไปรับชมกันเลย
              </div>
              <div className="-channel">Andy CK</div>
              <div className="-view">การดู 4.6 แสนครั้ง. 4 วันที่ผ่านมา</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="-thumb">
            <img src="https://via.placeholder.com/480x270" />
          </div>
          <div className="-about">
            <div className="-channel-img">
              <img src="https://via.placeholder.com/36x36" />
            </div>
            <div className="-detail">
              <div className="-title">
                มาฝึกออกแบบ Front-end ด้วยกัน โดยวันนี้พี่นิวจะพาพวกเราไป Clone
                YouTube ซึ่งคลิปนี้จะลงมือพาทำกันจริง ๆ
                เลยมาดูกันว่าขั้นตอนในการทำเนี่ยมันยากแค่ไหนกว่าจะได้เป็นแอปพลิเคชันนี้ให้พวกเราได้ดูกัน
                ถ้าพร้อมแล้วอย่ารอช้าไปรับชมกันเลย
              </div>
              <div className="-channel">Andy CK</div>
              <div className="-view">การดู 4.6 แสนครั้ง. 4 วันที่ผ่านมา</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="-thumb">
            <img src="https://via.placeholder.com/480x270" />
          </div>
          <div className="-about">
            <div className="-channel-img">
              <img src="https://via.placeholder.com/36x36" />
            </div>
            <div className="-detail">
              <div className="-title">
                มาฝึกออกแบบ Front-end ด้วยกัน โดยวันนี้พี่นิวจะพาพวกเราไป Clone
                YouTube ซึ่งคลิปนี้จะลงมือพาทำกันจริง ๆ
                เลยมาดูกันว่าขั้นตอนในการทำเนี่ยมันยากแค่ไหนกว่าจะได้เป็นแอปพลิเคชันนี้ให้พวกเราได้ดูกัน
                ถ้าพร้อมแล้วอย่ารอช้าไปรับชมกันเลย
              </div>
              <div className="-channel">Andy CK</div>
              <div className="-view">การดู 4.6 แสนครั้ง. 4 วันที่ผ่านมา</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="-thumb">
            <img src="https://via.placeholder.com/480x270" />
          </div>
          <div className="-about">
            <div className="-channel-img">
              <img src="https://via.placeholder.com/36x36" />
            </div>
            <div className="-detail">
              <div className="-title">
                มาฝึกออกแบบ Front-end ด้วยกัน โดยวันนี้พี่นิวจะพาพวกเราไป Clone
                YouTube ซึ่งคลิปนี้จะลงมือพาทำกันจริง ๆ
                เลยมาดูกันว่าขั้นตอนในการทำเนี่ยมันยากแค่ไหนกว่าจะได้เป็นแอปพลิเคชันนี้ให้พวกเราได้ดูกัน
                ถ้าพร้อมแล้วอย่ารอช้าไปรับชมกันเลย
              </div>
              <div className="-channel">Andy CK</div>
              <div className="-view">การดู 4.6 แสนครั้ง. 4 วันที่ผ่านมา</div>
            </div>
          </div>
        </div>
      </section>
      <section id="shorts">
        <div className="-section-title">[] Shorts</div>
        <div className="short-wrap">
          {shorts.map((video, index) => (
            <CardShort key={index} content={video}></CardShort>
          ))}
          <div className="short">
            <div className="-thumb">
              <img src="https://via.placeholder.com/270x480" />
            </div>
            <div className="-about">
              <div className="-detail">
                <div className="-title">
                  มาฝึกออกแบบ Front-end ด้วยกัน โดยวันนี้พี่นิวจะพาพวกเราไป
                  Clone YouTube ซึ่งคลิปนี้จะลงมือพาทำกันจริง ๆ
                  เลยมาดูกันว่าขั้นตอนในการทำเนี่ยมันยากแค่ไหนกว่าจะได้เป็นแอปพลิเคชันนี้ให้พวกเราได้ดูกัน
                  ถ้าพร้อมแล้วอย่ารอช้าไปรับชมกันเลย
                </div>
                <div className="-channel">Andy CK</div>
                <div className="-view">การดู 1.2 ล้านครั้ง. 4 วันที่ผ่านมา</div>
              </div>
            </div>
          </div>
          <div className="short">
            <div className="-thumb">
              <img src="https://via.placeholder.com/270x480" />
            </div>
            <div className="-about">
              <div className="-detail">
                <div className="-title">
                  มาฝึกออกแบบ Front-end ด้วยกัน โดยวันนี้พี่นิวจะพาพวกเราไป
                  Clone YouTube ซึ่งคลิปนี้จะลงมือพาทำกันจริง ๆ
                  เลยมาดูกันว่าขั้นตอนในการทำเนี่ยมันยากแค่ไหนกว่าจะได้เป็นแอปพลิเคชันนี้ให้พวกเราได้ดูกัน
                  ถ้าพร้อมแล้วอย่ารอช้าไปรับชมกันเลย
                </div>
                <div className="-channel">Andy CK</div>
                <div className="-view">การดู 1.2 ล้านครั้ง. 4 วันที่ผ่านมา</div>
              </div>
            </div>
          </div>
          <div className="short">
            <div className="-thumb">
              <img src="https://via.placeholder.com/270x480" />
            </div>
            <div className="-about">
              <div className="-detail">
                <div className="-title">
                  มาฝึกออกแบบ Front-end ด้วยกัน โดยวันนี้พี่นิวจะพาพวกเราไป
                  Clone YouTube ซึ่งคลิปนี้จะลงมือพาทำกันจริง ๆ
                  เลยมาดูกันว่าขั้นตอนในการทำเนี่ยมันยากแค่ไหนกว่าจะได้เป็นแอปพลิเคชันนี้ให้พวกเราได้ดูกัน
                  ถ้าพร้อมแล้วอย่ารอช้าไปรับชมกันเลย
                </div>
                <div className="-channel">Andy CK</div>
                <div className="-view">การดู 1.2 ล้านครั้ง. 4 วันที่ผ่านมา</div>
              </div>
            </div>
          </div>
          <div className="short">
            <div className="-thumb">
              <img src="https://via.placeholder.com/270x480" />
            </div>
            <div className="-about">
              <div className="-detail">
                <div className="-title">
                  มาฝึกออกแบบ Front-end ด้วยกัน โดยวันนี้พี่นิวจะพาพวกเราไป
                  Clone YouTube ซึ่งคลิปนี้จะลงมือพาทำกันจริง ๆ
                  เลยมาดูกันว่าขั้นตอนในการทำเนี่ยมันยากแค่ไหนกว่าจะได้เป็นแอปพลิเคชันนี้ให้พวกเราได้ดูกัน
                  ถ้าพร้อมแล้วอย่ารอช้าไปรับชมกันเลย
                </div>
                <div className="-channel">Andy CK</div>
                <div className="-view">การดู 1.2 ล้านครั้ง. 4 วันที่ผ่านมา</div>
              </div>
            </div>
          </div>
          <div className="short">
            <div className="-thumb">
              <img src="https://via.placeholder.com/270x480" />
            </div>
            <div className="-about">
              <div className="-detail">
                <div className="-title">
                  มาฝึกออกแบบ Front-end ด้วยกัน โดยวันนี้พี่นิวจะพาพวกเราไป
                  Clone YouTube ซึ่งคลิปนี้จะลงมือพาทำกันจริง ๆ
                  เลยมาดูกันว่าขั้นตอนในการทำเนี่ยมันยากแค่ไหนกว่าจะได้เป็นแอปพลิเคชันนี้ให้พวกเราได้ดูกัน
                  ถ้าพร้อมแล้วอย่ารอช้าไปรับชมกันเลย
                </div>
                <div className="-channel">Andy CK</div>
                <div className="-view">การดู 1.2 ล้านครั้ง. 4 วันที่ผ่านมา</div>
              </div>
            </div>
          </div>
          <div className="short">
            <div className="-thumb">
              <img src="https://via.placeholder.com/270x480" />
            </div>
            <div className="-about">
              <div className="-detail">
                <div className="-title">
                  มาฝึกออกแบบ Front-end ด้วยกัน โดยวันนี้พี่นิวจะพาพวกเราไป
                  Clone YouTube ซึ่งคลิปนี้จะลงมือพาทำกันจริง ๆ
                  เลยมาดูกันว่าขั้นตอนในการทำเนี่ยมันยากแค่ไหนกว่าจะได้เป็นแอปพลิเคชันนี้ให้พวกเราได้ดูกัน
                  ถ้าพร้อมแล้วอย่ารอช้าไปรับชมกันเลย
                </div>
                <div className="-channel">Andy CK</div>
                <div className="-view">การดู 1.2 ล้านครั้ง. 4 วันที่ผ่านมา</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Content;
