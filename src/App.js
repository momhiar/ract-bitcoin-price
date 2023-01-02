import "./styles/globals.scss";
import MainLayout from "./components/Layouts/mainLayout";
import styles from "./styles/app.module.scss";
function App() {
  return (
    <>
      <MainLayout>
        <div className="w-full flex-wrap items-start lg:flex lg:justify-between max-w-[1400px]">
          <div className={`${styles.box} w-full lg:w-[60%]`}>test</div>
          <div className={`${styles.box} w-full lg:w-[35%]`}>test</div>
          <div className={`${styles.box} w-full`}>test</div>
        </div>
      </MainLayout>
    </>
  );
}
export default App;
