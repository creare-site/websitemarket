import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'

const IndexPage = () => (
  <Layout>

    <SEO title="Creare Site Clinica Dentara - Site de Prezentare" 
         description="Site de prezentare clinica dentara. Produs digital WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
            <a href="https://site-clinica-dentara.websitemarket.ro/">Creare Site Clinica Dentara</a>
        </h1>
      
        <span className="image main">
            <img alt="Creare Site cu design modern. Un produs WebsiteMarket."
                 src="https://raw.githubusercontent.com/creare-site/static/master/produse/creare-site-clinica-dentara-intro.gif"/>
        </span>
        
        <p>
          <b>Website de prezentare</b> cu un design simplu si modern.
          <br />Alege sa fii prezent in mediul online printr-un design care arata perfect pe orice dispozitiv.
        </p>

        <hr />

        <p>
            <b><a href="https://cazare-mamaia-nord.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/clinica-dentara">codul sursa</a></b> (pentru dezvoltatori).  

            <br />

            <b>Comanda acest website</b> printr-un simplu email <b>hello@websitemarket.ro</b>.
        </p>

        </div>

      </div>
  </Layout>
);

export default IndexPage;
