import Head from 'next/head'
import Dashboard from './dashboard/dashboard'

var axios = require('axios');

export default function Home(props) {
  console.log(props.data)
  return (
    <div>
      <Head>
        <title>Crypto Currency Dashboard</title>
        <link rel="icon" href="/favicon.ico" /><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossOrigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Head>
<script src="/__/firebase/8.4.2/firebase-app.js"></script>

<script src="/__/firebase/8.4.2/firebase-analytics.js"></script>

<script src="/__/firebase/init.js"></script>
<Dashboard data={props.data}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  
    const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      method: 'get',
      headers: { 
        'X-CMC_PRO_API_KEY': '9737c94c-9839-4ab2-b161-616cefa64abf', 
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        "Access-Control-Allow-Headers": "x-requested-with, x-requested-by" 
      }
    })
    const data = await res.json()

    
    //const data = await axios(config)
    
    return {
      props:{
        data
      }
    }
  }
