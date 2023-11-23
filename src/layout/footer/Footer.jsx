import classes from './Footer.module.css'
import instagram from './images/ic-instagram.svg'
import whatsapp from './images/ic-whatsapp.svg'
function Footer(){
    return(
        <footer>
            <div className={classes.title}>
                <h3>Contact</h3>
            </div>
            <div className={classes.phone}>
                <h4>Phone</h4>
                <p>+49 999 999 99 99</p>
            </div>
            <div className={classes.socials}>
                <h4>Socials</h4>
                <div className={classes.socialsWrapper}>
                    <img src={instagram} alt='instagram' />
                    <img src={whatsapp} alt='whatsapp' />
                </div>
            </div>
            <div className={classes.address}>
                <h4>Address</h4>
                <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
            </div>
            <div className={classes.workingHours}>
                <h4>Working Hours</h4>
                <p>24 hours a day</p>
            </div>
            <div className={classes.gMap}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.371340391768!2d13.366289969775384!3d52.50913442621049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2spl!4v1700733721507!5m2!1sru!2spl" style={{width: 1440, height: 350, border:0, borderRadius: 12}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </footer>
    )
}
export default Footer