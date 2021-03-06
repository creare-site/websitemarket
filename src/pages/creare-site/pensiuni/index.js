import React from 'react';

import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO'
import CtaBottom from '../../../components/CtaBottom'

const IndexPage = () => (
  <Layout>

    <SEO title="Creare Site pensiuni - Site-uri de Prezentare" 
         description="Site-uri de prezentare pensiuni. Produse digitale WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
          Site Pensiuni
        </h1>

        <p>
          Ai o pensiune si nu detii un website? Aceast colectie de website-uri te poate inspira sa iti lansezi unul in perioada urmatoare.
        </p>

        <hr />

        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/vila-castelul-maria-apuseni-intro.gif"
                   alt="Vila Castelul Maria - Un produs Websitemarket." />
            </span>
            
            <h3> <a href="/creare-site/pensiuni/vila-castelul-maria-apuseni/">Vila Castelul Maria</a> </h3>
            Fie că vrei să faci un popas pentru câteva zile, să-ți odihnești mintea și sufletul, fie că vrei să te oprești la o masă caldă, noi am pregătit pernele, iar bucătăresele au nevoie doar de câteva cuvinte ca să se pună pe treabă.
            Dacă ești un iubitor de liniște și ți-e dor de un loc unde timpul stă și respiră, ai ajuns unde trebuie!
            <br />
            Acceseaza pagina <b><a href="/creare-site/pensiuni/vila-castelul-maria-apuseni/">Pensiunii Castelul Maria</a></b> pentru mai multe informatii.{' '} 

            </p>
        </section>
        </div>

        <hr />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/pensiunea-barlogul-ursilor-screen.png"
                   alt="Pensiunea Barlogul Ursilor  - Un produs Websitemarket." />
            </span>
            
            <h3> <a href="/creare-site/pensiuni/barlogul-ursilor-lepsa/">Pensiunea Barlogul Ursilor</a> </h3>
            Pensiunea Barlogul Ursilor este singura locatie din Lepsa de unde se pot admira culmile ce alcatuiesc Capul lui Decebal si o panorama unica a muntilor Vrancei. 
            Vila este destinata iubitorilor de natura, nu are vecinatati si se ajunge de la sosea pe un drum forestier accesibil oricarui mijloc auto.
            <br />
            Acceseaza pagina <b><a href="/creare-site/pensiuni/barlogul-ursilor-lepsa/">Pensiunea Barlogul Ursilor</a></b> pentru mai multe informatii.{' '} 

            </p>
        </section>
        </div>

        <hr />

        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/casa-pescarilor-jurilovca-screen.png"
                   alt="Pensiunea Casa Pescarilor  - Un produs Websitemarket." />
            </span>
            
            <h3> <a href="/creare-site/pensiuni/casa-pescarilor-jurilovca/">Pensiunea Casa Pescarilor</a> </h3>
            Situata in satul Lunca, pe marginea lacului Golovita, in complexul Razim-Sinoe, Pensiunea Casa Pescarilor se bucura de o locatie deosebita, fiind la doar 9 km de capul Dolosman.
            Casa Pescarilor va pune la dispozitie 4 camere duble, 2 apartamente (cu 2 camere) si 6 casute, fiecare avand baie proprie, TV, aer conditionat si frigider.
            <br />
            Acceseaza pagina <b><a href="/creare-site/pensiuni/casa-pescarilor-jurilovca/">Pensiunii Casa Pescarilor</a></b> pentru mai multe informatii.{' '} 

            </p>
        </section>
        </div>

        <hr />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/pensiunea-aquavilla-delta-screen.png"
                   alt="Pensiunea AquaVilla Delta - Un produs Websitemarket." />
            </span>
            
            <h3> <a href="/creare-site/pensiuni/pensiunea-aquavilla-delta/">Pensiunea AquaVilla Delta</a> </h3>
            <strong>Pensiunea AquaVilla Delta</strong> este o reinterpretare a vremurilor apuse, in care obisnuiam sa ne scaldam si sa pornim in cautarea fluturilor frumos colorati, care ne indemnau cu zborul lor sa ne traim copilaria in libertatea acelor zone mitice si rapitoare.
            <br />
            Acceseaza pagina <b><a href="/creare-site/pensiuni/pensiunea-aquavilla-delta/">Pensiunii AquaVilla Delta</a></b> pentru mai multe informatii.{' '} 

            </p>
        </section>
        </div>

        <hr />

        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/pensiune-apuseni-valea-gepisului-screen.png"
                   alt="Pensiunea Valea Gepisului  - Un produs Websitemarket." />
            </span>
            
            <h3> <a href="/creare-site/pensiuni/apuseni-valea-gepisului/">Pensiunea Valea Gepisului</a> </h3>
            Aici, în inima Bihorului, într-un decor pur și simplu feeric, ți-am pregătit un loc al tău precum o casă departe de casă în care să fii tratat mai mult decât un oaspete, bucurându-te atât de facilitățile pe care ți le oferim dar și de frumusețea naturii.
            <br />
            Acceseaza pagina <b><a href="/creare-site/pensiuni/apuseni-valea-gepisului/">Pensiunii Valea Gepisului</a></b> pentru mai multe informatii.{' '} 

            </p>
        </section>
        </div>

        <hr />

        <CtaBottom/>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
