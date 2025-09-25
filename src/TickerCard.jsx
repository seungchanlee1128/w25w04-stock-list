import React from 'react'

function TickerCard({ ticker, name, currentPrice, previousClose }) {
  const isUp = currentPrice > previousClose
  const diff = (currentPrice - previousClose).toFixed(2)
  const diffColor = isUp ? 'text-green-600' : 'text-red-600'

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="text-xl font-bold mb-2">{ticker}</div>
      <div className="text-gray-600 mb-4">{name}</div>
      <div className="text-2xl font-bold mb-2">{currentPrice}</div>
      <div className={diffColor}>
        {isUp ? '▲' : '▼'} {diff}
      </div>
    </div>
  )
}

export default TickerCard