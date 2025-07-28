import './Menu.css';

const Menu = () => {
  return (
    <div className="container">
      <div className="line"></div>

      <div className="heading">The Menu</div>
     
      <div className="menus">
        <div className="active">Breakfast</div>
        <div>Lunch</div>
        <div>Dinner</div>
        <div>Snacks</div>
        <div>Drinks</div>
      </div>

      <div className="menu-section">

        <div className="column">
          <h3>Appetizer</h3>
          <div className="item">
            <div className="item-title">Potato Salad</div>
            <div className="item-line"></div>
            <div className="item-price">$25</div>
          </div>
          <div className="item-desc">Mix Green Veggie, Potato, Mayonnaise, Sesame</div>

          <div className="item">
            <div className="item-title">Cream Mushroom Soup</div>
            <div className="item-line"></div>
            <div className="item-price">$30</div>
          </div>
          <div className="item-desc">Creamy Mushroom Paste With Garlic Bread</div>

          <div className="item">
            <div className="item-title">Caesar Salad</div>
            <div className="item-line"></div>
            <div className="item-price">$35</div>
          </div>
          <div className="item-desc">Mux Lettuce, Eggs, Shredded Chicken With Garlic Bread</div>

          <div className="item">
            <div className="item-title">Chicken Quesadillas</div>
            <div className="item-line"></div>
            <div className="item-price">$45</div>
          </div>
          <div className="item-desc">Wrapping Tender Chicken With Cheese & Veggie</div>

          <h3 style={{ marginTop: '40px' }}>Drink</h3>
          <div className="item">
            <div className="item-title">Mineral Water</div>
            <div className="item-line"></div>
            <div className="item-price">$10</div>
          </div>
          <div className="item-desc">Premium Mineral Water</div>

          <div className="item">
            <div className="item-title">Fruit Juice</div>
            <div className="item-line"></div>
            <div className="item-price">$15</div>
          </div>
          <div className="item-desc">Mix Berry Juice</div>

          <div className="item">
            <div className="item-title">Apple Cranberry Fritz</div>
            <div className="item-line"></div>
            <div className="item-price">$17</div>
          </div>
          <div className="item-desc">Cranberry Juice, Soda, Vodka</div>

          <div className="item">
            <div className="item-title">Cold Brew Chocolate Martini</div>
            <div className="item-line"></div>
            <div className="item-price">$20</div>
          </div>
          <div className="item-desc">Cold Brew, Chocolate, Whipped Cream</div>
          
        </div>

        <div className="column">
          <h3>Main Course</h3>
          <div className="item">
            <div className="item-title">Aglio Olio</div>
            <div className="item-line"></div>
            <div className="item-price">$42</div>
          </div>
          <div className="item-desc">Olive Oil, Mushroom Champignon</div>

          <div className="item">
            <div className="item-title">Codon Bleu</div>
            <div className="item-line"></div>
            <div className="item-price">$45</div>
          </div>
          <div className="item-desc">Chicken Breast Fillet, Smoked Beef, Mozarella Cheese</div>

          <div className="item">
            <div className="item-title">Shredded Beef Burger</div>
            <div className="item-line"></div>
            <div className="item-price">$49</div>
          </div>
          <div className="item-desc">Aus Beef Sliced With Cheese</div>

          <div className="item">
            <div className="item-title">Salmon Marinara</div>
            <div className="item-line"></div>
            <div className="item-price">$52</div>
          </div>
          <div className="item-desc">Salmon Fillet With Special Marinara Sauce</div>

          <div className="snack-section">
            <h3>Snack</h3>
            <div className="item">
              <div className="item-title">French Fries</div>
              <div className="item-line"></div>
              <div className="item-price">$10</div>
            </div>
            <div className="item-desc">Potato Fries With Seasoning</div>

            <div className="item">
              <div className="item-title">Truffle Parmesan Fries</div>
              <div className="item-line"></div>
              <div className="item-price">$20</div>
            </div>
            <div className="item-desc">Truffle Mushroom With Parmesan Cheese</div>

            <div className="item">
              <div className="item-title">Chicken Wing</div>
              <div className="item-line"></div>
              <div className="item-price">$25</div>
            </div>
            <div className="item-desc">Crispy Chicken Wing With Spicy Sauce</div>

            <div className="item">
              <div className="item-title">Calamary Chips</div>
              <div className="item-line"></div>
              <div className="item-price">$30</div>
            </div>
            <div className="item-desc">Crispy Squid With Mayonnaise and Lemon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;