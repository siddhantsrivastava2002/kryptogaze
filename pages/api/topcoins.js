export default function handler(req, res) {
    const getData = async () => {
      const response = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=ee87dac3-f2a1-45aa-8038-4e0d3066b4f0`,
        {
          method: 'GET',
          headers: {
            Accept: '*/*',
          },
        },
      )
  
      const data = await response.json()
  
      res.status(200).json({ data })
    }
  
    getData()
  }