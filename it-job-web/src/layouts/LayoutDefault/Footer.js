function Footer() {
      return (
            <>
                  <footer className="layout-default__footer">
                        <div className="container">
                              <strong>&copy; {new Date().getFullYear()} IT Job Portal. All rights reserved.</strong>
                              <p>Follow us on <a href="https://twitter.com">Twitter</a> | <a href="https://linkedin.com">LinkedIn</a></p>
                        </div>
                  </footer>
            </>
      )
}
export default Footer;