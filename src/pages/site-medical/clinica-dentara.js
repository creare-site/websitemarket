import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'
import CtaBottom from '../../components/CtaBottom'

const IndexPage = () => (
  <Layout>

    <SEO title="Site Medical - Site de Prezentare cu design Story" 
         description="Site de prezentare potrivit cabinetelor medicale. Produs digital WebsiteMarket." /> 

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://site-clinica-dentara.websitemarket.ro/">Site Clinica Dentara</a>
        </h1>

        <p>
            Acest design simplu si modern are un format potrivit cabinetelor medicale si centrelor de asistenta. 
            <br />
            Cu o afisare impecabila pe orice dispozitiv, acest site medical iti va informa non-stop viitorii pacienti fara ca tu sa aloci o 
            {' '}resursa umana pentru acest lucru.
        </p>

        <div className="row">
            <section>
                <p>
                    <span className="image">
                    <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/creare-site-clinica-dentara-intro.gif"
                         alt="Site medical, Design Story - Un produs Websitemarket" />
                    </span>
                </p>
            </section>
        </div>

        <p>
          <b>Site medical Story</b> cu un design simplu si modern:{' '}
          <b><a href="https://site-clinica-dentara.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/site-clinica-dentara/">codul sursa</a></b>
        </p>

        <br />

        <CtaBottom/>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
