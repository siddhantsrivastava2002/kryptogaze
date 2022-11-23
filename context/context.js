import React from "react";
import { createContext,useState,useEffect } from "react";


export const KryptoGazeContext = createContext();
const getTopCoins = async () => {
    try {
      const res = await fetch('/api/topcoins');
      const data = await res.json()
      return data.data.data
    } catch (e) {
      console.log(e.message)
    }
  }


export const KryptoGazeProvider = ({children}) => {
    return (
        <KryptoGazeContext.Provider value={{ getTopCoins }}>
            {children}
        </KryptoGazeContext.Provider>
    )

}