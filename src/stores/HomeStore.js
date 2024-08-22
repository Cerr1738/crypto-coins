import {create} from 'zustand'
import axios from 'axios'
import debounce  from '../help/debounce'


const HomeStore = create((set) => ({
    market: [],
    coins: [],
    trending: [],
    query: '',

    setQuery: (e) => {
        set({query: e.target.value})
        HomeStore.getState().searchCoins()
    },
    

    searchCoins: debounce (async () => {
        const {query, trending, market} = HomeStore.getState();

        if (query.length > 2){
        const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
        
        const coins = res.data.coins.map(coin => {
            return{
                name: coin.name,
                image: coin.large,
                id: coin.id
            }
        })

        set({coins, trending : coins, market : coins})

    } else{

    }
}, 500),


    fetchCoins: async () => {
        
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')


      const coins = res.data.map(coin => {
        return{
            name: coin.name,
            image: coin.image,
            id: coin.id,
            marketCap: (coin.market_cap).toFixed(0),
            currentPrice: (coin.current_price).toFixed(0),
            priceChange: (coin.price_change_24h).toFixed(0),
            totalVolume: (coin.total_volume).toFixed(0),
        }

      })

      set({coins , trending : coins, market : coins})

 
    },

    
    
})) 


export default HomeStore
