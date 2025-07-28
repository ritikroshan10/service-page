import './deals.css';
import { FaRegClock } from 'react-icons/fa';

const Deals = () => {
  return (
    <div className="deals-container">
      <h2 className="deals-heading">
        Multiple Cuisines & <br /> Beverages
      </h2>

      <div className="deals-content">
        <div className="deals-left">
          <div className="image-area">
            <div className="deal-box">
              <div className="box-title">Best Deals</div>
              <div className="box-subtitle">Grilled Ribeye Beef</div>
            </div>
          </div>
        </div>

        <div className="deals-right">
          <p className="deal-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
          <p className="deal-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>

          <div className="deal-info">
            <h4>Hours</h4>
            <p><FaRegClock className="icon" /> Breakfast: 07:00 AM – 11:00 AM</p>
            <p><FaRegClock className="icon" /> Lunch: 12:00 PM – 02:00 PM</p>
            <p><FaRegClock className="icon" /> Dinner: 06:30 PM – 10:00 PM</p>
          </div>

          <div className="deal-info">
            <h4>Dresscode</h4>
            <p>Smart Casual (No Shorts, No Hats, No Sandals)</p>
          </div>

          <div className="deal-info">
            <h4>Terrace</h4>
            <p>Open For Drinks Only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
