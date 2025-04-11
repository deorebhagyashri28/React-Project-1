const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="heroButton">
          <button>Shop Now</button>
          <button className="secondaryButton">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>        
        <div className="brandIcons">
          <img src="/images/amazon.png" alt="amazon" />
          <img src="/images/flipkart.png" alt="flipkart" />
        </div>
        </div>
      </div>
      
      <div className="imageSection">
        <img src="/images/shoe_image.png" alt="shoeImage" />
      </div>
    </main>
  );
};
export default HeroSection;
