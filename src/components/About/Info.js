import styles from "./Info.module.css";

function Info() {
  return (
    <div className={styles.Info}>
      <div>
            <img src="./trading.jpg"></img>
      </div>
      <div>
        <p>
          ALASEEL AL DAYEM GOODS WHOLESALERS L.L.C is a general trading company which
          established in 2021 in Dubai, UAE. Our company is mainly specialized
          in general trading, food materials, electronics, and cars. We are the
          leading company in Dubai which giving the most comprehensive service
          to everyone with the aim of customer satisfaction. Our activities
          include distribution, merchandising, logistics and shipping services
          in over 500 sites all over Turkey, Libya, UAE and Europe countries.
        </p>
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default Info;
