import Image from 'next/image'
import styles from './page.module.css'
import loginStyles from './styles/login.module.css'
import AdFinlogo from "../../public/AdFinlogo.png"
import lock from "../../public/lock.png"
import msg from "../../public/msg.png"
import rimg from "../../public/rimg.png"


export default function Home() {
  return (
    <main >
      
      <div className={loginStyles.container}>
        <div className={loginStyles.left}>
          <Image
            src={AdFinlogo}
            className={loginStyles.logo}
          />
          <div className={loginStyles.formBox}>
            <h2 style={{ color: "black", fontWeight: "bold",lineHeight:"50px" }}><b>Login</b></h2>
            <p style={{ marginBottom:"10px" }}>Enter Your Email ID and Password To Login</p>

            <form>
              <div className={loginStyles.inputBox}>
                <span>
                  <Image
                    src={msg }
                    width="15%"
                    minWidth="20px"
                    height={20}
                    marginLeft="10px"
                  />
                </span>
                <input placeholder="Enter Mobile or Email"/>
              </div>

              <div className={loginStyles.inputBox}>
                <span>
                <Image
                    src={lock }
                    width="15%"
                    minWidth="20px"
                  height={20}
                  
                  />
                  </span>
                <input type="password" placeholder="Password"/>
              </div>
              <button className={loginStyles.loginButton}>Log In</button>
            </form>
          </div>

        </div>
        <div className={loginStyles.containerRight}>
          <h1 >
            Welcome To  <br/>
            AdFin Admin Portal
          </h1>
          <Image
            src={rimg}
            className={loginStyles.rightImage}
          />
        </div>
      </div>
    </main>
  )
}
