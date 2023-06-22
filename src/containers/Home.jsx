import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import { useSelector } from 'react-redux';

function Home() {
  const myList = useSelector((state) => state.myList);
  const trends = useSelector((state) => state.trends);
  const originals = useSelector((state) => state.originals);
  console.log(myList);

  return;
};

export default Home;
