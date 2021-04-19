import React from 'react';
import './about.css';
function About() {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <div className='about__me'>
        <h3>Name : Sujeet Kumar</h3>
        <h3>Roll : 1806439</h3>
        <h3>
          Github Profile:{' '}
          <a href='https://github.com/Sujeet3099'>
            https://github.com/Sujeet3099
          </a>
        </h3>
        <h3>Skills : C++, Java, React, Express, Node.js, MongoDB, MySQL</h3>

        <h2>Projects</h2>
        <h3>1. Bill Management App (01/2021 - 03/2021)</h3>
        <p>
          AI-Enabled FinTech B2B Bill Management Application to find whether
          bill payment will be delayed or not.
          <br /> Used React for the UI part and jspdf to let the user download
          the invoice in PDF format
          <br /> Used Java Servlet to create APIs and JDBC to connect with MySQL
          <br /> Used Python to make a model to predict the delay and flask to
          create the API
        </p>

        <h3>2. Netflix-clone (03/2021 - 03/2021)</h3>
        <p>
          A Netflix like app to with login and signup functionality <br />
          Used tmdb API to fetch data Used React to show all the data and video
        </p>

        <h3>3 Covid-19-Tracker (01/2021 - 01/2021)</h3>
        <p>
          An app to track and analyze total cases, recovered cases and death
          cases of Covid-19
          <br /> Used disease.sh API for covid-19 data and Visualize Data using
          graphs and on map
        </p>

        {/* <h3>4. Cocktail-lens (01/2021 - 01/2021)</h3>
        <p>
          Search cocktails and their respective recipes. <br />
          Used thecocktaildb.com to show results of Cocktails
        </p> */}
      </div>
    </div>
  );
}

export default About;
