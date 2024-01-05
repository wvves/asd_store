import { useTheme } from "../../utils/hooks/useTheme";
import classes from "./NavBar.module.css"

const NavBar = () => {
  const {theme, setTheme} = useTheme()
  
  return (
    <div className={classes.navbar}>
      <div className={classes.lunar_img}>
          <img className={classes.lunar_blessing}/>
          <div className={classes.asd_store}>
            <div style={{zIndex: 2}}>asd-store</div>
          </div>
      </div>
      <div className={classes.right_el}>
        <div>
          <input 
            type="checkbox" 
            id="darkmode" 
            onClick={() => setTheme(theme === 'dark' ? 'light': 'dark')}
            checked={(theme === 'dark')}/>
          <label htmlFor="darkmode">dark mode</label>
        </div>
        <div>cart</div>
        <div>profile</div>
      </div>
    </div>
  );
};

export default NavBar;