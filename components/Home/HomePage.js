import HHeader from "./HComponents/HHeader";
import HHero from "./HComponents/HHero";
import Footer from "../General/Footer";
import Modal from "../RegisterForm/Modal";
const HomePage = ({ onClick, modalOpen, close, styles }) => {
  return (
    <>
      <div className={styles.body}>
        <HHeader styles={styles} onClick={onClick} />
        <HHero styles={styles} />
        <Footer />
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close} key="/home" />
        )}
      </div>
    </>
  );
};

export default HomePage;
