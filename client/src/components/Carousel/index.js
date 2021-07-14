import React from 'react';
import { useDispatch } from 'react-redux';
import { gameSelected, gameClick, gameShow } from '../../actions';
import Slider from 'react-slick';
import './carousel.css';
import axios from 'axios';
import baseUrl from '../../url/http';

const Photo = ({ id }) => {
  const dispatch = useDispatch();

  function selectedDataHandler(gacha_id) {
    try {
      axios.get(baseUrl + 'game/' + gacha_id).then((response) => {
        console.log(response.data.data[0]);
        dispatch(gameSelected(response.data.data[0]));
        dispatch(gameClick(true));
        dispatch(gameShow(false));
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <img
        alt={`gacha_${id}`}
        src={`/images/game/gacha_${id}.png`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onClick={() => {
          console.log(id);
          selectedDataHandler(id);
        }}
      />
    </div>
  );
};

export default function Carousel({ onClick }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="container"
      style={{ padding: '50px', background: '#fff', dispaly: 'flex' }}
    >
      <Slider {...settings}>
        {[...Array(20).keys()].map((i) => {
          return <Photo id={i + 1} onClick={onClick} />;
        })}
      </Slider>
    </div>
  );
}
