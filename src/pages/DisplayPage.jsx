import React from 'react'
import { Link } from 'react-router-dom'
import HomeStore from '../stores/HomeStore'
import Header from '../components/Header'
import ListItem from '../components/ListItem'

export default function DisplayPage() {
    const store = HomeStore()


     React.useEffect(() => {
        store.fetchCoins()

     }, [])

        return (
            <div>
                <Header/>
                <div className='width'>
                <header className='home-search'>
                    <h2>Search coins</h2>
                    <input type= "text" value={store.query} onChange={store.setQuery}/>
                </header>
                </div>
                
                <div className='home-cryptos'>
                    <div className='width'>
                        <h2>Trending Coins</h2>
                    {store.coins.map(coin => {
                    return (
                      <ListItem key= {coin.id}
                      coin={coin}/>
                    )

                })}
                    </div>
                
                </div>
                
                
            </div>
        )
}

