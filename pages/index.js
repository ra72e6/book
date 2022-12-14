//import Head from 'next/head';
//import Image from 'next/image';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
//import styles from '../styles/Home.module.css';
import data from '../utils/data';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
