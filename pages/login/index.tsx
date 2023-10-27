import classes from "./login.module.scss";
import Particles from '../../app/components/Particles/Particles';
import { Fragment } from "react";

export default function Login() {
  return (
    <Fragment>
      <Particles color="#4e0096" count={200} />
      <div className={classes.login}>
        <section className={classes.content}>
          <h2>login page</h2>
          <section className={classes.inputs}>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
          </section>
          <button>login</button>
        </section>
      </div>
    </Fragment>
  );
}
