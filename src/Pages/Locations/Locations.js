import React from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Collapse from "../../Components/Collapse/Collapse";
import Carousel from "../../Components/Carousel/Carousel";
import datas from "../../Data/Data.js";
import Tag from "../../Components/Tag/Tag";
import HostInfos from "../../Components/HostPicture/HostInfos";
import Rating from "../../Components/Rating/Rating";
import "./LocationStyle.scss";

function Locations() {
  const { id } = useParams();

  const data = datas.find((item) => item.id === id);

  if (!data) {
    return <Navigate to="*" replace={true} />;
  }

  const {
    pictures,
    title,
    location,
    tags,
    host,
    rating,
    description,
    equipments,
  } = data;

  return (
    <div className="Locations">
      <Navbar />
      <div>
        <Carousel pictures={pictures} />
        <div className="Info">
        <div className="InfoLocation">
          <div className="InfoLocationPlace">
            <h3 className="InfoLocationTitle">{title}</h3>
            <h6 className="InfoLocationCity">{location}</h6>
            <div className="InfoLocationTags">
              {tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            </div>
          </div>
          <div className="InfoLocationOther">
          <div className="InfoLocationHost">
              <HostInfos image={host.picture} text={host.name} />
            </div>
            <div className="RatingHost"> 
            <Rating rating={rating} /></div>
          </div>
        </div>
        <div className="collapse-container">
          <div className="collapse-left">
            <Collapse title={"Description"}>
              <p>{description}</p>
            </Collapse>
          </div>
          <div className="collapse-right">
            <Collapse title={"Equipements"} content={equipments}>
              <ul className="collapse-list">
                {equipments.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Locations;
