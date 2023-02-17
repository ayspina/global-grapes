import './LineItems.css';

export default function LineItems({ lineItem, isPaid, handleChangeQty }) {
    return (
      <div className="LineItem">
        <div className="item">
          <span>{lineItem.wine.grape}</span>
          <span>${lineItem.wine.price}</span>
        </div>
      <div className="qty">
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.wine._id, lineItem.qty - 1)}
            >−</button>
          }
        <span>{lineItem.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.wine._id, lineItem.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
      <hr />
      </div>  
      
    )
}