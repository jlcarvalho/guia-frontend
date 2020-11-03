import Head from 'next/head'
import styles from './index.module.css'

import data from '../data/data.json';

import { StorageProvider } from '../lib/contexts/StorageContext';

import Section from '../components/Section/Section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>guia front end em português</title>
        <meta name="description" content="Guia (altamente opinativo) para iniciantes no desenvolvimento front end organizado de forma sequencial semelhante as tracks do bento.io." />
        <meta name="viewport" content="width=device-width" />

        <meta property="og:title" content="guia front end em português"/>
        <meta property="og:url" content="http://jlcarvalho.github.io/guia-frontend/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Guia (altamente opinativo) para iniciantes no desenvolvimento front end organizado de forma sequencial semelhante as tracks do bento.io." />
        <meta property="og:image" content="http://jlcarvalho.github.io/guia-frontend/images/logo.png" />

        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css' />
      </Head>

      <header>
        <div className={styles.container}>
          <h1 className={styles.title}>guia front end em português</h1>

          <div className={styles.description}>
            <p>Este guia é voltado para iniciantes no desenvolvimento front end e possui seu conteúdo organizado de forma sequencial de tal forma que você conseguirá aprender de forma iterativa incremental, ou seja, começará do básico e irá aprofundando seus conhecimentos através de ciclos onde novos conteúdos serão introduzidos.</p>
            <hr />
            <p>Existem materiais incríveis em português, basta saber onde procurar, e, por isso, nós os organizamos para quem está começando.</p>
            <p>Isso quer dizer que não preciso aprender inglês? <strong>NÃO</strong>! O domínio da língua inglesa é de extrema importância na área de desenvolvimento. A maior parte dos recursos disponíveis na web estão em inglês e sempre que você precisar se aprofundar um pouco mais em determinado assunto acabará esbarrando no idioma.</p>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <StorageProvider>
          {
            data.map((item, index) =>
              <Section
                key={item.slug}
                align={index % 2 === 0 ? 'right' : 'left'}
                {...item}
              />
            )
          }
          </StorageProvider>
        </div>
      </main>

      <a href="https://github.com/jlcarvalho/guia-frontend.git">
        <img
          className={styles.ribbon}
          src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
          alt="Fork me on GitHub"
          data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
        />
      </a>
    </div>
  )
}
