import style from "./Footer.module.css";
import Card from "../UI/Card";
const Footer = () => {
  return (
    <Card col="col-12">
      <footer class="mt-auto">
        <div class={`inner ${style.Footer}`}>
          <p>Copyright @ Your Website 2021</p>
        </div>
      </footer>
    </Card>
  );
};
export default Footer;
