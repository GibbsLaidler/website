const auth = async (req, res) => {
    const SECRET_KEY = process.env.APP_SECRET_KEY;
  
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${req.body.token}`;
  
    try {
      const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
  
      const recaptchaJson = await recaptchaRes.json();
  
      res.status(200).json({ recaptchaJson });
    } catch (e) {
      res.status(400).json(e.error);
    }
  };
  
  export default auth;